document.addEventListener("keydown", function(event) {
    if (event.key === "F1") {
        event.preventDefault();
        window.location.href = "escanear.html";
    }

    if (event.key === "F5") {
        event.preventDefault();
        window.print();
    }
});
