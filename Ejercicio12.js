var num1, num2;

process.stdout.write("Introdusca un numero: \n");
process.stdin.on('data', function(data1){
    num1 = parseFloat(data1.toString().trim());
    process.stdout.write("Introdusca un numero: \n");
    process.stdin.on('data', function(data2){
        num2 = parseFloat(data2.toString().trim());
  
        var suma = num1 + num2;
        var resta = num1 - num2;
        var multiplicacion = num1 * num2;
        
        console.log("suma: " + suma);
        console.log("resta: " + resta);
        console.log("multiplicación: " + multiplicacion);
        
        if (num2 !== 0) {
            var division = num1 / num2;
            console.log("division: " + division);
        } else {
            console.log("no se puede dividir entre cero.");
        }


        process.exit();
    });
});
