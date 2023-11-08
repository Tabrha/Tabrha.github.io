"use strict";
/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai";
Object.defineProperty(exports, "__esModule", { value: true });
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
var calculator_js_1 = require("../src/calculator.js"); // Import objects used in the Mocha tests
var chai_1 = require("chai");
describe("test calculator with values 2, 3", function () {
    before(function () {
        calculator_js_1.calculator.clear(); // Reset the calculator before each test
    });
    it("checks initial values 0", function () {
        (0, chai_1.expect)(calculator_js_1.calculator.getResult()).to.equal(0);
    });
    it("when 2 is added to 3, the sum is 5", function () {
        calculator_js_1.calculator.add(2).add(3);
        (0, chai_1.expect)(calculator_js_1.calculator.getResult()).to.equal(5);
    });
    it("when 2 is multiplied by 3, the product is 6", function () {
        calculator_js_1.calculator.clear(); // Reset the calculator
        calculator_js_1.calculator.add(2).multiply(3);
        (0, chai_1.expect)(calculator_js_1.calculator.getResult()).to.equal(6);
    });
});
