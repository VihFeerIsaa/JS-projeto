// Arquivo: script.js

// Dados para os gráficos
const labels = ['Instagram', 'Facebook', 'WhatsApp', 'TikTok'];
const horasPorDia = [3, 2, 4, 3.5];
const porcentagemUsuarios = [40, 25, 70, 35];

// Gráfico de Barras: Horas por dia
const ctxBarras = document.getElementById('graficoBarras').getContext('2d');
new Chart(ctxBarras, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{
      label: 'Horas por Dia (Média)',
      data: horasPorDia,
      backgroundColor: ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Média de Horas por Dia nas Redes Sociais' }
    }
  }
});

// Gráfico de Pizza: Porcentagem de Usuários
const ctxPizza = document.getElementById('graficoPizza').getContext('2d');
new Chart(ctxPizza, {
  type: 'pie',
  data: {
    labels: labels,
    datasets: [{
      label: 'Usuários (%)',
      data: porcentagemUsuarios,
      backgroundColor: ['#3498db', '#2ecc71', '#e74c3c', '#9b59b6']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Porcentagem de Usuários por Rede Social' }
    }
  }
});
