/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai";

// import {calculator} from "../src/calculator.js";  //import objects used in the Mocha tests

// describe("test calculator with values 2, 3", function () {
//     calculator.setValues(2, 3);  //values for the tests

//     it("checks initial values 2 and 3", function () {
//         assert.strictEqual(calculator.operand1, 2);
//         assert.strictEqual(calculator.operand2, 3);
//     });

//     it("when 2 and 3 are entered, the sum is 5", function () {
//         assert.strictEqual(calculator.sum(), 5);
//     });

//     it("when 2 and 3 are entered, the product is 6", function () {
//         assert.strictEqual(calculator.mul(), 6);
//     });


// });



import { calculator } from "../src/calculator.js"; // Import objects used in the Mocha tests
import { expect } from 'chai';

describe("test calculator with values 2, 3", function () {
    before(function () {
        calculator.clear(); // Reset the calculator before each test
    });

    it("checks initial values 0", function () {
        expect(calculator.getResult()).to.equal(0);
    });

    it("when 2 is added to 3, the sum is 5", function () {
        calculator.add(2).add(3);
        expect(calculator.getResult()).to.equal(5);
    });

    it("when 2 is multiplied by 3, the product is 6", function () {
        calculator.clear(); // Reset the calculator
        calculator.add(2).multiply(3);
        expect(calculator.getResult()).to.equal(6);
    });
});



