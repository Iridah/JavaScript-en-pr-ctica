// /*    const caja = document.querySelector(".caja");
//     const btn = document.querySelector("button");

//     btn.addEventListener("click",function() {
//         caja.computedStyleMap.color = "rojizo";
//     });

//     function cambiacolor(color) {
//         caja.computedStyleMap.color = color;
//     }
// */
/*Para cambiar el color de fondo al hacer clic con 
JavaScript, se puede conservar el color de la variable 
bg.color en el container*/

const caja = document.getElementById("caja");
document.addEventListener("click", pintar());

function pintar() {
    document.getElementById("caja").style.backgroundColor = "#e53e3e";
    document.getElementById("caja").style.backgroundColor = "#dd6b20";
    document.getElementById("caja").style.backgroundColor = "#faf089";
    document.getElementById("caja").style.backgroundColor = "#48bb78";
    document.getElementById("caja").style.backgroundColor = "#81e6d9";
    document.getElementById("caja").style.backgroundColor = "#d53f8c";
}