var a;
var b;
var c;
process.stdout.write("ingrese cateto a:\n");
process.stdin.on('data', function(data) {
    if (!a) {
        a = parseFloat(data.toString().trim());
        process.stdout.write("ingrese cateto b:\n");
    } else {
        b = parseFloat(data.toString().trim());
        c = Math.sqrt(a * a + b * b);
        process.stdout.write("la hipotenusa es: " + c.toFixed(2) + "\n");
        process.exit();
    }
});
