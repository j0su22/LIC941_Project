document.getElementById("deposit-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const monto = document.getElementById("deposit-amount").value;

  Swal.fire({
    title: 'Confirmar Depósito',
    text: `¿Deseas depositar $${parseFloat(monto).toFixed(2)}?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, confirmar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      agregarTransaccion("Deposito", monto, "Depósito en efectivo");
      window.location.href = "../menu.html";
    }
  });
});