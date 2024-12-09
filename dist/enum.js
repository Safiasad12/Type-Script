"use strict";
// let name1= "vidvat";
// let name2 = "safi";
// let name3 = "vineeth";
// enum namee {name1="vidvat", name2 ="safi", name3="vineeth"};
// console.log(namee.name1);
var direction;
(function (direction) {
    direction[direction["d1"] = 1] = "d1";
    direction[direction["d2"] = 2] = "d2";
    direction[direction["d3"] = 3] = "d3";
    direction[direction["d4"] = 4] = "d4";
})(direction || (direction = {}));
;
console.log(direction.d2);
