// Obtener referencias a elementos del DOM
var modal2 = document.getElementById("myModal2");
var btnAbrirModal = document.getElementById("openModalBtn");
var spanCerrar = document.getElementsByClassName("close2")[0];
var btnIniciarSesion = document.querySelector('.form_login button');

// Función para abrir el modal
btnAbrirModal.onclick = function() {
    modal2.style.display = "block";
}

// Función para cerrar el modal al hacer clic en el botón de cerrar (X)
spanCerrar.onclick = function() {
    modal2.style.display = "none";
}

// Función para cerrar el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target == modal2) {  
    modal2.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.form_login').addEventListener('submit', function(event) {
        var correo = document.querySelector('.form_login input[type="email"]').value.trim();
        var contraseña = document.querySelector('.form_login input[type="password"]').value.trim();

        if (correo.length === 0 || contraseña.length === 0) {
            alert("Por favor, complete todos los campos.");
            event.preventDefault();
            return false;
        }

        // Aquí puedes agregar más validaciones según tus requisitos

        // Si todas las validaciones pasan, puedes mostrar un modal de éxito
        var modalExito = new bootstrap.Modal(document.getElementById('modalExito'), {
            keyboard: false
        });
        modalExito.show();

        // Limpiar los campos después de enviar el formulario
        document.querySelector('.form_login input[type="email"]').value = "";
        document.querySelector('.form_login input[type="password"]').value = "";

        event.preventDefault();
        return true;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.form_login_modal').addEventListener('submit', function(event) {
        var nombre = document.querySelector('.form_login_modal input[type="nombre"]').value.trim();
        var apellido = document.querySelector('.form_login_modal input[type="apellido"]').value.trim();
        var correo = document.querySelector('.form_login_modal input[type="email"]').value.trim();
        var telefono = document.querySelector('.form_login_modal input[type="numero"]').value.trim();
        var contraseña = document.querySelector('.form_login_modal input[type="password"]').value.trim();

        if (nombre.length === 0 || apellido.length === 0 || correo.length === 0 || telefono.length === 0 || contraseña.length === 0) {
            alert("Por favor, complete todos los campos.");
            event.preventDefault();
            return false;
 
        }
        if (!(/^\d+$/.test(telefono))) {
            alert("Por favor, ingrese solo números en el campo de teléfono.");
            event.preventDefault(); // Detiene el envío del formulario si el teléfono no es válido
            return false;
        }
        if (contraseña.length < 8 || !(/\d/.test(contraseña))) {
            alert("La contraseña debe tener al menos 8 caracteres y al menos un número.");
            event.preventDefault(); // Detiene el envío del formulario si la contraseña no es válida
            return false;
        }


        // Si todas las validaciones pasan, puedes mostrar el modal de éxito
        var modalExito = new bootstrap.Modal(document.getElementById('modalRegistroExitoso'), {
            keyboard: false
        });
        modalExito.show();



        // Limpiar los campos después de enviar el formulario
        document.querySelector('.form_login_modal input[type="nombre"]').value = "";
        document.querySelector('.form_login_modal input[type="apellido"]').value = "";
        document.querySelector('.form_login_modal input[type="email"]').value = "";
        document.querySelector('.form_login_modal input[type="numero"]').value = "";
        document.querySelector('.form_login_modal input[type="password"]').value = "";

        event.preventDefault();
        return true;
    });
});
