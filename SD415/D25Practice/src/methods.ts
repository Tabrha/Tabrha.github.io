
/* 
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
export function filterRange(arr: number[], a: number, b: number): number[] {
    const newArry:number[]=arr.filter(function(num){
        return(num>=a &&num<=b);
    })
    return newArry;
}
type SurnameUser = {
    name: string;
    surname: string;
    id: number;
}

type FullNameUser = {
    fullName: string;
    id: number;
}   

export function map2fullName(users: SurnameUser[]): FullNameUser[] {
    let result: { fullName: string, id: number }[] = [];
  
 
    return users.map((user: SurnameUser) => ({
        fullName: `${user.name} ${user.surname}`,
        id: user.id,
      }));
   
    return result;
}
 