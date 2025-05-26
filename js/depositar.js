document.getElementById("deposit-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const monto = document.getElementById("deposit-amount").value;
  agregarTransaccion("Deposito", monto, "Depósito en efectivo");
  window.location.href = "../menu.html";
});