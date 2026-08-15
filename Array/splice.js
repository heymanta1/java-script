// splice() is used to add, remove, or replace items in an array.

// Basic syntax
// array.splice(start, deleteCount);

let fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.splice(1, 2);

console.log(fruits);

// Here:

// fruits.splice(1, 2);
// 1 → start at index 1
// 2 → remove 2 items

// So "Banana" and "Mango" are removed.

//Example 2 — Add an item

let fruitss = ["Apple", "Mango"];

fruitss.splice(1, 0, "Banana");

console.log(fruitss);