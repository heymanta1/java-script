let num1=Number(prompt("Enter the First number"));
let num2=Number(prompt("Enter the Second Number"));
if(num1>num2){
    document.write("The number " + num1 + " is Greater then " + num2 +".");
}
else if(num2>num1){
    document.write("The number " + num2 + " is Greater then " + num1 + ".");
}
else{
    document.write("Both the numbers are equal");
}