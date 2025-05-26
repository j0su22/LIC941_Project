document.addEventListener("DOMContentLoaded", () => {
  const transacciones = obtenerTransacciones();
  const saldo = transacciones.reduce((acc, t) => acc + t.monto, 0);
  document.getElementById("current-balance").textContent = `$${saldo.toFixed(2)}`;
});