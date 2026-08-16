// filter() is used to select specific elements from an array based on a condition.
let numbers = [10, 15, 20, 25, 30];

let bigNumbers = numbers.filter(function(number) {
    return number > 20;
});

console.log(bigNumbers);

// practice question 
let num= [5, 12, 8, 20, 3, 15];

// Q5. Use filter() to create a new array
// containing only numbers greater than 10.

// Expected:
// [12, 20, 15]
let bignum=num.filter(function(num){
    return num>10;
});
console.log(bignum);

