var t, h;
process.stdout.write("hora actual:\n");
process.stdin.on('data', function(data) {
    if (!t) {
        t = parseInt(data.toString().trim());
        process.stdout.write("cantidad de horas:\n");
    } else {
        h = parseInt(data.toString().trim());
        process.stdout.write(`En ${h} horas, el reloj marcara las ${(t + h) % 24}:00.\n`);
        process.exit();
    }
});
