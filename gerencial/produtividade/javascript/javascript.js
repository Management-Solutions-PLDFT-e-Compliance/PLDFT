
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
        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
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
            suggestedMax: 100, // Valor máximo sugerido
            grid: {
                display: true // Remove a grade do eixo Y
            },
            ticks: {
                stepSize: 20
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


var optionsOciosidade = {
    scales: {
        y: {
            type: 'linear',
            position: 'left',
            beginAtZero: true,
            suggestedMin: 0, // Valor mínimo sugerido
            suggestedMax: 50, // Valor máximo sugerido
            grid: {
                display: true // Remove a grade do eixo Y
            },
            ticks: {
                stepSize: 10
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
    var gradient = ctx.createLinearGradient(0, 100, 0, 200);
    gradient.addColorStop(0, colorInicio); // Cor no início do gradiente
    gradient.addColorStop(1, colorFim); // Cor no final do gradiente
    return gradient;
}


// PRODUTIVIDADE ABRIR
const btnFecharProd = document.getElementById("fechar-produtividade-dos-analistas")
const telaAbrir = document.getElementsByClassName("tela-abrir")[0]
const dashboard = document.getElementById("dashboard")
const btnAbrirProd = document.getElementById("btn-abrir-produtividade")

btnFecharProd.addEventListener("click", function() {
    telaAbrir.style.display = "none"
    dashboard.style.display = "flex"
})

btnAbrirProd.addEventListener("click", function() {
    telaAbrir.style.display = "block"
    dashboard.style.display = "none"
})

const checkBoxes = document.querySelectorAll(".correto")
const correctImg = document.querySelectorAll(".correto img")

function toggleCheckBox(index) {
    if(correctImg[index].style.display == "none")
        correctImg[index].style.display = "block"
    else
        correctImg[index].style.display = "none"
}

// Obtém uma lista de elementos com a classe 'minha-classe'

// Adiciona o evento a cada elemento da lista
checkBoxes.forEach(function(elemento, index) {
    elemento.addEventListener('click', e => toggleCheckBox(index));
});