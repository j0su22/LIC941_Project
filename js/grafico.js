// Obtener el contexto del canvas
const ctx = document.getElementById('chartTransaccion').getContext('2d');

// Grafica
const chartTransaccion = new Chart(ctx, {
  type: 'doughnut',
  data: {
    // Tipo de datos
    labels: ['Depósitos', 'Retiros', 'Pagos de Servicios'],
    datasets: [{
      // Descripción de los datos
      label: 'Transacciones realizadas',
      // Datos de la gráfica - cantidad
      data: [5, 3, 2],
      // Datos de la gráfica - colores
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
