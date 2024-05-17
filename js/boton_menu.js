   // Obtener el modal
   var modal = document.getElementById("myModal");

   // Obtener el botón que abre el modal
   var btn = document.getElementById("menu-toggle");
   var btnC = document.getElementById("modalles");

   // Obtener el span que cierra el modal
   var span = document.getElementsByClassName("close")[0];

   // Obtener el botón de cerrar dentro del modal
   var btnCloseModal = document.querySelector(".modal-content-menu .menu-close-btn");

   // Cuando se hace clic en el botón, se muestra el modal
   btn.onclick = function() {
       modal.style.display = "block";
   }

   // Cuando se hace clic en el botón de cerrar dentro del modal, se cierra el modal
   btnCloseModal.onclick = function() {
       modal.style.display = "none";
   }

   // Cuando se hace clic en el span (x), se cierra el modal
   span.onclick = function() {
       modal.style.display = "none";
   }

   // Cuando se hace clic fuera del modal, se cierra
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }