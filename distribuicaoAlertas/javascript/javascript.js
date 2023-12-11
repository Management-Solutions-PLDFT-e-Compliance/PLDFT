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

// GRAFICO
var analisePendenteCtx = document.getElementById('grafico-analises-pendentes').getContext('2d');

var dataAnalisePendente = {
    labels: ['Analista 1', 'Analista 2', 'Analista 3', 'Analista 4', 'Analista 5', 'Analista 6'],
    datasets: [{
        label: 'Operações',
        type: 'bar',
        backgroundColor: createLinearGradientBar(analisePendenteCtx, 'rgb(9,41,104)', 'rgba(157,195,230,255)'),
        borderColor: 'rgba(75, 192, 192, 1)',
        data: [20, 40, 20, 35, 60, 45],
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
        data: [240, 140, 110, 160, 40, 55],
        fill: false,
        borderWidth: 1,
        pointRadius: 0,
        yAxisID: 'rightYAxis',
    }]
};

var optionsAnalisePendente = {
    scales: {
        leftYAxis: {
            type: 'linear',
            position: 'left',
            beginAtZero: true,
            suggestedMin: 0, // Valor mínimo sugerido
            suggestedMax: 70, // Valor máximo sugerido
            // grid: {
            //     display: false // Remove a grade do eixo Y
            // }
            
        },
        rightYAxis: {
            type: 'linear',
            position: 'right',
            beginAtZero: true,
            suggestedMin: 0, // Valor mínimo sugerido
            suggestedMax: 300, // Valor máximo sugerido
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

var analisePendente = new Chart(analisePendenteCtx, {
    type: 'line',
    data: dataAnalisePendente,
    options: optionsAnalisePendente
});

function createLinearGradientBar(ctx, colorInicio, colorFim) {
    var gradient = ctx.createLinearGradient(0, 150, 0, 180);
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