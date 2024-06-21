let iteraciones = parseInt(prompt("Ingrese cuántos números de la serie de Fibonacci desea imprimir"));

if (isNaN(iteraciones) || iteraciones <= 0) {
    console.log("Por favor, ingrese un número entero positivo.");
} else {
    let num0 = 0;
    let num1 = 1;

    if (iteraciones >= 1) {
        console.log(num0);
    }
    if (iteraciones >= 2) {
        console.log(num1);
    }
    for (let i = 3; i <= iteraciones; i++) {
        let resul0 = num0 + num1;
        console.log(resul0);
        num0 = num1;
        num1 = resul0;
    }
}
