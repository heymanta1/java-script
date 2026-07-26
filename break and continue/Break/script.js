let stop = Number(prompt("Enter where to stop"));

for(let i = 1; i <= 10; i++){

    if(i == stop){
        break;
    }

    document.write(i + "<br>");
}