/* comment out the import assert line (in /dist/test js mocha file) when running in the browser */
// import { assert } from "chai";
//import {double, times100, myMap} from "../src/fnExps.js";
import { double, times100, myMap, myMap1 } from "../src/fnExps.js";
/* 1.	1.	Write a function, double, that takes a number and returns 2 times the number..  */
describe("double", function () {
    it("tests double 10", function () {
        assert.strictEqual(double(10), 20);
    });
    it("tests double 0", function () {
        assert.strictEqual(double(0), 0);
    });
    it("tests double -10", function () {
        assert.strictEqual(double(-10), -20);
    });
});
// /*  2.	Write a function times100 that takes a number and returns 100 times the number. */
describe("times100", function () {
    it("tests times100 10", function () {
        assert.strictEqual(times100(10), 1000);
    });
    it("tests times100 0", function () {
        assert.strictEqual(times100(0), 0);
    });
    it("tests times100 -10", function () {
        assert.strictEqual(times100(-10), -1000);
    });
});
//     /* 3.	Write a function, myMap, that takes an array and a function and returns a new array that has the function applied to each element of the input array. */
describe("myMap", function () {
    const testArray = [1, 2, 3, 4];
    // const doubleFunarray = myMap(testArray, double);
    // const timmes100Array = myMap(testArray,times100);
    it("tests myMap on double", function () {
        assert.deepStrictEqual(myMap(testArray, double), [2, 4, 6, 8]);
    });
    it("tests myMap on times100", function () {
        assert.deepStrictEqual(myMap(testArray, times100), [100, 200, 300, 400]);
    });
});
/* 4.	Demonstrate your myMap function with an anonymous function that triples the input value.  Write this as an anonymous function expression.
Then write it using an arrow expression. */
describe("myMap1", function () {
    const testArray = [-10, 0, 10, 20];
    it("tests myMap1 on triples anonymous function", function () {
        assert.deepStrictEqual(myMap1(testArray, (value) => value * 3), [-30, 0, 30, 60]);
    });
    it("tests myMap1 on triples arrow function", function () {
        assert.deepStrictEqual(myMap1(testArray, (value) => value * 3), [-30, 0, 30, 60]);
    });
});
