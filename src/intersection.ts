// In TypeScript, an intersection type is a way to combine multiple types into one. An object of an intersection type will have all the properties and methods from the combined types. It's denoted using the & operator.


// example:1

// interface Flyable {
//     fly(): void;
// }

// interface Swimmable {
//     swim(): void;
// }

// type Amphibious = Flyable & Swimmable;

// const duck: Amphibious = {
//     fly: () => console.log('Flying'),
//     swim: () => console.log('Swimming'),
// };

// duck.fly();  // Output: Flying
// duck.swim(); // Output: Swimming


// example:2

type Person = {
    name:string
}
type Employeee = {
    id:number
}

// note - replace & with | below to get the diff
type personEmployee = Person & Employeee;

let employeee: personEmployee = {
    name : "safi",
    id : 101
}