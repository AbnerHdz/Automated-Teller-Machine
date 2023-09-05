// Obtener el saldo actual del localStorage (si existe)
var saldoActual = localStorage.getItem("saldo");

// Si el saldo no se encuentra en el localStorage, establecerlo en 1000 por defecto
if (saldoActual === null) {
    saldoActual = 1000;
}

// Mostrar el saldo actual en la página
document.getElementById("saldoActual").textContent = saldoActual;

// Manejar el formulario de transferencia
var transferForm = document.getElementById("transferForm");
transferForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    
    // Obtener el destinatario y el monto a transferir desde el formulario
    var destinatario = document.getElementById("destinatario").value;
    var monto = parseFloat(document.getElementById("monto").value);
    
    // Validar que el monto no sea mayor que el saldo actual
    if (monto <= saldoActual) {
        // Realizar la transferencia (restar el monto del saldo)
        saldoActual -= monto;
        
        // Guardar el nuevo saldo en el localStorage
        localStorage.setItem("saldo", saldoActual);
        
        // Actualizar el saldo en la página
        document.getElementById("saldoActual").textContent = saldoActual;
        
        // Aquí puedes agregar la lógica para registrar la transferencia y el destinatario
        alert("Transferencia exitosa de $" + monto + " a " + destinatario);
    } else {
        alert("Saldo insuficiente para realizar la transferencia.");
    }
});