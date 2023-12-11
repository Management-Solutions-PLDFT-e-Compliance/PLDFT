
// GRAFICO
var graficoAnaliseEsteiraCtx = document.getElementById('grafico-analise-esteira').getContext('2d');
var graficoOciosidadeCtx = document.getElementById('grafico-ociosidade').getContext('2d');

var dataAnaliseEsteira = {
    labels: ['Esteira 1', 'Esteira 2', 'Esteira 3', 'Esteira 4', 'Esteira 5'],
    datasets: [{
        label: 'Operações',
        type: 'bar',
        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgb(9,41,104)', 'rgba(157,195,230,255)'),
        borderColor: 'rgba(75, 192, 192, 1)',
        data: [40, 30, 90, 30, 45],
        borderWidth: 1,
        pointRadius: 0,
        barPercentage: 0.4,
        datalabels: {
            display: false // Remove os rótulos de dados para este conjunto de dados
        }
    }]
};

var dataOciosidade = {
    labels: ['Esteira 1', 'Esteira 2', 'Esteira 3', 'Esteira 4', 'Esteira 5'],
    datasets: [{
        label: 'Operações',
        type: 'bar',
        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgb(9,41,104)', 'rgba(157,195,230,255)'),
        borderColor: 'rgba(75, 192, 192, 1)',
        data: [45, 22, 14, 25, 33],
        borderWidth: 1,
        pointRadius: 0,
        barPercentage: 0.4,
        datalabels: {
            display: false // Remove os rótulos de dados para este conjunto de dados
        }
    }]
};

var optionsAnaliseEsteira = {
    scales: {
        y: {
            type: 'linear',
            position: 'left',
            beginAtZero: true,
            suggestedMin: 0, // Valor mínimo sugerido
            suggestedMax: 100   , // Valor máximo sugerido
            grid: {
                display: false // Remove a grade do eixo Y
            },
            stepSize: 20
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


var optionsOciosidade = {
    scales: {
        y: {
            type: 'linear',
            position: 'left',
            beginAtZero: true,
            suggestedMin: 0, // Valor mínimo sugerido
            suggestedMax: 50, // Valor máximo sugerido
            grid: {
                display: false // Remove a grade do eixo Y
            },
            stepSize: 10
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

var graficoAnaliseEsteira = new Chart(graficoAnaliseEsteiraCtx, {
    type: 'bar',
    data: dataAnaliseEsteira,
    options: optionsAnaliseEsteira
});

var graficoOCiosidade = new Chart(graficoOciosidadeCtx, {
    type: 'bar',
    data: dataOciosidade,
    options: optionsOciosidade
});

function createLinearGradientBar(ctx, colorInicio, colorFim) {
    var gradient = ctx.createLinearGradient(0, 100, 0, 500);
    gradient.addColorStop(0, colorInicio); // Cor no início do gradiente
    gradient.addColorStop(1, colorFim); // Cor no final do gradiente
    return gradient;
}


// DISTRIBUICAO PENDENTE ABRIR
const btnFecharDistri = document.getElementById("fechar-alertas-distribuicao-pendentes")
const telaAbrir = document.getElementsByClassName("tela-abrir")[0]
const dashboard = document.getElementById("dashboard")
const distribuicaoPendenteLupa = document.getElementById("distribuicao-pendente-lupa")

btnFecharDistri.addEventListener("click", function() {
    telaAbrir.style.display = "none"
    dashboard.style.display = "grid"
})

distribuicaoPendenteLupa.addEventListener("click", function() {
    telaAbrir.style.display = "block"
    dashboard.style.display = "none"
})