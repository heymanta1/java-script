let skip = Number(prompt("Enter the number to skip:"));

for (let i = 1; i <= 20; i++) {

    if (i == skip) {
        continue;
    }

    document.write(i + "<br>");
}