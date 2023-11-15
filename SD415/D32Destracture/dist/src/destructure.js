/*
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
export function topSalary(salaries) {
    if (Object.keys(salaries).length === 0) {
        return "No employees";
    }
    let max = -Infinity;
    let topPaid = "";
    for (const [person, salary] of Object.entries(salaries)) {
        if (salary > max) {
            max = salary;
            topPaid = person;
        }
    }
    if (topPaid === "") {
        // This means no valid salary was found (e.g., all salaries were non-positive).
        return null;
    }
    return topPaid;
}
