// Obtener el contexto del canvas
const ctx = document.getElementById('chartTransaccion').getContext('2d');

// Crear la gráfica
const chartTransaccion = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Depósitos', 'Retiros', 'Pagos de Servicios'],
    datasets: [{
      label: 'Transacciones realizadas',
      data: [5, 3, 2], // Ejemplo: 5 depósitos, 3 retiros, 2 pagos
      backgroundColor: [
        'rgba(40, 167, 69, 0.7)',    // verde para depósitos
        'rgba(220, 53, 69, 0.7)',    // rojo para retiros
        'rgba(255, 193, 7, 0.7)'     // amarillo para pagos
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
