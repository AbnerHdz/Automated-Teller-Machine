// main.js index
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtiene los valores ingresados por el usuario
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("inputPassword6").value;

    // Verifica si las credenciales son correctas (ajusta las validaciones según tus necesidades)
    if (email === "abnerhdz@hotmail.com" && password === "12345abc") {
        // Abre una nueva ventana //
        window.open("main-page.html", "_blank");
    } else {
        alert("Credenciales incorrectas. Por favor, intenta de nuevo.");
    }
});

// main.js main

// Definir variables con los valores de nombre, número de cliente y saldo
var nombre = "Abner Rosales";
var numeroCliente = "1707";
var saldo = 900;

// Actualizar el contenido de los elementos span con las variables
document.getElementById("nombreUsuario").textContent = nombre;
document.getElementById("numeroCliente").textContent = numeroCliente;
document.getElementById("saldo").textContent = saldo;
