

//You can write and run the timer code here via npm run app 
// Helper function to demonstrate setInterval
// app.ts
import * as readline from 'readline';

// Helper function to demonstrate setInterval
function printNumbers(start: number, end: number) {
  let current = start;

  const intervalId = setInterval(() => {
    console.log(current);
    current++;

    if (current > end) {
      clearInterval(intervalId);
    }
  }, 1000);
}

// Helper function to demonstrate setTimeout
function printNumbersDelay(start: number, end: number) {
  console.log(`Starting in 3 seconds`);

  setTimeout(() => {
    let current = start;

    const intervalId = setInterval(() => {
      console.log(current);
      current++;

      if (current > end) {
        clearInterval(intervalId);
      }
    }, 1000);
  }, 3000);
}


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Close the readline interface after a delay
setTimeout(() => {
  rl.close();
}, 4000);

console.log(printNumbersDelay(5,10));
console.log(printNumbers(5,10));