document.getElementById("withdraw-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const monto = document.getElementById("withdraw-amount").value;
  agregarTransaccion("Retiro", -monto, "Retiro en cajero");
  window.location.href = "../menu.html";
});