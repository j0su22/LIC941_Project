// Elementos del DOM
const insertCardSection = document.getElementById("insert-card-section");
const loginSection = document.getElementById("login-section");
const readCardBtn = document.getElementById("read-card-btn");
const loginForm = document.getElementById("login-form");

// Leer Tarjeta - Simula la lectura de tarjeta en un ATM
readCardBtn.addEventListener("click", function () {
    insertCardSection.classList.add("d-none");
    loginSection.classList.remove("d-none");
});

// Login - aún no funcional, luego se validara el PIN
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const pin = document.getElementById("pin").value.trim();
    if (pin.length === 4) {
        window.location.href = "views/menu.html";
    } else {
        alert("El PIN debe tener exactamente 4 dígitos.");
    }
});
