/*    const valnom = document.getElementById("nombre");
    const valasu = document.getElementById("asunto");
    const valmen = document.getElementById("mensaje");

    let buscar = document.getElementById("botton");
    buscar.addEventListener('click',validar);

    function validar() {
        var 
        patron  = /^[a-zA-Z0-9 ]+$/i;
    }

    if (valnom.match(patron) || valasu.match(patron) || valmen.match(patron)) {
        alert("Palabra permitida")
    } else {
        alert("Campo rellenado incorrectamente");
    }
    */
   let form = document.getElementById("form");
   
   form.addEventListener("submit", function (event) {
    event.preventDefault();
    limpiarErrores();
    let textnombre = document.querySelector(".textNombre").value;
    let textasunto = document.querySelector(".textAsunto").value; 
    let textmensaje = document.querySelector(".textMensaje").value;
    let resultado = validar(textasunto,textmensaje,textnombre);

    if (resultado == true){
        exito();
    };
   });

   function limpiarErrores() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
   };

   function exito() {
    document.querySelector(".resultado").innerHTML = "Formulario Validado, nos contactaremos a la brevedad";   
   };

   function validar(nombre,asunto,mensaje) {
    let pasamosLaValidacion = true;
    let validacionNombre = /^[a-zA-Z0-9 ]+$/i;
    if (validacionNombre.test(nombre) == false) {
        document.querySelector(".errorNombre").innerHTML = "Ingrese un nombre válido, por favor.";
        pasamosLaValidacion = false;
    };
    let pasamosLaValidacion = true;
    let validacionAsunto = /^[a-zA-Z0-9 ]+$/i;
    if (validacionAsunto.test(asunto) == false) {
        document.querySelector(".errorAsunto").innerHTML = "Ingrese un asunto válido, por favor.";
        pasamosLaValidacion = false;
    };
    let pasamosLaValidacion = true;
    let validacionMensaje = /^[a-zA-Z0-9 ]+$/i;
    if (validacionMensaje.test(mensaje) == false) {
        document.querySelector(".errorMensaje").innerHTML = "Ingrese un mensaje válido, por favor.";
        pasamosLaValidacion = false;
    };
    return pasamosLaValidacion;
   };