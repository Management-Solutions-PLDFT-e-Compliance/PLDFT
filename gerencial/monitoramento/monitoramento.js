Chart.register(ChartDataLabels)

var dados_grafico = {
    CVM: [
        {
            label: 'Regra 1',
            data: [149, 147, 135, 138, 142, 130],
            borderColor: 'rgba(4,31,76,255)', // Cor da linha
            borderWidth: 2
        },

        {
            label: 'Regra 2',
            data: [98, 103, 91, 93, 109, 99],
            borderColor: 'rgba(46,74,126,255)', // Cor da linha
            borderWidth: 2
        },

        {
            label: 'Regra 3',
            data: [65, 77, 73, 72, 69, 64],
            borderColor: 'rgba(102,124,165,255)', // Cor da linha
            borderWidth: 2
        },

        {
            label: 'Regra 4',
            data: [21, 50, 27, 33, 22, 38],
            borderColor: 'rgba(153,168,195,255)', // Cor da linha
            borderWidth: 2
        },

        {
            label: 'Regra 5',
            data: [1, 8, 8, 19, 4, 15],
            borderColor: 'rgba(204,211,225,255)', // Cor da linha
            borderWidth: 2
        }
    ],
    Bacen: [
        {
            label: 'Regra 1',
            data: [156, 133, 122, 142, 132, 140],
            borderColor: 'rgba(4,31,76,255)', // Cor da linha
            borderWidth: 2
        },

        {
            label: 'Regra 2',
            data: [101, 96, 98, 105, 99, 84],
            borderColor: 'rgba(46,74,126,255)', // Cor da linha
            borderWidth: 2
        },

        {
            label: 'Regra 3',
            data: [72, 70, 63, 68, 68, 54],
            borderColor: 'rgba(102,124,165,255)', // Cor da linha
            borderWidth: 2
        },

        {
            label: 'Regra 4',
            data: [42, 49, 31, 43, 41, 35],
            borderColor: 'rgba(153,168,195,255)', // Cor da linha
            borderWidth: 2
        },

        {
            label: 'Regra 5',
            data: [15, 19, 12, 17, 16, 9],
            borderColor: 'rgba(204,211,225,255)', // Cor da linha
            borderWidth: 2
        }
    ],
    Susep:[
        {
            label: 'Regra 1',
            data: [146, 129, 119, 135, 134, 149],
            borderColor: 'rgba(4,31,76,255)', // Cor da linha
            borderWidth: 2
        },

        {
            label: 'Regra 2',
            data: [98, 98, 99, 91, 110, 93],
            borderColor: 'rgba(46,74,126,255)', // Cor da linha
            borderWidth: 2
        },

        {
            label: 'Regra 3',
            data: [60, 80, 60, 65, 80, 62],
            borderColor: 'rgba(102,124,165,255)', // Cor da linha
            borderWidth: 2
        },

        {
            label: 'Regra 4',
            data: [46, 25, 23, 44, 47, 40],
            borderColor: 'rgba(153,168,195,255)', // Cor da linha
            borderWidth: 2
        },

        {
            label: 'Regra 5',
            data: [20, 1, 11, 5, 9, 11],
            borderColor: 'rgba(204,211,225,255)', // Cor da linha
            borderWidth: 2
        }
    ]
};

var selectedDataset = 'Bacen'; // Dataset padrão

var ctx_top = document.getElementById('Regras_geracao_alertas').getContext('2d');
var grafico;


var config = {
    type: 'line',
    data: {
        labels:["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
        datasets: dados_grafico[selectedDataset],
    },
    options: {
        scales: {
            y: {
                display: false,
                ticks: {min: 0, max:200},
                beginAtZero: true,
                grid: {
                    display: false // Remove a grade do eixo Y
                }
            },
            x: {
                beginAtZero: true,
                grid: {
                    display: false // Remove a grade do eixo X
                }
            }
            
        },
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    font: {
                        size: 14 
                    }
                }
            },
    
            datalabels: {
                display: true,
                align: 'top', // Posiciona o rótulo acima do ponto
                anchor: 'center', // Alinha o rótulo no centro do ponto
                clamp: true
            },
            
        }
    }
}


// Função para atualizar o gráfico com base na opção selecionada
document.getElementById('select-chart').addEventListener("change", function () {
    selectedDataset = this.value;
    grafico_linha.data.datasets = dados_grafico[selectedDataset]
    grafico_linha.update()
})

grafico_linha = new Chart(ctx_top, config);


// Histórico de geração de alerta por regra

var ctx_historico = document.getElementById('historico_alertas_regra').getContext('2d')

var data_historico = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [
      {
        label: 'Alertas positivos',
        data: [67, 25, 70, 79, 84, 29],
        backgroundColor: '#ccd3e1',
      },
      {
        label: 'Falsos positivos',
        data: [16, 29, 13, 39, 26, 33],
        backgroundColor: '#99a8c3',
      },
      {
        label: 'Análises pendentes',
        data: [63, 75, 36, 17, 24, 87],
        backgroundColor: "#667ca5",
      },
    ]
}

var config_historico = {
    type: 'bar',
    data: data_historico,
    options: {
        responsive: true,
        scales: {
            x:{
                grid:{display: false},
                stacked: true,
            },

            y:{
                stacked: true,
            }
        },

        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    font: {
                        size: 14 
                    }
                }
            },
    
            datalabels: {
                display: false,
                align: 'top', // Posiciona o rótulo acima do ponto
                anchor: 'center', // Alinha o rótulo no centro do ponto
                clamp: true
            },
            
        }
    }
}



grafico_barra = new Chart(ctx_historico, config_historico);

//mudando valores de acordo com o período escolhido
const numeros = document.getElementsByClassName("numero_contorno")
let multiplicadorAnterior = 1

document.getElementById('select-range').addEventListener("change", function(){
    switch (document.getElementById('select-range').value) {
        case "Últimos 30 dias":
            for (let i = 0; i < 6 ; i++){
                numeros[i].innerHTML = `${Math.round((numeros[i].innerHTML / multiplicadorAnterior) * 1.7)}`
            }
            multiplicadorAnterior = 1.7
            break;
        
        case "Último semestre":
            for (let i = 0; i < 6; i++){
                numeros[i].innerHTML = `${Math.round((numeros[i].innerHTML / multiplicadorAnterior) * 3.2)}`
            }

            multiplicadorAnterior = 3.2
            break;

        case "Último ano":
            for (let i = 0; i < 6; i++){
                numeros[i].innerHTML = `${Math.round((numeros[i].innerHTML / multiplicadorAnterior) * 4.7)}`
            }

            multiplicadorAnterior = 4.7
            break;
        
        default:
            
            for (let i = 0; i < 6; i++){
                numeros[i].innerHTML = `${Math.round(numeros[i].innerHTML / multiplicadorAnterior)}`
            }
            multiplicadorAnterior = 1
            break;
    }   

})

const data_1 = {
    labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
    datasets: [{
      label: 'Estoque de analise',
      backgroundColor: 'rgba(156, 172, 196, 0.5)', // Cor vermelha para alertas
      data: [131, 149, 175, 159, 251],
      type: 'bar', // Número de alertas por dia
    }, {
      label: 'Novos alertas',
      backgroundColor: 'rgba(204, 212, 228, 0.5)', // Cor vermelha para alertas
      data: [102, 125, 151, 98, 48] // Número de alertas por dia
    }, {
      label: 'Análises que vencem no dia ',
      borderColor: 'rgba(4, 28, 76, 0.9)', // Cor azul para a linha de produtividade necessária
      borderWidth: 4, // Espessura da linha
      type: 'line',
      data: [75, 58, 46,55 , 12], // Produtividade necessária por dia
      yAxisID: 'produtividade', // Define a escala Y a ser usada para este conjunto de dados
      fill: false // Não preencher abaixo da linha
    }, {
      label: 'Analises realizadas',
      borderColor: 'rgba(164, 164, 164, 0.9)', // Cor roxa para a linha de produtividade real
      borderWidth: 4, // Espessura da linha
      type: 'line',
      data: [108, 123, 228, 209, 0], // Produtividade real por dia
      yAxisID: 'produtividade', // Define a escala Y a ser usada para este conjunto de dados
      fill: false // Não preencher abaixo da linha
    }]
};

// Calcular o valor máximo das barras empilhadas
const maxStackedValue = data_1.datasets.reduce((acc, dataset) => {
    if (dataset.type === 'bar') {
        const sum = dataset.data.reduce((sum, value) => sum + value, 0);
        return Math.max(acc, sum);
    }
    return acc;
}, 0);

// Configurações específicas para o gráfico ctx1
const config_1 = {
    type: 'bar',
    data: data_1,
    options: {
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false // Remover o grid do eixo Y principal
                }
            },
            y: {
                stacked: true,
                grid: {
                    display: false // Remover o grid do eixo Y principal
                }
            },
            produtividade: { // Definindo uma segunda escala Y para produtividade
                position: 'right', // Colocando a escala à direita
                grid: {
                    display: false // Remover o grid do eixo Y secundário
                },
                max: 350 // Definindo o valor máximo do eixo Y
            }
        },
        plugins: {
            datalabels: {
                display: false,
                align: 'top', // Posiciona o rótulo acima do ponto
                anchor: 'center', // Alinha o rótulo no centro do ponto
                clamp: true
            },
        }
    }
};

// Renderizar o gráfico apenas no contexto ctx1
const ctx_1 = document.getElementById('stackedBarChart1').getContext('2d');
graficoSLA = new Chart(ctx_1, config_1);

function atualizarHorario() {
    const fusoHorario = 'America/Sao_Paulo';
    const dataAtual = new Date();
    const opcoes = { 
      hour: '2-digit', 
      minute: '2-digit', 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric',
      timeZone: fusoHorario 
    };
  
    const formatadorDataHora = new Intl.DateTimeFormat('pt-BR', opcoes);
    const horaFormatada = formatadorDataHora.format(dataAtual);
  
    const horas = horaFormatada.split(',')[1].trim();
    const paragrafos = document.querySelectorAll('#horaAtualizada');
    paragrafos.forEach((paragrafo)=>{
      paragrafo.textContent = `Última atualização em: ${horas.replace(':', 'h')} ${horaFormatada.split(',')[0]}`;
    });
  }
  
  if(document.getElementById('horaAtualizada')){
    atualizarHorario();
  }