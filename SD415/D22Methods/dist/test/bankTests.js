"use strict";
/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai";
Object.defineProperty(exports, "__esModule", { value: true });
// import {bank} from "../src/bank.js";  //import objects used in the Mocha tests
// describe("bank tests", function () {
//     beforeEach(function () {  //before each test, initialise the bank object to make tests independent
//         console.log("Reset transactionsDB...");
//         bank.transactionsDB = [
//             { customerId: 1, customerTransactions: [10, 50, -40] },
//             { customerId: 2, customerTransactions: [10, 10, -10] },
//             { customerId: 3, customerTransactions: [5, -5, 55] }];
//       });
//     it("checks initial balance", function () {
//         assert.strictEqual(bank.bankBalance(), 85);
//     });
//     it("checks initial balance of customer 1", function () {
//         assert.strictEqual(bank.getBalance(1), 20);
//     });
//     it("checks initial balance of customer 1 after unallowed debit", function () {
//         bank.debit(1, 1000);
//         assert.strictEqual(bank.getBalance(1), 20);
//     });
//     it("checks initial balance of customer 1 after allowed debit", function () {
//         bank.debit(1, 10);
//         assert.strictEqual(bank.getBalance(1), 10);
//     });
//     /* the credit and debit are made in the bank.js file */
//     it("balance after credit of 20 and debit of 1000 for customer 1", function () {
//         assert.strictEqual(bank.bankBalance(), 85);
//         bank.credit(1, 20);
//         bank.debit(1, 1000);
//         assert.strictEqual(bank.bankBalance(), 105);
//     });
// });
var bank_js_1 = require("../src/bank.js"); // Import objects used in the Mocha tests
describe("bank tests", function () {
    beforeEach(function () {
        console.log("Reset transactionsDB...");
        bank_js_1.bank.transactionsDB = [
            { customerId: 1, customerTransactions: [10, 50, -40] },
            { customerId: 2, customerTransactions: [10, 10, -10] },
            { customerId: 3, customerTransactions: [5, -5, 55] }
        ];
    });
    it("checks initial balance", function () {
        var initialBalance = bank_js_1.bank.bankBalance();
        if (initialBalance === 85) {
            // Mocha's built-in assertion
            return;
        }
        else {
            throw new Error("Expected initial balance to be 85, but it's ".concat(initialBalance));
        }
    });
    it("checks initial balance of customer 1", function () {
        var initialBalance = bank_js_1.bank.getBalance(1);
        if (initialBalance === 20) {
            // Mocha's built-in assertion
            return;
        }
        else {
            throw new Error("Expected initial balance for customer 1 to be 20, but it's ".concat(initialBalance));
        }
    });
    it("checks initial balance of customer 1 after unallowed debit", function () {
        bank_js_1.bank.debit(1, 1000);
        var balance = bank_js_1.bank.getBalance(1);
        if (balance === 20) {
            // Mocha's built-in assertion
            return;
        }
        else {
            throw new Error("Expected balance for customer 1 to remain 20 after unallowed debit, but it's ".concat(balance));
        }
    });
    it("checks initial balance of customer 1 after allowed debit", function () {
        bank_js_1.bank.debit(1, 10);
        var balance = bank_js_1.bank.getBalance(1);
        if (balance === 10) {
            // Mocha's built-in assertion
            return;
        }
        else {
            throw new Error("Expected balance for customer 1 after allowed debit to be 10, but it's ".concat(balance));
        }
    });
    it("balance after credit of 20 and debit of 1000 for customer 1", function () {
        var initialBankBalance = bank_js_1.bank.bankBalance();
        bank_js_1.bank.credit(1, 20);
        bank_js_1.bank.debit(1, 1000);
        var newBankBalance = bank_js_1.bank.bankBalance();
        if (newBankBalance === 105 && initialBankBalance === 85) {
            // Mocha's built-in assertion
            return;
        }
        else {
            throw new Error("Balance not updated as expected after credit and debit.");
        }
    });
});
