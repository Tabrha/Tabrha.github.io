

// export const calculator = {
//     value: 0,
  
//     add(num: number) {
//       this.value += num;
//       return this;
//     },
  
//     subtract(num: number) {
//       this.value -= num;
//       return this;
//     },
  
//     multiply(num: number) {
//       this.value *= num;
//       return this;
//     },
  
//     divide(num: number) {
//       if (num === 0) {
//         throw new Error("Division by zero is not allowed.");
//       }
//       this.value /= num;
//       return this;
//     },
  
//     clear() {
//       this.value = 0;
//       return this;
//     },
  
//     getResult() {
//       return this.value;
//     },
//   };
   // implement this

/*********************************/

export const calculator = {
  operand1: 0,
  operand2: 0,
 
  setValues(a:number, b:number) {
    this.operand1 = a;
    this.operand2 = b;
  },
 
  sum() {
    return this.operand1 + this.operand2;
  },
 
  mul() {
    return this.operand1 * this.operand2;
  },
div(){
  if(this.operand2===0){
  throw new Error( "error")
  }else{
    return this.operand1 / this.operand2;
  }
},
  sub() {
    return this.operand1 - this.operand2;
  },
 
};
 
export default calculator;