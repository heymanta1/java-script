// map() is used when you want to create a new array by changing every element.

let numbers = [1, 2, 3, 4];

let doubled = numbers.map(function(number) {
    return number * 2;
});

console.log(doubled);

