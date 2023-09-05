// main.js main

// Definir variables con los valores de nombre, número de cliente y saldo
var nombre = "Abner Rosales";
var numeroCliente = "1707";
var saldo = 1000;

// Actualizar el contenido de los elementos span con las variables
document.getElementById("nombreUsuario").textContent = nombre;
document.getElementById("numeroCliente").textContent = numeroCliente;
document.getElementById("saldo").textContent = saldo;

// Leer el saldo almacenado en localStorage
var saldoAlmacenado = localStorage.getItem("saldo");
if (saldoAlmacenado !== null) {
    // Actualizar el saldo en la página de "main-page"
    document.getElementById("saldo").textContent = saldoAlmacenado;
}