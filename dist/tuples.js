"use strict";
// tuples in TypeScript allow you to define an array with a fixed number of elements and assign specific types to each element
// let ar : [number, string];
// ar = [1, "Safi"];
var ar = [1, "Safi"];
// example 2 : 
// however using methods like push will allow you break this principle  of tupels because push is a array method and not tuple and in type script tuple is build over array and type script wont restrict you to use array methods therefor, when you use array method like push, pop type script treate tuple as array 
// let i : [number, string] = [1, "safi"];
// i.push(45);
// console.log(i);
