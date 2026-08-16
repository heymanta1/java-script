// find() is used to find the first element that matches a condition.

let numbers = [5, 12, 8, 20, 15];

let result = numbers.find(function(number) {
    return number > 10;
});

console.log(result);

// practice question
let num = [3, 7, 15, 18, 25];

// Q6. Use find() to find the first number greater than 10.

// Expected:
// 15
let ans=num.find(function(num){
    return num>10;
});
console.log(ans);