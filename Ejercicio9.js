var base, altura;
process.stdout.write("ingrese la base del triangulo:\n");
process.stdin.on('data', function(data) {
    if (!base) {
        base = parseFloat(data.toString().trim());
        process.stdout.write("ingrese la altura del triangulo:\n");
    } else {
        altura = parseFloat(data.toString().trim());
        const area = (base * altura) / 2;
        process.stdout.write(`el area del triángulo es: ${area.toFixed(2)}\n`);
        process.exit();
    }
});

