
// GRAFICO
var graficoAnaliseEsteiraCtx = document.getElementById('grafico-analise-esteira').getContext('2d');
var graficoOciosidadeCtx = document.getElementById('grafico-ociosidade').getContext('2d');
var graficoDistribuicaoSeniorCtx = document.getElementById('grafico-distribuicao-senioridade-por-esteira').getContext('2d');

var dataAnaliseEsteira = {
    labels: ['Contas', 'Câmbio', 'Seguros', 'Investimentos', 'Empréstimos'],
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
    labels: ['Contas', 'Câmbio', 'Seguros', 'Investimentos', 'Empréstimos'],
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

var dataDistribuicaoSenior = {
    labels: ['Júnior', 'Pleno', 'Senior'],
    datasets: [{
        label: 'Operações',
        type: 'bar',
        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
        borderColor: 'rgba(75, 192, 192, 1)',
        data: [73, 76, 78],
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

var optionsDistribuicaoSenior = {
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

var graficoDistribuicaoSenior = new Chart(graficoDistribuicaoSeniorCtx, {
    type: 'bar',
    data: dataDistribuicaoSenior,
    options: optionsDistribuicaoSenior
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

document.getElementById('select-distribuicao-senioridade').addEventListener('change', function () {
    // Obtém o valor selecionado
    var selectedOption = this.value;

    // Atualiza os dados com base na opção selecionada
    var newData;

    if (selectedOption === 'Câmbio') {
        newData = {
            labels: ['Júnior', 'Pleno', 'Sênior'],
            datasets: [{
                label: 'Muito Baixo',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [452, 527, 600],
                fill: false,
                borderWidth: 1,
                pointRadius: 0,
                barPercentage: 0.4
            },
            ]
        };
    } else if (selectedOption === 'Contas') {
        newData =  {
            labels: ['Júnior', 'Pleno', 'Sênior'],
            datasets: [{
                label: 'Muito Baixo',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [73, 76, 78],
                fill: false,
                borderWidth: 1,
                pointRadius: 0,
                barPercentage: 0.4,
            }]
        };
    } else if (selectedOption === 'Seguros') {
        newData =  {
            labels: ['Júnior', 'Pleno', 'Sênior'],
            datasets: [{
                label: 'Muito Baixo',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [73, 76, 78],
                fill: false,
                borderWidth: 1,
                pointRadius: 0,
                barPercentage: 0.4,
            }]
        };
    } else if (selectedOption === 'Funcionarios') {
        newData =  {
            labels: ['Júnior', 'Pleno', 'Sênior'],
            datasets: [{
                label: 'Muito Baixo',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [85, 89, 55],
                fill: false,
                borderWidth: 1,
                pointRadius: 0,
                barPercentage: 0.4,
            }]
        };
    } else if (selectedOption === 'Investimentos') {
        newData =  {
            labels: ['Júnior', 'Pleno', 'Sênior'],
            datasets: [{
                label: 'Muito Baixo',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [150, 147, 135],
                fill: false,
                borderWidth: 1,
                pointRadius: 0,
                barPercentage: 0.4,
            }]
        };
    } else if (selectedOption === 'Consórcios') {
        newData =  {
            labels: ['Júnior', 'Pleno', 'Sênior'],
            datasets: [{
                label: 'Muito Baixo',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [354, 326, 375],
                fill: false,
                borderWidth: 1,
                pointRadius: 0,
                barPercentage: 0.4,
            }]
        };
    } else if (selectedOption === 'Funcionários') {
        newData =  {
            labels: ['Júnior', 'Pleno', 'Sênior'],
            datasets: [{
                label: 'Muito Baixo',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [412, 12, 55],
                fill: false,
                borderWidth: 1,
                pointRadius: 0,
                barPercentage: 0.4,
            }]
        };
    } else if (selectedOption === 'Externas') {
        newData =  {
            labels: ['Júnior', 'Pleno', 'Sênior'],
            datasets: [{
                label: 'Muito Baixo',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [105, 123, 55],
                fill: false,
                borderWidth: 1,
                pointRadius: 0,
                barPercentage: 0.4,
            }]
        };
    }

    // Atualiza o gráfico com os novos dados
    graficoDistribuicaoSenior.data = newData;
    graficoDistribuicaoSenior.update();
});

// Dados de exemplo
var dados_esteira = {
    labels: ['Contas', 'Câmbio', 'Seguros', 'Investimentos', 'Empréstimos', 'Consórcios', 'Funcionários', 'Externas'],
    datasets: [{
       data: [92, 42, 40, 34, 12, 9, 12, 20 ], // Valores para cada categoria
       backgroundColor: ['#3F51B5', '#FF5722', '#4CAF50', '#FFC107', '#9C27B0', '#2196F3', '#E91E63', '#FF9800'] // Cores das fatias
    }]
 };

 // Configuração do gráfico

 const config = {
    type: 'pie',
    data: dados_esteira,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
      }
    },
};
 // Obtenha o contexto do canvas e crie o gráfico de pizza
 let graficoPessoaEsteiraCtx = document.getElementById('pessoas-por-esteira').getContext('2d');
 
 var grafico_esteira = new Chart(graficoPessoaEsteiraCtx, config);