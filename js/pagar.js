document.getElementById("service-payment-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const servicio = document.getElementById("service-type").value;
  const monto = document.getElementById("service-amount").value;
  agregarTransaccion("Servicio", -monto, `Pago de ${servicio}`);
  window.location.href = "../menu.html";
});