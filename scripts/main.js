// main.js index
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtiene los valores ingresados por el usuario
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("inputPassword6").value;

    // Verifica si las credenciales son correctas (ajusta las validaciones según tus necesidades)
    if (email === "abnerhdz@hotmail.com" && password === "12345abc") {
        // Abre una nueva ventana //
        window.open("main-page.html");
    } else {
        alert("Credenciales incorrectas. Por favor, intenta de nuevo.");
    }
});


