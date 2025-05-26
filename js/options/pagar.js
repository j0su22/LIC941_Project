document.getElementById("service-payment-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const servicio = document.getElementById("service-type").value;
  const monto = document.getElementById("service-amount").value;

  Swal.fire({
    title: 'Confirmar Pago',
    text: `¿Pagar $${parseFloat(monto).toFixed(2)} por ${servicio}?`,
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Sí, pagar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      agregarTransaccion("Servicio", -monto, `Pago de ${servicio}`);
      window.location.href = "../menu.html";
    }
  });
});