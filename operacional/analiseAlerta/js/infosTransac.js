var volumeTransacoesCtx = document.getElementById('volumeTransacoes').getContext('2d');

var dataVolumeTransacoes = {
    labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
    datasets: [{
        label: 'Operações',
        type: 'bar',
        backgroundColor: 'rgb(9,41,104)',
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