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

// Logica para generación del PDF
document.getElementById("generar-pdf").addEventListener("click", () => {
  const transacciones = obtenerTransacciones();

  if (transacciones.length === 0) {
    Swal.fire({
      title: "Sin datos",
      text: "No hay transacciones para exportar.",
      icon: "info"
    });
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("Historial de Transacciones - Pokémon Bank", 14, 15);

  const rows = transacciones.map(t => [
    t.fecha,
    t.tipo,
    `$${t.monto.toFixed(2)}`,
    t.descripcion
  ]);

  doc.autoTable({
    head: [["Fecha", "Tipo", "Monto", "Descripción"]],
    body: rows,
    startY: 25
  });

  doc.save("historial_pokemon_bank.pdf");
});
