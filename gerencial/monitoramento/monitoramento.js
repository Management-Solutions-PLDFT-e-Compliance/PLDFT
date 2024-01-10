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

        plugins:{

            legend: {
                position: 'bottom',
                display: true, // Exibe a legenda
                labels: {
                    font: {
                        size: 14 
                    }
                }
            }
        }
    }
};



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
