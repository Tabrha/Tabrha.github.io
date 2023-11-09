export const bank = {
    transactionsDB: [],
    debit: function (id, amount) {
        const customer = this.transactionsDB.find(function (c) {
            return c.customerId === id;
        });
        if (customer) {
            if (amount > 0 && this.getBalance(id) >= amount) {
                this.saveTransaction(id, -amount);
            }
        }
    },
    credit: function (id, amount) {
        const customer = this.transactionsDB.find(function (c) {
            return c.customerId === id;
        });
        if (customer) {
            if (amount > 0) {
                this.saveTransaction(id, amount);
            }
        }
    },
    getBalance: function (id) {
        const customer = this.transactionsDB.find(function (c) {
            return c.customerId === id;
        });
        if (customer) {
            return customer.customerTransactions.reduce(function (balance, transaction) {
                return balance + transaction;
            }, 0);
        }
        return 0;
    },
    saveTransaction: function (id, amount) {
        const customer = this.transactionsDB.find(function (c) {
            return c.customerId === id;
        });
        if (customer) {
            customer.customerTransactions.push(amount);
        }
        else {
            this.transactionsDB.push({ customerId: id, customerTransactions: [amount] });
        }
    },
    bankBalance: function () {
        return this.transactionsDB.reduce((totalBalance, customer) => totalBalance + this.getBalance(customer.customerId), 0);
    },
}; //define bank object as type Bank
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }
];
/* this is complete, no need to modify.
Saves this amount to the customerTransactions array for customerId id. */
bank.saveTransaction = function (customerId, amount) {
    const customer = bank.transactionsDB.find(customer => customer.customerId === customerId);
    if (customer) {
        customer.customerTransactions.push(amount);
    }
};
