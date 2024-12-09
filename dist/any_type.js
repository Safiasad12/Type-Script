"use strict";
// The any type in TypeScript is a special type that can hold any kind of value without any type checking. It essentially disables TypeScript's static type checking for that variable, making it behave like JavaScript. It is used in dynamic sinarios when we are not sure about any specific type to be used. If we declear any variable in typescript without specifing any type by-default it will be set to 'any' which allows you to change its type in future making type script behaves like java script.
let sales = 314526564746; // number type
let course = "type Script"; // string type
let isPublish = true; // boolean type
let level; // any type
level = "A";
level = 1; // this allows u to override the variable from different data type
