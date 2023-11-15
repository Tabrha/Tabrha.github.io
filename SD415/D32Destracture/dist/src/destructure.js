/*
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
const salaries1 = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
export function topSalary(salaries) {
    let max = -Infinity;
    let topPaid = "";
    for (const [person, salary] of Object.entries(salaries)) {
        if (salary > max) {
            max = salary;
            topPaid = person;
        }
    }
    return topPaid;
}
// console.log(topSalary(salaries1))
