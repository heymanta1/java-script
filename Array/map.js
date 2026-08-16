// map() is used when you want to create a new array by changing every element.

let numbers = [1, 2, 3, 4];

let doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled);

// practice question
let num = [5, 10, 15, 20];

// Q4. Use map() to create a new array
// where every number is multiplied by 2.

// Expected:
// [10, 20, 30, 40]
let nums =num.map(function(num){
    return num*2;
});
console.log(nums);
