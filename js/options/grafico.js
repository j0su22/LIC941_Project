const transacciones = obtenerTransacciones();

const resumen = {
  Deposito: 0,
  Retiro: 0,
  Servicio: 0
};

transacciones.forEach(t => {
  if (resumen[t.tipo] !== undefined) {
    resumen[t.tipo] += Math.abs(t.monto);
  }
});

const ctx = document.getElementById('chartTransaccion').getContext('2d');

const chartTransaccion = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Depósitos', 'Retiros', 'Pagos de Servicios'],
    datasets: [{
      data: [resumen.Deposito, resumen.Retiro, resumen.Servicio],
      backgroundColor: [
        'rgba(40, 167, 69, 0.7)',
        'rgba(220, 53, 69, 0.7)',
        'rgba(255, 193, 7, 0.7)'
      ],
      borderColor: [
        'rgba(40, 167, 69, 1)',
        'rgba(220, 53, 69, 1)',
        'rgba(255, 193, 7, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});