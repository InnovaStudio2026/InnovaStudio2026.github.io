 function acceso() {
        // Modificar variable

        if (document.formclave.clave.value === "1113") {
          window.location = document.formclave.clave.value + ".html";
        } else {
          alert("La contraseña no es correcta");
        }
      }
// Comparar la contraseña (Ejemplo: "1234")
    if (password === '1113') {
        setTimeout(() => {
            window.location.href = '1113.html';
        }, 2000); // Espera 2 segundos antes de redirigir
    } else {
        alert('Contraseña incorrecta');
    }
});
