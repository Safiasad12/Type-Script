"use strict";
// In TypeScript, a union type allows a value to have one of several types. It is defined using the pipe (|) symbol between types. This feature is useful when a variable, function parameter, or return type can be one of several types, enabling better type safety and flexibility in your code.
function calcPerc(cgpa) {
    if (typeof cgpa === 'number') {
        return cgpa * 9.5;
    }
    else if (typeof cgpa === 'string') {
        return parseFloat(cgpa) * 9.5;
    }
    else {
        return -1;
    }
}
console.log(calcPerc(8.4));
console.log(calcPerc("8.4"));
