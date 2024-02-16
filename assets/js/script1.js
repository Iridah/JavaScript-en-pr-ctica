// /*    const valnom = document.getElementById("nombre");
//     const valasu = document.getElementById("asunto");
//     const valmen = document.getElementById("mensaje");

//     let buscar = document.getElementById("botton");
//     buscar.addEventListener('click',validar);

//     function validar() {
//         var 
//         patron  = /^[a-zA-Z0-9 ]+$/i;
//     }

//     if (valnom.match(patron) || valasu.match(patron) || valmen.match(patron)) {
//         alert("Palabra permitida")
//     } else {
//         alert("Campo rellenado incorrectamente");
//     }
//     */
   let form = document.getElementById("form");
   
   form.addEventListener( "submit", function (event) {
    event.preventDefault();
    limpiarErrores();
    let textNombre = document.querySelector(".textNombre").value;
    let textAsunt = document.querySelector(".textAsunt").value; 
    let textMensaje = document.querySelector(".textMsg").value;
    let resultado = validar(textNombre,textAsunt,textMensaje);

    if (resultado == true){
        exito();
    };
   });

   function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunt").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
   };

   function exito() {
    document.querySelector(".resultado").innerHTML = "Formulario validado, nos contactaremos a la brevedad";   
   };

   function validar(nombre,asunt,mensaje) {
    let pasamosLaValidacion = true;
    let validacionNombre = /[a-zA-Z0-9 ]/i;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido, por favor.";
        pasamosLaValidacion = false;
    };
    let validacionAsunto = /[a-zA-Z0-9 ]/i;
    if (validacionAsunto.test(asunt) == false) {
        document.querySelector(".errorAsunt").innerHTML = "Ingrese un asunto válido, por favor.";
        pasamosLaValidacion = false;
    };
    let validacionMensaje = /[a-zA-Z0-9 ]/i;
    if (validacionMensaje.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "Ingrese un mensaje válido, por favor.";
        pasamosLaValidacion = false;
    };
    return pasamosLaValidacion;
   };