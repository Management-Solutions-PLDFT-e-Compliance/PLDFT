var data = {
  labels: ['Fóruns e comitês', 'Política de PLDFT', 'Papéis e responsabilidades', 'Alçadas'],
  datasets: [
    {
      label: 'Exemplo de Radar Chart',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      data: [4, 4, 4, 3], // Ajustado para que "Alçadas" seja 3
    },
    {
      label: 'Exemplo 2',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      data: [3, 3, 3, 3],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      angleLines: {
        color: "rgb(90,92,105)"
      },
      grid: {
        color: "rgb(90,92,105)"
      },
      max: 4,
      min: -1,
      stepSize: 1,
    }
  }
};

var ctx = document.getElementById('radarChart').getContext('2d');
var myRadarChart = new Chart(ctx, {
  type: 'radar',
  data: data,
  options: options,
});


var data2 = {
  labels: ['Escopo da Matriz de controles', 'Planos de ação sobre os controles realizados', 'Periodicidade de execução dos controles', 'Escopo de Indicadores', 'Atualização e acessibilidade'],
  datasets: [
    {
      label: 'Exemplo de Radar Chart',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      data: [3, 4, 3, 3, 2], // Ajustado para que "Alçadas" seja 3
    },
    {
      label: 'Exemplo 2',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      data: [3, 3, 3, 3, 3],
    },
  ],
};

const options2 = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      angleLines: {
        color: "rgb(90,92,105)"
      },
      grid: {
        color: "rgb(90,92,105)"
      },
      max: 4,
      min: -1,
      stepSize: 1,
    }
  }
};

var ctx = document.getElementById('radarChart2').getContext('2d');
var myRadarChart = new Chart(ctx, {
  type: 'radar',
  data: data2,
  options: options,
});


var data3 = {
  labels: ['Monitoramento e Seleção', 'Análise e comunicação ao COAF', 'Sanções e Indisponibilidades de ativos'],
  datasets: [
    {
      label: 'Exemplo de Radar Chart',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      data: [3, 3, 4], // Ajustado para que "Alçadas" seja 3
    },
    {
      label: 'Exemplo 2',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      data: [3, 3, 3],
    },
  ],
};

const options3 = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      angleLines: {
        color: "rgb(90,92,105)"
      },
      grid: {
        color: "rgb(90,92,105)"
      },
      max: 4,
      min: -1,
      stepSize: 1,
    }
  }
};

var ctx = document.getElementById('radarChart3').getContext('2d');
var myRadarChart = new Chart(ctx, {
  type: 'radar',
  data: data3,
  options: options,
});


var data4 = {
  labels: ['Data de atualização do relatório AIR', 'Governança de aprovação', 'Escopo de perfis', 'Corpo de variáveis e metodologia', 'População', 'Atualização'],
  datasets: [
    {
      label: 'Exemplo de Radar Chart',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      data: [4, 4, 2, 2, 4, 2], // Ajustado para que "Alçadas" seja 3
    },
    {
      label: 'Exemplo 2',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      data: [3, 3, 3, 3, 3, 3],
    },
  ],
};

const options4 = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      angleLines: {
        color: "rgb(90,92,105)"
      },
      grid: {
        color: "rgb(90,92,105)"
      },
      max: 4,
      min: -1,
      stepSize: 1,
    }
  }
};

var ctx = document.getElementById('radarChart4').getContext('2d');
var myRadarChart = new Chart(ctx, {
  type: 'radar',
  data: data4,
  options: options,
});
