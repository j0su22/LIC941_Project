const usuarios = [
    { pin: "1234", nombre: "Ash Ketchum", cuenta: "00000001" },
    { pin: "2222", nombre: "Josue Cortez", cuenta: "00000002" },
    { pin: "0000", nombre: "Pepito Perez", cuenta: "00000003" }
];

document.addEventListener("DOMContentLoaded", function () {
    const insertCardSection = document.getElementById("insert-card-section");
    const loginSection = document.getElementById("login-section");
    const readCardBtn = document.getElementById("read-card-btn");
    const loginForm = document.getElementById("login-form");

    // Leer tarjeta (imagen representativa de la acción)
    readCardBtn.addEventListener("click", () => {
        insertCardSection.classList.add("d-none");
        loginSection.classList.remove("d-none");
    });

    // Validar PIN que identifica al usuario - lista quemada en localstorage
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const pin = document.getElementById("pin").value.trim();

        const usuario = usuarios.find(u => u.pin === pin);

        if (usuario) {
            localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

            Swal.fire({
                title: `¡Hola ${usuario.nombre}!`,
                text: 'Has ingresado correctamente a Pokémon Bank.',
                icon: 'success',
                confirmButtonText: 'Continuar'
            }).then(() => {
                window.location.href = "views/menu.html";
            });
        } else {
            Swal.fire({
                title: 'PIN inválido',
                text: 'No se encontró un usuario con ese PIN.',
                icon: 'error',
                confirmButtonText: 'Intentar de nuevo'
            });
        }
    });

});
