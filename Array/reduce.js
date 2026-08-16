// reduce() is used to combine all elements of an array into one value.

let numbers = [10, 20, 30, 40];

let total = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0);

console.log(total);

// practice question

let num = [5, 10, 15, 20];

// Q7. Use reduce() to calculate the total of all numbers.

// Expected:
// 50
let ans=num.reduce(function(sum,num){
    return sum+num;
},0);
console.log(ans);