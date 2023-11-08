
//what store in variable: datas

// let i = 1;
// console.log(i);

// let str= "string"
// let bool = true;
// let evenNumbers= [2, 4,6,8];
// let arrayOfstring = ["apple","pear",guava]

// // find palindrome

// function palindrom(str){
//     let newStr = [];
//     for( let i = 0; i < str.length; i++){
//         if(str[i] == str[str.length-1]){
//             newStr.push(str[i])
//         }
//     }
// }


// function evenArray(arr) {
//     let tempArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             tempArr.push(arr[i])
//         }

//     }
//     return tempArr;
// }

// console.log(evenArray([1, 2, 3, 4, 5, 6, 7, 8]));

// function evenArray(arr) {
//     let tempArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             tempArr.push(arr[i])
//         }

//     }
//     return tempArr;
// }

// console.log(evenArray([1, 2, 3, 4, 5, 6, 7, 8]));

// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase for accurate comparison
//    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//     // const length = str.length;
    
//     for (let i = 0; i < length / 2; i++) {
//         if (str[i] !== str[length - 1 - i]) {
//             // If characters at the current positions don't match, it's not a palindrome
//             return false;
//         }
//     }

//     // If the loop completes without returning false, the string is a palindrome
//     return true;
// }
// ************************************************************
           // Find Even   
// ************************************************************

// function findEven(arr){
// let temArray=[]

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]% 2 == 0){
//   temArray.push(arr[i]);
//     }
// }
// return temArray;
// }
// let result = findEven([1, 2, 3, 4, 5, 6, 7, 8])
// console.log("The even numbers are " + result);

// ************************************************************
           // Palindrome   
// ************************************************************

// function checkPalindrome(string){                 
//      let reverse="";
//      for(let i= string.length-1; i >= 0; i--){
//         reverse += string[i];
//      }
//        if(reverse === string){
//         return true; 
//     }else{
//       return false;
//     }
//   }
// let palindrome = checkPalindrome("brother")
// console.log(palindrome)
// ************************************************************
         //method 
// ************************************************************

// var array1 = [1,2,3,4,5];
// array1.splice(0,3);
// console.log(array1);


// var result = array1.slice(0,3);
// console.log(result)



// ************************************************************
         //key value 
// ************************************************************

// let obj={b:'apple'}
// function objectLoop(obj){
//     for(let key in obj){
//         console.log("key value",key,obj[key])
//     }
// // }

// let array = [1, "a", true, [1,2,3,]];

// function getTypeArray(arr){
//     let newArr="";
//     for(let ele in arr){
//         newArr.typeof(ele);
//     }
// return newArr;
// }

// console.log(getTypeArray(array));


// let array = [1, "a", true, [1, 2, 3]];

// function getTypeArray(arr) {
//     let newArr = [];
//     for (let ele of arr) {
//         newArr.push(typeof ele);
//     }
//     return newArr;
// }

// console.log(getTypeArray(array));

// let array = ["Users","tesfa" ,"OneDrive" ,"Desktop" ,"Demo",123,[1,2,3]];

// function getTypeArray(arr) {
//     let newArr = [];
//     for (let element of arr) {
//         newArr.push(element.length);
//     }
//     return newArr;
// }
// console.log(getTypeArray(array));

let array = ["Users", "tesfa", "OneDrive", "Desktop", "Demo", 123, [1, 2, 3],'&'];

function getTypeArray(arr) {
    let newArr = [];
    for (let element of arr) {
        if (typeof element === 'string' || Array.isArray(element)) {
            newArr.push(element.length);
        } else if (typeof element === 'number') {
            newArr.push(String(element).length);
        } else {
            newArr.push(undefined);
        }
    }
    return newArr;
}

console.log(getTypeArray(array));


