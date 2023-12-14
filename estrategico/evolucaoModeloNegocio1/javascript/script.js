// PEGANDO AS AREAS DOS GRAFICOS

var baseClientesCtx = document.getElementById('baseClientes').getContext('2d');
var volumeTransacoesCtx = document.getElementById('volumeTransacoes').getContext('2d');
var perfisRiscoCtx = document.getElementById('perfisRisco').getContext('2d');
var alertasMonitoramentoCtx = document.getElementById('alertasMonitoramento').getContext('2d');


// DEFINIÇÃO DE DADOS

    // ALERTA MONITORAMENTO
var dataAlertaMonitoramento = {
    labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
    datasets: [{
        label: 'PJ',
        type: 'line',
        backgroundColor: 'rgb(9,41,104) ',
        borderColor: 'rgb(9,41,104)',
        data: [300, 200, 240, 430, 500, 340],
        borderWidth: 1,
        pointRadius: 0
    }]
};

    // VOLUME DE TRANSAÇÕES
var dataVolumeTransacoes = {
    labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
    datasets: [{
        label: 'Operações',
        type: 'bar',
        backgroundColor: createLinearGradientBar(baseClientesCtx, 'rgb(9,41,104)', 'rgba(157,195,230,255)'),
        borderColor: 'rgba(75, 192, 192, 1)',
        data: [2500, 3000, 4200, 4000, 5700, 6000],
        borderWidth: 1,
        pointRadius: 0,
        yAxisID: 'leftYAxis',
        barPercentage: 0.4,
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


    // BASE DE CLIENTES
var dataBaseClientes = {
    labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
    datasets: [{
        label: 'PJ',
        backgroundColor: createLinearGradient(baseClientesCtx, 'rgba(189,215,238,255)', 'rgba(220,231,240,255)'),
        borderColor: 'rgba(75, 192, 192, 1)',
        data: [500, 800, 700, 1300, 1400, 1600],
        fill: true,
        borderWidth: 1,
        pointRadius: 0
    },{
        label: 'PF',
        backgroundColor: createLinearGradient(baseClientesCtx, 'rgb(108,114,125)', 'rgba(149,192,232,255)'),
        borderColor: 'rgba(75, 192, 192, 1)',
        data: [1000, 1200, 1500, 1600, 1500, 1700],
        fill: true,
        borderWidth: 1,
        pointRadius: 0
    }]
};

    // PERFIS DE RISCO
var dataPerfisRiscos = {
    labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
    datasets: [{
        label: 'Muito Baixo',
        backgroundColor: 'rgb(67,190,67)',
        borderColor: 'rgb(67,190,67)',
        data: [452, 527, 600, 425, 395, 555],
        fill: false,
        borderWidth: 1,
        pointRadius: 0
    },
    {
        label: 'Baixo',
        backgroundColor: 'rgb(157,210,52)',
        borderColor: 'rgb(157,210,52)',
        data: [1502, 1650, 1480, 1700, 1645, 1800],
        fill: false,
        borderWidth: 1,
        pointRadius: 0
    },
    {
        label: 'Moderado',
        backgroundColor: 'rgb(247,230,36)',
        borderColor: 'rgb(247,230,36)',
        data: [3000, 3250, 2890, 3560, 3540, 3241],
        fill: false,
        borderWidth: 1,
        pointRadius: 0
    },
    {
        label: 'Alto',
        backgroundColor: 'rgba(255,192,0,0.2)',
        borderColor: 'rgba(255,192,0,255)',
        data: [2613, 2951, 3491, 2601, 2483, 2194],
        fill: false,
        borderWidth: 3,
        pointRadius: 0
    },
    {
        label: 'Muito Alto',
        backgroundColor: 'rgb(217,61,61)',
        borderColor: 'rgb(217,61,61)',
        data: [123, 212, 32, 242, 125, 112],
        fill: false,
        borderWidth: 3,
        pointRadius: 0
    }]
};

// Configurações do gráfico

    // ALERTA MONITORAMENTO
var optionsAlertaMonitoramento = {
    scales: {
        y: {
            beginAtZero: true,
            display: false,
            suggestedMin: 0, // Valor mínimo sugerido
            suggestedMax: 700,
            grid: {
                display: false // Remove a grade do eixo Y
            }
        },
        x: {
            beginAtZero: true,
            grid: {
                display: false // Remove a grade do eixo Y
            }
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
        }
        
    }
};

    // BASE DE CLIENTES
var optionsBaseClientes = {
    scales: {
        y: {
            beginAtZero: true,
            display: false,
            suggestedMin: 0, // Valor mínimo sugerido
            suggestedMax: 2000,
            grid: {
                display: false // Remove a grade do eixo Y
            }
        },
        x: {
            beginAtZero: true,
            grid: {
                display: false // Remove a grade do eixo Y
            }
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
        }
        
    }
};


    // VOLUME DE TRANSAÇÕES
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
            suggestedMax: 35, // Valor máximo sugerido
            grid: {
                display: false // Remove a grade do eixo Y
            }
        },
        x: {
            beginAtZero: true,
            grid: {
                display: false // Remove a grade do eixo Y
            }
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

    // PERFIS DE RISCO
var optionsPerfisRisco = {
    scales: {
        y: {
            display: false,
            suggestedMin: 0, // Valor mínimo sugerido
            suggestedMax: 100,
            beginAtZero: true,
            grid: {
                display: false // Remove a grade do eixo Y
            }
        },
        x: {
            beginAtZero: true,
            grid: {
                display: false // Remove a grade do eixo Y
            }
        }
        
    },
    plugins: {
        legend: {
            display: false
        },

        datalabels: {
            display: true,
            align: 'top', // Posiciona o rótulo acima do ponto
            anchor: 'center', // Alinha o rótulo no centro do ponto
            clamp: true
        },
        
    }
};

// REGISTRO DO PLUGIN LABELS
Chart.register(ChartDataLabels)

// CRIACAO DOS GRAFICOS
var baseClientes = new Chart(baseClientesCtx, {
    type: 'line',
    data: dataBaseClientes,
    options: optionsBaseClientes
});

var volumeTransacoes = new Chart(volumeTransacoesCtx, {
    type: 'line',
    data: dataVolumeTransacoes,
    options: optionsVolumeTransacoes
});

var perfisRisco = new Chart(perfisRiscoCtx, {
    type: 'line',
    data: dataPerfisRiscos,
    options: optionsPerfisRisco
});

var alertasMonitoramento = new Chart(alertasMonitoramentoCtx, {
    type: 'line',
    data: dataAlertaMonitoramento,
    options: optionsAlertaMonitoramento
});


// CRIAÇÃO DA LEGENDA PERSONALIZADA

    // PERFIS DE RISCO
var customLegend = document.getElementById('customLegend');
dataPerfisRiscos.datasets.forEach(function(dataset, index) {
    customLegend.innerHTML += '<div class="alinhamento-icone-palavra"><span style="background-color:' + dataset.borderColor + '; width: 25px; height: ' + dataset.borderWidth + 'px; display: inline-block; margin-right: 5px;"></span>' + dataset.label + '</div>';
});

    // VOLUME DE TRANSAÇÕES
var customLegendVolumeTransacoes = document.getElementById('legenda-volume-transacoes');
dataVolumeTransacoes.datasets.forEach(function(dataset, index) {
    if(dataset.label == 'Operações')
        customLegendVolumeTransacoes.innerHTML += '<div class="alinhamento-icone-palavra"><span style="background-image: linear-gradient(to bottom, rgb(9,41,104) , rgba(157,195,230,255)); width: 25px; height: 5px; display: inline-block; margin-right: 5px;"></span>' + dataset.label + '</div>';
    else
    customLegendVolumeTransacoes.innerHTML += '<div class="alinhamento-icone-palavra"><span style="background-color:' + dataset.borderColor + '; width: 25px; height: ' + dataset.borderWidth + 'px; display: inline-block; margin-right: 5px;"></span>' + dataset.label + '</div>';
});

// FUNÇÃO QUE CRIA GRADIENTE NO GRÁFICO DE LINHA PREENCHIDO
function createLinearGradient(ctx, colorInicio, colorFim) {
    var gradient = baseClientesCtx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, colorInicio); // Cor no início do gradiente
    gradient.addColorStop(1, colorFim); // Cor no final do gradiente
    return gradient;
}

// FUNÇÃO QUE CRIA GRADIENTE NO GRÁFICO DE BARRAS
    function createLinearGradientBar(ctx, colorInicio, colorFim) {
        var gradient = baseClientesCtx.createLinearGradient(0, 200, 0, 300);
        gradient.addColorStop(0, colorInicio); // Cor no início do gradiente
        gradient.addColorStop(1, colorFim); // Cor no final do gradiente
        return gradient;
    }


    function criarVetorAleatorio(tamanho, max, min) {
        var vetor = [];
      
        for (var i = 0; i < tamanho; i++) {
          var numeroAleatorio = Math.floor(Math.random() * (max)) + min; // Gera um número aleatório de 10 a 99
          vetor.push(numeroAleatorio);
        }
      
        return vetor;
      }

// MUDANÇA DE GRÁFICO

document.getElementById('selectPerfis').addEventListener('change', function () {
    // Obtém o valor selecionado
    var selectedOption = this.value;

    // Atualiza os dados com base na opção selecionada
    var newData;

    if (selectedOption === 'Clientes') {
        newData = {
            labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Muito Baixo',
                backgroundColor: 'rgb(67,190,67)',
                borderColor: 'rgb(67,190,67)',
                data: [452, 527, 600, 425, 395, 555],
                fill: false,
                borderWidth: 1,
                pointRadius: 0
            },
            {
                label: 'Baixo',
                backgroundColor: 'rgb(157,210,52)',
                borderColor: 'rgb(157,210,52)',
                data: [1502, 1650, 1480, 1700, 1645, 1800],
                fill: false,
                borderWidth: 1,
                pointRadius: 0
            },
            {
                label: 'Moderado',
                backgroundColor: 'rgb(247,230,36)',
                borderColor: 'rgb(247,230,36)',
                data: [3000, 3250, 2890, 3560, 3540, 3241],
                fill: false,
                borderWidth: 1,
                pointRadius: 0
            },
            {
                label: 'Alto',
                backgroundColor: 'rgba(255,192,0,0.2)',
                borderColor: 'rgba(255,192,0,0.2)',
                data: [2613, 2951, 3491, 2601, 2483, 2194],
                fill: false,
                borderWidth: 3,
                pointRadius: 0
            },
            {
                label: 'Muito Alto',
                backgroundColor: 'rgb(217,61,61)',
                borderColor: 'rgb(217,61,61)',
                data: [123, 212, 32, 242, 125, 112],
                fill: false,
                borderWidth: 3,
                pointRadius: 0
            }]
        };
    } else if (selectedOption === 'Produtos') {
        newData =  {
            labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Muito Baixo',
                backgroundColor: 'rgb(67,190,67)',
                borderColor: 'rgb(67,190,67)',
                data: [73, 76, 78, 79, 75, 79],
                fill: false,
                borderWidth: 1,
                pointRadius: 0
            },
            {
                label: 'Baixo',
                backgroundColor: 'rgb(157,210,52)',
                borderColor: 'rgb(157,210,52)',
                data: [74, 79, 73, 79, 77, 72],
                fill: false,
                borderWidth: 1,
                pointRadius: 0
            },
            {
                label: 'Moderado',
                backgroundColor: 'rgb(247,230,36)',
                borderColor: 'rgb(247,230,36)',
                data: [58, 60, 70, 65, 68, 70],
                fill: false,
                borderWidth: 1,
                pointRadius: 0
            },
            {
                label: 'Alto',
                backgroundColor: 'rgba(255,192,0,0.2)',
                borderColor: 'rgba(255,192,0,0.2)',
                data: [52, 54, 60, 58, 55, 51],
                fill: false,
                borderWidth: 3,
                pointRadius: 0
            },
            {
                label: 'Muito Alto',
                backgroundColor: 'rgb(217,61,61)',
                borderColor: 'rgb(217,61,61)',
                data: [34, 23, 18, 38, 11, 41],
                fill: false,
                borderWidth: 3,
                pointRadius: 0
            }]
        };
    } else if (selectedOption === 'Funcionarios') {
        newData =  {
            labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Muito Baixo',
                backgroundColor: 'rgb(67,190,67)',
                borderColor: 'rgb(67,190,67)',
                data: [85, 89, 55, 88, 75, 79],
                fill: false,
                borderWidth: 1,
                pointRadius: 0
            },
            {
                label: 'Baixo',
                backgroundColor: 'rgb(157,210,52)',
                borderColor: 'rgb(157,210,52)',
                data: [74, 81, 73, 90, 77, 74],
                fill: false,
                borderWidth: 1,
                pointRadius: 0
            },
            {
                label: 'Moderado',
                backgroundColor: 'rgb(247,230,36)',
                borderColor: 'rgb(247,230,36)',
                data: [50, 76,60, 68, 65, 70],
                fill: false,
                borderWidth: 1,
                pointRadius: 0
            },
            {
                label: 'Alto',
                backgroundColor: 'rgba(255,192,0,0.2)',
                borderColor: 'rgba(255,192,0,0.2)',
                data: [64, 75, 60, 55, 58, 51],
                fill: false,
                borderWidth: 3,
                pointRadius: 0
            },
            {
                label: 'Muito Alto',
                backgroundColor: 'rgb(217,61,61)',
                borderColor: 'rgb(217,61,61)',
                data: [40, 18, 23, 11, 38, 41],
                fill: false,
                borderWidth: 3,
                pointRadius: 0
            }]
        };
    } else if (selectedOption === 'Parceiros') {
        newData =  {
            labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Muito Baixo',
                backgroundColor: 'rgb(67,190,67)',
                borderColor: 'rgb(67,190,67)',
                data: [150, 147, 135, 149, 180, 139],
                fill: false,
                borderWidth: 1,
                pointRadius: 0
            },
            {
                label: 'Baixo',
                backgroundColor: 'rgb(157,210,52)',
                borderColor: 'rgb(157,210,52)',
                data: [120, 135, 140, 130, 128, 125],
                fill: false,
                borderWidth: 1,
                pointRadius: 0
            },
            {
                label: 'Moderado',
                backgroundColor: 'rgb(247,230,36)',
                borderColor: 'rgb(247,230,36)',
                data: [100, 89, 90, 95, 110, 109],
                fill: false,
                borderWidth: 1,
                pointRadius: 0
            },
            {
                label: 'Alto',
                backgroundColor: 'rgba(255,192,0,0.2)',
                borderColor: 'rgba(255,192,0,0.2)',
                data: [87, 82, 85, 75, 85, 90],
                fill: false,
                borderWidth: 3,
                pointRadius: 0
            },
            {
                label: 'Muito Alto',
                backgroundColor: 'rgb(217,61,61)',
                borderColor: 'rgb(217,61,61)',
                data: [54, 60, 65, 68, 76, 74],
                fill: false,
                borderWidth: 3,
                pointRadius: 0
            }]
        };
    } else if (selectedOption === 'Prestadores') {
        newData =  {
            labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Muito Baixo',
                backgroundColor: 'rgb(67,190,67)',
                borderColor: 'rgb(67,190,67)',
                data: [354, 326, 375, 400, 386, 350],
                fill: false,
                borderWidth: 1,
                pointRadius: 0
            },
            {
                label: 'Baixo',
                backgroundColor: 'rgb(157,210,52)',
                borderColor: 'rgb(157,210,52)',
                data: [325, 375, 354, 328, 295, 300],
                fill: false,
                borderWidth: 1,
                pointRadius: 0
            },
            {
                label: 'Moderado',
                backgroundColor: 'rgb(247,230,36)',
                borderColor: 'rgb(247,230,36)',
                data: [256, 300, 254, 230, 250, 276],
                fill: false,
                borderWidth: 1,
                pointRadius: 0
            },
            {
                label: 'Alto',
                backgroundColor: 'rgba(255,192,0,0.2)',
                borderColor: 'rgba(255,192,0,0.2)',
                data: [221, 200, 254, 230, 194, 200],
                fill: false,
                borderWidth: 3,
                pointRadius: 0
            },
            {
                label: 'Muito Alto',
                backgroundColor: 'rgb(217,61,61)',
                borderColor: 'rgb(217,61,61)',
                data: [100, 125, 100, 118, 90, 150],
                fill: false,
                borderWidth: 3,
                pointRadius: 0
            }]
        };
    }

    // Atualiza o gráfico com os novos dados
    perfisRisco.data = newData;
    perfisRisco.update();
});

//  SELECT TRANS. DIGITAL

document.getElementById('transacoes').addEventListener('change', function () {
    // Obtém o valor selecionado
    var selectedOption = this.value;

    // Atualiza os dados com base na opção selecionada
    var newData;

    if (selectedOption === 'Trans. Digital') {
        newData = {
        labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: 'Operações',
            type: 'bar',
            backgroundColor: createLinearGradientBar(baseClientesCtx, 'rgb(9,41,104)', 'rgba(157,195,230,255)'),
            borderColor: 'rgba(75, 192, 192, 1)',
            data: [2500, 3000, 4200, 4000, 5700, 6000],
            borderWidth: 1,
            pointRadius: 0,
            yAxisID: 'leftYAxis',
            barPercentage: 0.4,
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
    }} else if (selectedOption === 'opcao1') {
        newData = {
            labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Operações',
                type: 'bar',
                backgroundColor: createLinearGradientBar(baseClientesCtx, 'rgb(9,41,104)', 'rgba(157,195,230,255)'),
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [1500, 4300, 2300, 1700, 5600, 3800],
                borderWidth: 1,
                pointRadius: 0,
                yAxisID: 'leftYAxis',
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            },{
                label: 'Volume financeiro',
                type: 'line',
                backgroundColor: 'rgb(9,41,104)',
                borderColor: 'rgb(9,41,104)',
                data: [21, 19, 29, 17, 18, 15],
                fill: false,
                borderWidth: 1,
                pointRadius: 0,
                yAxisID: 'rightYAxis',
            }]
        }
    }  else if (selectedOption === 'opcao2') {
        newData = {
            labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Operações',
                type: 'bar',
                backgroundColor: createLinearGradientBar(baseClientesCtx, 'rgb(9,41,104)', 'rgba(157,195,230,255)'),
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [200, 3700, 2500, 2200, 3800, 2900],
                borderWidth: 1,
                pointRadius: 0,
                yAxisID: 'leftYAxis',
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            },{
                label: 'Volume financeiro',
                type: 'line',
                backgroundColor: 'rgb(9,41,104)',
                borderColor: 'rgb(9,41,104)',
                data: [15, 12, 24, 25, 12, 11],
                fill: false,
                borderWidth: 1,
                pointRadius: 0,
                yAxisID: 'rightYAxis',
            }]
        }
    }  
    // Atualiza o gráfico com os novos dados
    volumeTransacoes.data = newData;
    volumeTransacoes.update();
});

// SELECT ENTIDADE

document.getElementById('contrato').addEventListener('change', function () {
    // Obtém o valor selecionado
    var selectedOption = this.value;

    // Atualiza os dados com base na opção selecionada
    var newData;

    if (selectedOption === 'PF') {
        newData = {
        labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: 'Operações',
            type: 'bar',
            backgroundColor: createLinearGradientBar(baseClientesCtx, 'rgb(9,41,104)', 'rgba(157,195,230,255)'),
            borderColor: 'rgba(75, 192, 192, 1)',
            data: [4500, 7700, 2300, 4000, 6000, 3500],
            borderWidth: 1,
            pointRadius: 0,
            yAxisID: 'leftYAxis',
            barPercentage: 0.4,
            datalabels: {
                display: false // Remove os rótulos de dados para este conjunto de dados
            }
        },{
            label: 'Volume financeiro',
            type: 'line',
            backgroundColor: 'rgb(9,41,104)',
            borderColor: 'rgb(9,41,104)',
            data: [21, 12, 15, 27, 25, 28],
            fill: false,
            borderWidth: 1,
            pointRadius: 0,
            yAxisID: 'rightYAxis',
        }]
    }} else if (selectedOption === 'PJ') {
        newData = {
            labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Operações',
                type: 'bar',
                backgroundColor: createLinearGradientBar(baseClientesCtx, 'rgb(9,41,104)', 'rgba(157,195,230,255)'),
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [2700, 4300, 2300, 1700, 5600, 3800],
                borderWidth: 1,
                pointRadius: 0,
                yAxisID: 'leftYAxis',
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            },{
                label: 'Volume financeiro',
                type: 'line',
                backgroundColor: 'rgb(9,41,104)',
                borderColor: 'rgb(9,41,104)',
                data: [21, 19, 28, 17, 18, 15],
                fill: false,
                borderWidth: 1,
                pointRadius: 0,
                yAxisID: 'rightYAxis',
            }]
        }
    } 
    // Atualiza o gráfico com os novos dados
    volumeTransacoes.data = newData;
    volumeTransacoes.update();
});


// SELECT ENTIDADE

document.getElementById('entidades').addEventListener('change', function () {
    // Obtém o valor selecionado
    var selectedOption = this.value;

    // Atualiza os dados com base na opção selecionada
    var newData = {
        labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: 'Operações',
            type: 'bar',
            backgroundColor: createLinearGradientBar(baseClientesCtx, 'rgb(9,41,104)', 'rgba(157,195,230,255)'),
            borderColor: 'rgba(75, 192, 192, 1)',
            data: [4500, 7700, 2300, 4000, 6000, 3500],
            borderWidth: 1,
            pointRadius: 0,
            yAxisID: 'leftYAxis',
            barPercentage: 0.4,
            datalabels: {
                display: false // Remove os rótulos de dados para este conjunto de dados
            }
        },{
            label: 'Volume financeiro',
            type: 'line',
            backgroundColor: 'rgb(9,41,104)',
            borderColor: 'rgb(9,41,104)',
            data: [21, 12, 15, 27, 25, 28],
            fill: false,
            borderWidth: 1,
            pointRadius: 0,
            yAxisID: 'rightYAxis',
        }]
    }

    if (selectedOption === 'Bacen') {
        newData.datasets[0].data = criarVetorAleatorio(6, 5000, 1000)
        newData.datasets[1].data = criarVetorAleatorio(6, 20, 10)

        } else if (selectedOption === 'CVM') {

        newData.datasets[0].data = criarVetorAleatorio(6, 5000, 1000)
        newData.datasets[1].data = criarVetorAleatorio(6, 20, 10)
    } else if (selectedOption === 'Susep') {

        newData.datasets[0].data = criarVetorAleatorio(6, 5000, 1000)
        newData.datasets[1].data = criarVetorAleatorio(6, 20, 10)
    }
    // Atualiza o gráfico com os novos dados
    volumeTransacoes.data = newData;
    volumeTransacoes.update();
});

document.getElementById('meios').addEventListener('change', function () {
    // Obtém o valor selecionado
    var selectedOption = this.value;

    // Atualiza os dados com base na opção selecionada
    var newData = {
        labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: 'Operações',
            type: 'bar',
            backgroundColor: createLinearGradientBar(baseClientesCtx, 'rgb(9,41,104)', 'rgba(157,195,230,255)'),
            borderColor: 'rgba(75, 192, 192, 1)',
            data: [4500, 7700, 2300, 4000, 6000, 3500],
            borderWidth: 1,
            pointRadius: 0,
            yAxisID: 'leftYAxis',
            barPercentage: 0.4,
            datalabels: {
                display: false // Remove os rótulos de dados para este conjunto de dados
            }
        },{
            label: 'Volume financeiro',
            type: 'line',
            backgroundColor: 'rgb(9,41,104)',
            borderColor: 'rgb(9,41,104)',
            data: [21, 12, 15, 27, 25, 28],
            fill: false,
            borderWidth: 1,
            pointRadius: 0,
            yAxisID: 'rightYAxis',
        }]
    }

    if (selectedOption === 'Segmento') {
        newData.datasets[0].data = criarVetorAleatorio(6, 5000, 1000)
        newData.datasets[1].data = criarVetorAleatorio(6, 20, 10)

    } else if (selectedOption === 'Canais') {

        newData.datasets[0].data = criarVetorAleatorio(6, 5000, 1000)
        newData.datasets[1].data = criarVetorAleatorio(6, 20, 10)
    } else if (selectedOption === 'Produtos') {

        newData.datasets[0].data = criarVetorAleatorio(6, 5000, 1000)
        newData.datasets[1].data = criarVetorAleatorio(6, 20, 10)
    } else if (selectedOption === 'Segmentos') {

        newData.datasets[0].data = criarVetorAleatorio(6, 5000, 1000)
        newData.datasets[1].data = criarVetorAleatorio(6, 20, 10)
    } else if (selectedOption === 'Serviços') {

        newData.datasets[0].data = criarVetorAleatorio(6, 5000, 1000)
        newData.datasets[1].data = criarVetorAleatorio(6, 20, 10)
    }
    // Atualiza o gráfico com os novos dados
    volumeTransacoes.data = newData;
    volumeTransacoes.update();
});

document.getElementById('clientes').addEventListener('change', function () {
    // Obtém o valor selecionado
    var selectedOption = this.value;

    // Atualiza os dados com base na opção selecionada
    var newData = {
        labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: 'PJ',
            type: 'line',
            backgroundColor: 'rgb(9,41,104) ',
            borderColor: 'rgb(9,41,104)',
            data: [300, 200, 240, 430, 500, 340],
            borderWidth: 1,
            pointRadius: 0
        }]
    };

    if (selectedOption === 'cliente-PF') {
        newData.datasets[0].data = criarVetorAleatorio(6, 90, 400)
    } else if (selectedOption === 'cliente-PJ') {
        newData.datasets[0].data = criarVetorAleatorio(6, 90, 400)
    }
    // Atualiza o gráfico com os novos dados
    alertasMonitoramento.data = newData;
    alertasMonitoramento.update();
});

document.getElementById('entidades-alertas').addEventListener('change', function () {
    // Obtém o valor selecionado
    var selectedOption = this.value;

    // Atualiza os dados com base na opção selecionada
    var newData = {
        labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: 'PJ',
            type: 'line',
            backgroundColor: 'rgb(9,41,104) ',
            borderColor: 'rgb(9,41,104)',
            data: [300, 200, 240, 430, 500, 340],
            borderWidth: 1,
            pointRadius: 0
        }]
    };

    if (selectedOption === 'Bacen') {
        newData.datasets[0].data = criarVetorAleatorio(6, 90, 400)
    } else if (selectedOption === 'CVM') {
        newData.datasets[0].data = criarVetorAleatorio(6, 90, 400)
    } else if (selectedOption === 'Susep') {
        newData.datasets[0].data = criarVetorAleatorio(6, 90, 400)
    }
    // Atualiza o gráfico com os novos dados
    alertasMonitoramento.data = newData;
    alertasMonitoramento.update();
});
// NAVEGAÇÃO MENU

const btnSair = document.getElementById("btn-sair")
const btnVoltar = document.getElementById("btn-voltar")

const handleClickSair = () => {
    window.location.href = "../index.html"
}

const handleClickVoltar = () => {
    window.location.href = "../home/home.html"
}

btnSair.addEventListener('click', handleClickSair)
btnVoltar.addEventListener('click', handleClickVoltar)

const voltaEstrategico = document.getElementById('volta-estrategico')
const voltaGerencial = document.getElementById('volta-gerencial')
const voltaOperacional = document.getElementById('volta-operacional')

voltaEstrategico.addEventListener('click', function() {
    window.location.href = '../home/home.html'
})
voltaGerencial.addEventListener('click', function() {
    window.location.href = '../home/home.html'
})
voltaOperacional.addEventListener('click', function() {
    window.location.href = '../home/home.html'
})