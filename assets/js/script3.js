let suma = document.querySelector("#btn-sumar");
let resta = document.querySelector("#btn-restar");

suma.onclick = function () {
    let num1 = document.querySelector("#valor1").value;
    let num2 = document.querySelector("#valor2").value;

    let resultadoSuma = parseInt(num1) + parseInt(num2);
    document.querySelector("#resultado").innerHTML = "La suma de los numeros es " + resultadoSuma;
}

resta.onclick = function () {
    let num1 = document.querySelector("#valor1").value;
    let num2 = document.querySelector("#valor2").value;

    let resultadoResta = parseInt(num1) - parseInt (num2);
    if(resultadoResta < 0){
        document.querySelector("#resultado").innerHTML = "La resta de los numeros es 0";    
    } else if (resultadoResta >= 0) {
        document.querySelector("#resultado").innerHTML = "La resta de los numeros es " + resultadoResta;
    }
}





















//     let resultadoSuma = parseInt(num1) + parseInt (num2);
//     return resultadoSuma;
// }













// let res= function resta() {
//     let resultadoResta = parseInt(num1) - parseInt (num2);
//     return resultadoResta;
// }

// console.log(resultadoResta)
// console.log(resultadoSuma)


// if (resultadoResta < 0) {
// document.write("La resta de los numeros es: 0");
// } else {
// document.write("La suma de los numeros es: "+${resultadoSuma});
// document.write("La resta de los numeros es: "+${resultadoResta});
// }