document.addEventListener("DOMContentLoaded", function () {
  const insertCardSection = document.getElementById("insert-card-section");
  const loginSection = document.getElementById("login-section");
  const readCardBtn = document.getElementById("read-card-btn");
  const loginForm = document.getElementById("login-form");

  // Leer tarjeta (imagen)
  readCardBtn.addEventListener("click", () => {
    insertCardSection.classList.add("d-none");
    loginSection.classList.remove("d-none");
  });

  // Validar PIN
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const pin = document.getElementById("pin").value.trim();

    if (/^\d{4}$/.test(pin)) {
      Swal.fire({
        title: '¡Bienvenido!',
        text: 'Has ingresado correctamente a Pokémon Bank.',
        icon: 'success',
        confirmButtonText: 'Continuar'
      }).then(() => {
        window.location.href = "views/menu.html";
      });
    } else {
      Swal.fire({
        title: 'PIN inválido',
        text: 'El PIN debe contener exactamente 4 dígitos numéricos.',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo'
      });
    }
  });
});
