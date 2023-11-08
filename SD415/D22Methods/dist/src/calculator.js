"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
exports.calculator = {
    value: 0,
    add: function (num) {
        this.value += num;
        return this;
    },
    subtract: function (num) {
        this.value -= num;
        return this;
    },
    multiply: function (num) {
        this.value *= num;
        return this;
    },
    divide: function (num) {
        if (num === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        this.value /= num;
        return this;
    },
    clear: function () {
        this.value = 0;
        return this;
    },
    getResult: function () {
        return this.value;
    },
};
// implement this
