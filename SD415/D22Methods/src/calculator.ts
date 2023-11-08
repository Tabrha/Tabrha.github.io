

export const calculator = {
    value: 0,
  
    add(num: number) {
      this.value += num;
      return this;
    },
  
    subtract(num: number) {
      this.value -= num;
      return this;
    },
  
    multiply(num: number) {
      this.value *= num;
      return this;
    },
  
    divide(num: number) {
      if (num === 0) {
        throw new Error("Division by zero is not allowed.");
      }
      this.value /= num;
      return this;
    },
  
    clear() {
      this.value = 0;
      return this;
    },
  
    getResult() {
      return this.value;
    },
  };
   // implement this

