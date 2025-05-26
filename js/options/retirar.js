document.getElementById("withdraw-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const monto = parseFloat(document.getElementById("withdraw-amount").value);
  const saldo = obtenerTransacciones().reduce((acc, t) => acc + t.monto, 0);

  if (monto > saldo) {
    Swal.fire({
      title: 'Fondos insuficientes',
      text: 'No puedes retirar más de tu saldo disponible.',
      icon: 'error',
      confirmButtonText: 'Entendido'
    });
    return;
  }

  Swal.fire({
    title: 'Confirmar Retiro',
    text: `¿Deseas retirar $${monto.toFixed(2)}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, retirar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      agregarTransaccion("Retiro", -monto, "Retiro en cajero");
      window.location.href = "../menu.html";
    }
  });
});