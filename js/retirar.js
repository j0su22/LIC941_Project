document.getElementById("withdraw-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const monto = document.getElementById("withdraw-amount").value;

  Swal.fire({
    title: 'Confirmar Retiro',
    text: `¿Deseas retirar $${parseFloat(monto).toFixed(2)}?`,
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