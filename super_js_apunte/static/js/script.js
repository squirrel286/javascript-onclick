function cambiarSesion() {
    const btnSesion = document.querySelector("#btnSesion")

    if (btnSesion.innerText == "Iniciar sesión") {
        btnSesion.innerText = "Cerrar sesión.";
    } else {
        btnSesion.innerText = "Iniciar sesión"
    }
}

function darLike() {
    const spanLike = document.querySelector("#like");
    let cantidad = parseInt(spanLike.innerText);
    spanLike.innerText = cantidad + 1;
}
// Cambiar imagen al pasar el cursor sobre esta
const imagen = document.querySelector("#imagen");

imagen.addEventListener("mouseover", function () {
    imagen.src = "static/images/imagen2.jpg";
});

imagen.addEventListener("mouseout", function () {
    imagen.src = "static/images/imagen1.jpg";
});