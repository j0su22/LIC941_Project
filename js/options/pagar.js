document.getElementById("service-payment-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const servicio = document.getElementById("service-type").value;
  const monto = parseFloat(document.getElementById("service-amount").value);
  const saldo = obtenerTransacciones().reduce((acc, t) => acc + t.monto, 0);

  if (monto > saldo) {
    Swal.fire({
      title: 'Fondos insuficientes',
      text: 'No tienes suficiente saldo para pagar este servicio.',
      icon: 'error',
      confirmButtonText: 'Entendido'
    });
    return;
  }

  Swal.fire({
    title: 'Confirmar Pago',
    text: `¿Pagar $${monto.toFixed(2)} por ${servicio}?`,
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