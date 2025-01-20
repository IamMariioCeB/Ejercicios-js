var grades = [];
var total = 0;

process.stdout.write("ingrese la calificacion 1:\n");

process.stdin.on('data', function(data) {
    let input = data.toString().trim();
    let grade = parseFloat(input);

    if (!isNaN(grade) && grade >= 0 && grade <= 100) {
        grades.push(grade);
        total += grade;

        if (grades.length < 4) {
            process.stdout.write(`ingrese la calificacion ${grades.length + 1}:\n`);
        } else {
            let average = total / grades.length;
            process.stdout.write(`El promedio es: ${average.toFixed(2)}\n`);
            process.exit();
        }
    }
});

