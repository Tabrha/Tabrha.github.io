// import { Session } from "inspector";
export function getAllSessions(days) {
    let result = [];
    for (let day of days) {
        result = result.concat(day.sessions);
    }
    return result;
}
export function getAllDurations(days) {
    return getAllSessions(days).map(session => session.duration);
}
export function calculateDailyTotalDuration(arr) {
    const result = arr.reduce((sum, totalduration) => sum + totalduration.duration, 0);
    return result;
}
// export function getAllSessionsForUser(dailyRecord:Day,id:number) :Session[]{
// //     let allSess:Session[]=getAllSessions(Day[]);
// //    return  allSess.map((num)=>{if(num.userId===id)return num;});
// }
// export function calculateDailyTotalDuration(arr:Session[]):number{
//     let sum:number=0;
//    for(let session of arr){
//     sum=sum+session.duration;
//    }
//    return sum;
// }
// function replaceEnds(arr: number[], start: number, end: number): number[] {
//     const result = arr.slice() // copy arr into result so that we don't touch the original array
//     // [1,2,3,4,5]
//     result.splice(0, 1, start)
//     result.splice(arr.length - 1, 1, end)
//     return result
// }
// const a = [1,2,3,4,5]
// console.log(replaceEnds(a, 50, 100))
// console.log(a)
// function replaceEnds(arr: number[], start1: number, start2: number, end1: number, end2: number): number[] {
//     const result = arr.slice() // copy arr into result so that we don't touch the original array
//     result.splice(0, 2, start1, start2)
//     result.splice(arr.length - 2, 2, end1, end2)
//     return result
// }
// const a = [1,2,3,4,5]
// console.log(replaceEnds(a, 50, 51, 100, 101))
// console.log(a)
export function replaceEnds(arr, start1, start2, end1, end2) {
    const result = arr.slice(); // copy arr into result so that we don't touch the original array
    result.splice(0, 1, start1, start2);
    result.splice(result.length - 1, 1, end1, end2);
    return result;
}
export function firstLast(input) {
    return input.map((name) => {
        const arr = name.split(' ');
        return {
            firstName: arr[0],
            lastName: arr[1]
        };
    });
}
console.log(firstLast(["Eleni Araya", "Tesfay Abrha"]));
// type Callback = (i: number) => number
export function higho(callback, argument) {
    return argument.map((i) => callback(i));
}
export function square(i) {
    return i * i;
}
export function absVal(i) {
    return i < 0 ? -i : i;
}
