document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("history-body");
  const transacciones = obtenerTransacciones();

  body.innerHTML = transacciones.map(t => `
    <tr>
      <td>${t.fecha}</td>
      <td>${t.tipo}</td>
      <td>$${t.monto.toFixed(2)}</td>
      <td>${t.descripcion}</td>
    </tr>
  `).join("");
});