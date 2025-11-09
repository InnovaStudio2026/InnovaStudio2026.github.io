<script>
        function acceso() {
            var claveIngresada = document.getElementById("clave").value;
            var claveCorrecta = "12345"; // Cambia esto por la contraseña deseada

            if (claveIngresada === claveCorrecta) {
                window.location.href = "clase.html"; // Cambia esto por la página destino
            } else {
                alert("Contraseña incorrecta. Inténtelo nuevamente.");
            }
            return false;
        }
    </script>