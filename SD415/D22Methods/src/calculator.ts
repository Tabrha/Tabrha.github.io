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
  