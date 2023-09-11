// Obtener el saldo actual del localStorage (si existe)
var saldoActual = parseFloat(localStorage.getItem("saldo"));

// Si el saldo no se encuentra en el localStorage, establecerlo en 1000 por defecto
if (saldoActual === null) {
    saldoActual = 1000;
}

// Manejar el formulario de depósito
var depositForm = document.getElementById("depositForm");
depositForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    
    // Obtener el monto a depositar desde el formulario
    var monto = parseFloat(document.getElementById("monto").value);
    
    // Validar que el monto sea mayor que cero
    if (monto > 0) {
        // Realizar el depósito (sumar el monto al saldo)
        saldoActual += parseFloat(monto);
        
        // Guardar el nuevo saldo en el localStorage
        localStorage.setItem("saldo", saldoActual.toFixed(2));
        
        // Actualizar el saldo en la página
        document.getElementById("saldoActual").textContent = saldoActual.toFixed(2);
        
        // Aquí puedes agregar la lógica para registrar el depósito
        alert("Depósito exitoso de $" + monto);
    } else {
        alert("El monto a depositar debe ser mayor que cero.");
    }
});

// Mostrar el saldo actual en la página (fuera del evento del formulario)
document.getElementById("saldoActual").textContent = saldoActual.toFixed(2);