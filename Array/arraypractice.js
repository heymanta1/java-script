// ==========================================
// JAVASCRIPT ARRAY PRACTICE
// ==========================================

// Starting Array
let students = ["Ram", "Shyam", "Hari", "Sita"];


// Q1. Add "Gita" to the END of the array using push().
// Expected:
// ["Ram", "Shyam", "Hari", "Sita", "Gita"]
students.push("Gita");
console.log(students);



// Q2. Add "Mina" to the BEGINNING of the array using unshift().
// Expected:
// ["Mina", "Ram", "Shyam", "Hari", "Sita", "Gita"]
students.unshift("Mina");
console.log(students);



// Q3. Remove the LAST student using pop().
// Expected:
// ["Mina", "Ram", "Shyam", "Hari", "Sita"]
students.pop();
console.log(students);



// Q4. Remove the FIRST student using shift().
// Expected:
// ["Ram", "Shyam", "Hari", "Sita"]
students.shift();
console.log(students);



// Q5. Use slice() to create a NEW array containing:
// ["Shyam", "Hari"]
let selectedStudents = students.slice(1, 3);
console.log(selectedStudents);



// Q6. Use includes() to check whether "Hari" exists in the array.
// Expected:
// true
console.log(students.includes("Hari"));



// Q7. Use splice() to remove "Shyam" from the array.
// Expected:
// ["Ram", "Hari", "Sita"]
students.splice(1, 1);
console.log(students);



// Q8. Print the final array using console.log().
// Expected:
// ["Ram", "Hari", "Sita"]

console.log(students);
