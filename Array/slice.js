// slice() — Get a part of an array

// slice() lets you copy a portion of an array without changing the original array.

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

let result = fruits.slice(1, 4);

console.log(result);


// // slice() Practice Questions
// 1. What is the output?
let fruitss = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruitss.slice(1, 3));

// output ["Banana","Mango"]

let numbers = [10, 20, 30, 40, 50];
console.log(numbers.slice(0, 3));

//Answer [10,20,30]

let colors = ["Red", "Blue", "Green", "Yellow", "Black"];
console.log(colors.slice(1));
// Answer [ 'Blue', 'Green', 'Yellow', 'Black' ]