document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formularioContacto').addEventListener('submit', function(event) {
        var nombre = document.getElementById("nombreCliente").value.trim();
        var correo = document.getElementById("correoCliente").value.trim();
        var asunto = document.getElementById("asuntoCliente").value.trim();
        var mensaje = document.getElementById("mensajeCliente").value.trim();

        if (nombre.length < 10) {
            alert("El nombre debe tener al menos 10 caracteres.");
            event.preventDefault();
            return false;
        }
        if (correo.length < 15) {
            alert("El correo electrónico debe tener al menos 15 caracteres.");
            event.preventDefault();
            return false;
        }
        if (asunto.length < 5) {
            alert("El asunto debe tener al menos 5 caracteres.");
            event.preventDefault();
            return false;
        }
        if (mensaje.length < 20) {
            alert("El mensaje debe tener al menos 20 caracteres.");
            event.preventDefault();
            return false;
        }

        // Si todas las validaciones pasan, mostramos el modal
        var myModal = new bootstrap.Modal(document.getElementById('mensajeEnviado'), {
            keyboard: false
        });
        myModal.show();

        document.getElementById("nombreCliente").value = "";
        document.getElementById("correoCliente").value = "";
        document.getElementById("asuntoCliente").value = "";
        document.getElementById("mensajeCliente").value = "";

        event.preventDefault();
        return true;
    });
});