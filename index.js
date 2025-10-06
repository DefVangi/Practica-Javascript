
const precio = 400000;
let cantidad = 1;
let total = precio * cantidad; 

const precioSpan = document.getElementById ('precio');
const cantidadSpan = document.getElementById ('cantidad');
const totalSpan = document.getElementById ('total');
const btnAumentar = document.getElementById ('aumentar');
const btnDisminuir = document.getElementById ('disminuir'); 

precioSpan.innerHTML = precio;
let cantidadInicial = parseInt (cantidadSpan.innerHTML);
let totalInicial = precio * cantidad

btnAumentar.addEventListener('click', () => {
    cantidad = cantidad + 1;
    cantidadSpan.innerHTML = cantidad;
    total = precio * cantidad;
    totalSpan.innerHTML = total;
});

btnDisminuir.addEventListener ('click', () => {
    cantidad = cantidad - 1;
    cantidadSpan.innerHTML = cantidad;
    total = precio * cantidad;
    totalSpan.innerHTML = total;
});