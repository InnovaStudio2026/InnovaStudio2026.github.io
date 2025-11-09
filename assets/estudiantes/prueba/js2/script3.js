
<script>
        document.addEventListener('keydown', function(event) {
            // Verifica si se presionó Alt + F3
            if (event.altKey && event.key === 'F3') {
                event.preventDefault(); // Prevenir el comportamiento por defecto
                window.location.href = 'https://q.plataformaintegra.net/lucascaballero/index.php'; // Cambia el enlace por el deseado
            }
        });
    </script>

<body>
    <h1>Presiona Alt + F3 para abrir un enlace</h1>
</body>
