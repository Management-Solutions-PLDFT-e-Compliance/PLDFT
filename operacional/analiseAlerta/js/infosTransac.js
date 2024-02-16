var volumeTransacoesCtx = document.getElementById('volumeTransacoes').getContext('2d');

var dataVolumeTransacoes = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
        label: 'Operações',
        type: 'bar',
        backgroundColor: 'rgb(068,114,196)',
        data: [2500, 3000, 4200, 4000, 5700, 6000],
        borderWidth: 1,
        pointRadius: 0,
        yAxisID: 'leftYAxis',
        barPercentage: 0.6,
        datalabels: {
            display: false // Remove os rótulos de dados para este conjunto de dados
        }
    },{
        label: 'Volume financeiro',
        type: 'line',
        backgroundColor: 'rgb(9,41,104)',
        borderColor: 'rgb(9,41,104)',
        data: [20, 22, 17, 25, 19, 28],
        fill: false,
        borderWidth: 1,
        pointRadius: 0,
        yAxisID: 'rightYAxis',
    }]
};


var optionsVolumeTransacoes = {
    scales: {
        leftYAxis: {
            type: 'linear',
            position: 'left',
            beginAtZero: true,
            suggestedMin: 0, // Valor mínimo sugerido
            suggestedMax: 12000, // Valor máximo sugerido
            grid: {
                display: false // Remove a grade do eixo Y
            }
            
        },
        rightYAxis: {
            type: 'linear',
            position: 'right',
            beginAtZero: true,
            suggestedMin: 0, // Valor mínimo sugerido
            suggestedMax: 31, // Valor máximo sugerido
            grid: {
                display: false // Remove a grade do eixo Y
            }
        },
        x: {
            beginAtZero: true,
            grid: {
                display: false // Remove a grade do eixo Y
            },
        }
        
    },
    plugins: {
        legend: {
            position: 'right', // Coloca a legenda à direita do gráfico
            display: false
        },

        datalabels: {
            display: true,
            align: 'top', // Posiciona o rótulo acima do ponto
            anchor: 'center', // Alinha o rótulo no centro do ponto
            clamp: true
        },
        grid: {
            display: false // Remove a grade do gráfico
        }
        
    }
};


Chart.register(ChartDataLabels)

var volumeTransacoes = new Chart(volumeTransacoesCtx, {
    type: 'line',
    data: dataVolumeTransacoes,
    options: optionsVolumeTransacoes
});


var customLegendVolumeTransacoes = document.getElementById('legenda-volume-transacoes');
dataVolumeTransacoes.datasets.forEach(function(dataset, index) {
    if(dataset.label == 'Operações')
        customLegendVolumeTransacoes.innerHTML += '<div class="alinhamento-icone-palavra"><span style="background-color: rgb(068,114,196); width: 25px; height: 5px; display: inline-block; margin-right: 5px;"></span>' + dataset.label + '</div>';
    else
    customLegendVolumeTransacoes.innerHTML += '<div class="alinhamento-icone-palavra"><span style="background-color:' + dataset.borderColor + '; width: 25px; height: ' + dataset.borderWidth + 'px; display: inline-block; margin-right: 5px;"></span>' + dataset.label + '</div>';
});

function getFile() {
    document.getElementById("upfile").click();
  }
  
  function sub(obj) {
    var file = obj.value;
    var fileName = file.split("\\");
    document.getElementById("yourBtn").innerHTML = fileName[fileName.length - 1];
  }


  let uploadedFiles = [];

document.getElementById('sendEvidenceBtn').addEventListener('click', function() {
  swal({
    title: uploadedFiles.length > 0 ? "Arquivos Enviados" : "Nenhum arquivo enviado",
    content: {
      element: "div",
      attributes: {
        innerHTML: uploadedFiles.map(file => `<div>${file}</div>`).join('')
      },
    },
    icon: "info",
    buttons: {
      cancel: "Fechar",
      uploadMore: {
        text: "Upload",
        value: "upload"
      }
    },
  })
  .then((value) => {
    if (value === "upload") {
      document.getElementById('fileInput').click();
    }
  });
});

document.getElementById('fileInput').addEventListener('change', function(event) {
  const files = event.target.files;

  if (!files || files.length === 0) return;

  for (let i = 0; i < files.length; i++) {
    uploadedFiles.push(files[i].name);
  }

  swal("Envio de Arquivos", "Os arquivos foram enviados com sucesso!", "success");
});

var btn = document.getElementById('btn');
var resumoCadastro = document.querySelector('.resumoCadastro');

var btn = document.getElementById('btn');
var resumoCadastro = document.querySelector('.resumoCadastro');

var isOpen = false;

btn.addEventListener('click', function() {
    isOpen = !isOpen; // Alterna o estado entre aberto e fechado
    
    if (isOpen) {
        resumoCadastro.style.display = 'block';
        resumoCadastro.style.animation = 'slideInRight 1s forwards'; // Animção mais rápida
    } else {
        resumoCadastro.style.animation = 'slideOutRight 1s forwards'; // Animção mais rápida
        setTimeout(function() {
            resumoCadastro.style.display = 'none'; // Oculta o elemento após a animação
        }, 1000); // Tempo ajustado para corresponder à duração da animação
    }
});


