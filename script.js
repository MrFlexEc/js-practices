import { barcelona, roma, paris, londres } from "./ciudades.js";

//OBTENER LOS ELEMENTOS DOM
let enlaces = document.querySelectorAll("a");

let tituloElemento = document.getElementById("titulo");
let subtituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElmento = document.getElementById("precio");

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    //REMOVER ACTIVO de todos los enlaces
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    //agregar la clase "active" al enlace actual
    //ESTO SE HACE PORQUE, SI AGREGAMOS EL ATRIBUTO CLASS="ACTIVE" A UNA ETIQUETA, APECERIA COMO SI ESTUVIERA ACTIVA
    //GRACIAS AL CSS QUE LE CAMBIA EL COLOR
    this.classList.add("active");

    //OBTENER EL CONTENIDO CORRESPONDIENTE SEGUN EL ENLACE
    let contenido = obtenerContenido(this.textContent);

    //MOSTRAR CONTENIDO
    tituloElemento.innserHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
    precioElmento.innerHTML = `$ ${contenido.precio}`;
  });
});

//funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
