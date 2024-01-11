
// GRAFICO
var graficoAnaliseEsteiraCtx = document.getElementById('grafico-analise-esteira').getContext('2d');
var graficoOciosidadeCtx = document.getElementById('grafico-ociosidade').getContext('2d');
var graficoDistribuicaoSeniorCtx = document.getElementById('grafico-distribuicao-senioridade-por-esteira').getContext('2d');
var graficoProdAnalistaEquipeCtx = document.getElementById('grafico-analise-produtividade-analista-por-equipe').getContext('2d');

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

var dataProdAnalistaEquipe = {
    labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
    datasets: [{
        label: 'Limite Superior',
        type: 'line',
        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
        borderColor: 'lightgray',
        data: [0, 0, 0, 0, 0, 0],
        borderWidth: 4,
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

var optionsProdAnalistaEquipe = {
    scales: {
        y: {
            type: 'linear',
            position: 'left',
            beginAtZero: true,
            suggestedMin: 0, // Valor mínimo sugerido
            suggestedMax: 50, // Valor máximo sugerido
            grid: {
                display: true, // Remove a grade do eixo Y
                // drawOnChartArea: false, // Impede a linha de grade principal de ser desenhada
                // color: function(context) { // Cor da linha horizontal
                //     var index = context.tick.value;
                //     return index === 10 ? 'red' : 'blue'; // Linha vermelha para o valor mínimo, azul para o valor máximo
                // },
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
        },
        annotation: {
            annotations: [
                {
                    type: 'line',
                    mode: 'horizontal',
                    scaleID: 'y',
                    value: 2, // Valor da primeira linha
                    borderColor: 'red',
                    borderWidth: 2,
                    label: {
                        content: 'Linha 1',
                        enabled: true,
                        position: 'right'
                    }
                },
                {
                    type: 'line',
                    mode: 'horizontal',
                    scaleID: 'y',
                    value: 10, // Valor da segunda linha
                    borderColor: 'blue',
                    borderWidth: 2,
                    label: {
                        content: 'Linha 2',
                        enabled: true,
                        position: 'right'
                    }
                }
            ]
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

var graficoProdAnalistaEquipe = new Chart(graficoProdAnalistaEquipeCtx, {
    type: 'line',
    data: dataProdAnalistaEquipe,
    options: optionsProdAnalistaEquipe
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
                borderWidth: 3,
                pointRadius: 0,
                barPercentage: 0.4
            },
            ]
        };
    } else if (selectedOption === 'Contas') {
        newData =  {
            datasets: [{
                label: 'Muito Baixo',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'rgba(75, 192, 192, 1)',
                data: [73, 76, 78],
                fill: false,
                borderWidth: 3,
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
                borderWidth: 3,
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
                borderWidth: 3,
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
                borderWidth: 3,
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
                borderWidth: 3,
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
                borderWidth: 3,
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
                borderWidth: 3,
                pointRadius: 0,
                barPercentage: 0.4,
            }]
        };
    }

    // Atualiza o gráfico com os novos dados
    graficoProdAnalistaEquipe.data = newData;
    graficoProdAnalistaEquipe.update();
});

// Dados de exemplo
var dados_esteira = {
    labels: ['Contas', 'Câmbio', 'Seguros', 'Investimentos', 'Empréstimos', 'Consórcios', 'Funcionários', 'Externas'],
    datasets: [{
       data: [92, 42, 40, 28, 12, 15, 12, 20 ], // Valores para cada categoria
       backgroundColor: ['#3F51B5', '#FF5722', '#4CAF50', '#FFC107', '#9C27B0', '#2196F3', '#E91E63', '#FF9800'] // Cores das fatias
    }]
 };

 // Configuração do gráfico

 const config_esteira = {
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
 
 var grafico_esteira = new Chart(graficoPessoaEsteiraCtx, config_esteira);

 let dados_comparacao = {
    labels:['Habilidade 1', 'Habilidade 2', 'Habilidade 3', 'Habilidade 4', 'Habilidade 5', 'Habilidade 6', 'Habilidade 7', 'Habilidade 8', 'Habilidade 9'],
    datasets: [
        {
        label: 'nomeAnalista1',
        data: [-85, -95, , -81, -65, -60, -55, -59, -40, -69],
        backgroundColor: "#1c78b3",
        },
        {
        label: 'nomeAnalista2',
        data: [82, 75, 79, 55, 43, 49, 20, 60, 35],
        backgroundColor: '#fe800f',
        }
    ]
 }

 const config_comparacao = {
    type: 'bar',
    data: dados_comparacao,
    options: {
      indexAxis: 'y',
      // Elements options apply to all of the options unless overridden in a dataset
      // In this case, we are setting the border of each horizontal bar to be 2px wide
      elements: {
        bar: {
          borderWidth: 2,
        }
      },
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        }
      }
    },
  };

let graficoComparacaoAnalistaCtx = document.getElementById('grafico-comparacao-analistas').getContext('2d');

let grafico_comparacao = new Chart(graficoComparacaoAnalistaCtx, config_comparacao)


const selectEsteiras = document.getElementById("select-esteiras")
const selectAnalista = document.getElementById("select-analista")


if(selectEsteiras.value == "Esteiras") {
   selectAnalista.style.backgroundColor = "lightgray"
   selectAnalista.style.color = "gray"
   selectAnalista.disabled = true

   // Adicionar mensagem quando o select for clicado sem ter sido selecionado uma esteira
   // selectAnalista.addEventListener("click", function() {

   // })
}

selectEsteiras.addEventListener("change", function() {
   var selectedOption = this.value;
   let newDataEsteira

   if(selectedOption != "Esteiras") {
       selectAnalista.style.backgroundColor = "white"
       selectAnalista.style.color = "black"
       selectAnalista.disabled = false

       if(selectedOption == "Contas") {
           selectAnalista.innerHTML = `
               <option value='Analistas'>Analistas</option>
               <option value='Alan Ribeiro'>Alan Ribeiro</option>
               <option value='Bryan da Silva'>Bryan da Silva</option>
           `

           newDataEsteira = {
               labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
               datasets: [{
                   label: 'Esteira',
                   backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                   borderColor: 'rgba(75, 192, 192, 1)',
                   data: [82, 75, 80, 60,90, 50],
                   fill: false,
                   borderWidth: 2,
                   pointRadius: 0,
               },{
                label: 'Limite Superior',
                type: 'line',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: '#081c4c',
                data: [90, 90, 90, 90, 90, 90],
                borderWidth: 4,
                pointRadius: 0,
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            },
            {
                label: 'Limite Inferior',
                type: 'line',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'red',
                data: [50, 50, 50, 50, 50, 50],
                borderWidth: 4,
                pointRadius: 0,
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            }]
           }

           graficoProdAnalistaEquipe.data = newDataEsteira
           graficoProdAnalistaEquipe.update()

           selectAnalista.addEventListener("change", function() {
               selectedOptionAnalista = this.value
               let newDataAnalista

               if(selectedOptionAnalista == "Alan Ribeiro") {
                   newDataAnalista = {
                       labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                       datasets: [{
                           label: 'Esteira',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'rgba(75, 192, 192, 1)',
                           data: [82, 75, 80, 60,90, 50],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       }, 
                       {
                           label: 'Analista',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'yellow',
                           data: [52, 70, 75, 82,60, 50],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       },{
                        label: 'Limite Superior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: '#081c4c',
                        data: [90, 90, 90, 90, 90, 90],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    },
                    {
                        label: 'Limite Inferior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'red',
                        data: [50, 50, 50, 50, 50, 50],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    }]
                   }
               } else if(selectedOptionAnalista == "Bryan da Silva") {
                   newDataAnalista = {
                       labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                       datasets: [{
                           label: 'Esteira',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'rgba(75, 192, 192, 1)',
                           data: [82, 75, 80, 60,90, 50],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       }, 
                       {
                           label: 'Analista',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'yellow',
                           data: [80, 65, 75, 45, 55, 72],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       },{
                        label: 'Limite Superior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: '#081c4c',
                        data: [90, 90, 90, 90, 90, 90],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    },
                    {
                        label: 'Limite Inferior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'red',
                        data: [45, 45, 45, 45, 45, 45],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    }]
                   }
               } else {
                    newDataAnalista = {
                        labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                        datasets: [{
                            label: 'Esteira',
                            backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                            borderColor: 'rgba(75, 192, 192, 1)',
                            data: [82, 75, 80, 60,90, 50],
                            fill: false,
                            borderWidth: 2,
                            pointRadius: 0,
                        },{
                         label: 'Limite Superior',
                         type: 'line',
                         backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                         borderColor: '#081c4c',
                         data: [90, 90, 90, 90, 90, 90],
                         borderWidth: 4,
                         pointRadius: 0,
                         barPercentage: 0.4,
                         datalabels: {
                             display: false // Remove os rótulos de dados para este conjunto de dados
                         }
                     },
                     {
                         label: 'Limite Inferior',
                         type: 'line',
                         backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                         borderColor: 'red',
                         data: [50, 50, 50, 50, 50, 50],
                         borderWidth: 4,
                         pointRadius: 0,
                         barPercentage: 0.4,
                         datalabels: {
                             display: false // Remove os rótulos de dados para este conjunto de dados
                         }
                     }]
                    }
               }

               graficoProdAnalistaEquipe.data = newDataAnalista
               graficoProdAnalistaEquipe.update()
           })
       } else if(selectedOption == "Câmbio") {
           selectAnalista.innerHTML = `
               <option value='Analistas'>Analistas</option>
               <option value='Rafaela Oliveira'>Rafaela Oliveira</option>
               <option value='João Martins'>João Martins</option>
           `

           newDataEsteira = {
               labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
               datasets: [{
                   label: 'Esteira',
                   backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                   borderColor: 'rgba(75, 192, 192, 1)',
                   data: [39, 39, 94, 50, 95, 20],
                   fill: false,
                   borderWidth: 2,
                   pointRadius: 0,
               },{
                label: 'Limite Superior',
                type: 'line',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: '#081c4c',
                data: [95, 95, 95, 95, 95, 95],
                borderWidth: 4,
                pointRadius: 0,
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            },
            {
                label: 'Limite Inferior',
                type: 'line',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'red',
                data: [20, 20, 20, 20, 20, 20],
                borderWidth: 4,
                pointRadius: 0,
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            }]
           }

           graficoProdAnalistaEquipe.data = newDataEsteira
           graficoProdAnalistaEquipe.update()

           selectAnalista.addEventListener("change", function() {
               selectedOptionAnalista = this.value
               let newDataAnalista

               if(selectedOptionAnalista == "Rafaela Oliveira") {
                   newDataAnalista = {
                       labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                       datasets: [{
                           label: 'Esteira',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'rgba(75, 192, 192, 1)',
                           data: [39, 39, 94, 50, 95, 20],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       }, 
                       {
                           label: 'Analista',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'yellow',
                           data: [62, 10, 15, 12,60, 50],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       },{
                        label: 'Limite Superior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: '#081c4c',
                        data: [95, 95, 95, 95, 95, 95],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    },
                    {
                        label: 'Limite Inferior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'red',
                        data: [10, 10, 10, 10, 10, 10],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    }]
                   }
               } else if(selectedOptionAnalista == "João Martins") {
                   newDataAnalista = {
                       labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                       datasets: [{
                           label: 'Esteira',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'rgba(75, 192, 192, 1)',
                           data: [39, 39, 94, 50, 95, 20],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       }, 
                       {
                           label: 'Analista',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'yellow',
                           data: [80, 65, 75, 45, 55, 72],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       },{
                        label: 'Limite Superior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: '#081c4c',
                        data: [95, 95, 95, 95, 95, 95],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    },
                    {
                        label: 'Limite Inferior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'red',
                        data: [20, 20, 20, 20, 20, 20],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    }]
                   }
               } else {
                newDataAnalista = {
                    labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                    datasets: [{
                        label: 'Esteira',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'rgba(75, 192, 192, 1)',
                        data: [39, 39, 94, 50, 95, 20],
                        fill: false,
                        borderWidth: 2,
                        pointRadius: 0,
                    },{
                     label: 'Limite Superior',
                     type: 'line',
                     backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                     borderColor: '#081c4c',
                     data: [95, 95, 95, 95, 95, 95],
                     borderWidth: 4,
                     pointRadius: 0,
                     barPercentage: 0.4,
                     datalabels: {
                         display: false // Remove os rótulos de dados para este conjunto de dados
                     }
                 },
                 {
                     label: 'Limite Inferior',
                     type: 'line',
                     backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                     borderColor: 'red',
                     data: [20, 20, 20, 20, 20, 20],
                     borderWidth: 4,
                     pointRadius: 0,
                     barPercentage: 0.4,
                     datalabels: {
                         display: false // Remove os rótulos de dados para este conjunto de dados
                     }
                 }]
                }
               }

               graficoProdAnalistaEquipe.data = newDataAnalista
               graficoProdAnalistaEquipe.update()
           })
       } else if(selectedOption == "Seguros") {
           selectAnalista.innerHTML = `
               <option value='Analistas'>Analistas</option>
               <option value='Ana Carolina Santos'>Ana Carolina Santos</option>
               <option value='Pedro Almeida'>Pedro Almeida</option>
           `

           newDataEsteira = {
               labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
               datasets: [{
                   label: 'Esteira',
                   backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                   borderColor: 'rgba(75, 192, 192, 1)',
                   data: [74, 85, 30, 60, 83, 93],
                   fill: false,
                   borderWidth: 2,
                   pointRadius: 0,
               },{
                label: 'Limite Superior',
                type: 'line',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: '#081c4c',
                data: [93, 93, 93, 93, 93, 93],
                borderWidth: 4,
                pointRadius: 0,
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            },
            {
                label: 'Limite Inferior',
                type: 'line',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'red',
                data: [30, 30, 30, 30, 30, 30],
                borderWidth: 4,
                pointRadius: 0,
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            }]
           }

           graficoProdAnalistaEquipe.data = newDataEsteira
           graficoProdAnalistaEquipe.update()

           selectAnalista.addEventListener("change", function() {
               selectedOptionAnalista = this.value
               let newDataAnalista

               if(selectedOptionAnalista == "Ana Carolina Santos") {
                   newDataAnalista = {
                       labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                       datasets: [{
                           label: 'Esteira',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'rgba(75, 192, 192, 1)',
                           data: [74, 85, 30, 60, 83, 93],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       }, 
                       {
                           label: 'Analista',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'yellow',
                           data: [12, 20, 45, 22, 40, 60],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       },{
                        label: 'Limite Superior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: '#081c4c',
                        data: [93, 93, 93, 93, 93, 93],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    },
                    {
                        label: 'Limite Inferior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'red',
                        data: [12, 12, 12, 12, 12, 12],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    }]
                   }
               } else if(selectedOptionAnalista == "Pedro Almeida") {
                   newDataAnalista = {
                       labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                       datasets: [{
                           label: 'Esteira',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'rgba(75, 192, 192, 1)',
                           data: [74, 85, 30, 60, 83, 93],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       }, 
                       {
                           label: 'Analista',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'yellow',
                           data: [28, 78, 22, 36, 65, 11],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       },{
                        label: 'Limite Superior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: '#081c4c',
                        data: [93, 93, 93, 93, 93, 93],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    },
                    {
                        label: 'Limite Inferior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'red',
                        data: [11, 11, 11, 11, 11, 11],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    }]
                   }
               } else {
                    newDataAnalista = {
                        labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                        datasets: [{
                            label: 'Esteira',
                            backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                            borderColor: 'rgba(75, 192, 192, 1)',
                            data: [74, 85, 30, 60, 83, 93],
                            fill: false,
                            borderWidth: 2,
                            pointRadius: 0,
                        },{
                         label: 'Limite Superior',
                         type: 'line',
                         backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                         borderColor: '#081c4c',
                         data: [93, 93, 93, 93, 93, 93],
                         borderWidth: 4,
                         pointRadius: 0,
                         barPercentage: 0.4,
                         datalabels: {
                             display: false // Remove os rótulos de dados para este conjunto de dados
                         }
                     },
                     {
                         label: 'Limite Inferior',
                         type: 'line',
                         backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                         borderColor: 'red',
                         data: [30, 30, 30, 30, 30, 30],
                         borderWidth: 4,
                         pointRadius: 0,
                         barPercentage: 0.4,
                         datalabels: {
                             display: false // Remove os rótulos de dados para este conjunto de dados
                         }
                     }]
                    }         
               }

               graficoProdAnalistaEquipe.data = newDataAnalista
               graficoProdAnalistaEquipe.update()
           })
       } else if(selectedOption == "Investimentos") {
           selectAnalista.innerHTML = `
               <option value='Analistas'>Analistas</option>
               <option value='Larissa Costa'>Larissa Costa</option>
               <option value='Marcos Pereira'>Marcos Pereira</option>
           `

           newDataEsteira = {
               labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
               datasets: [{
                   label: 'Esteira',
                   backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                   borderColor: 'rgba(75, 192, 192, 1)',
                   data: [48, 35, 83, 34, 24, 57],
                   fill: false,
                   borderWidth: 2,
                   pointRadius: 0,
               },{
                label: 'Limite Superior',
                type: 'line',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: '#081c4c',
                data: [83, 83, 83, 83, 83, 83],
                borderWidth: 4,
                pointRadius: 0,
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            },
            {
                label: 'Limite Inferior',
                type: 'line',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'red',
                data: [24, 24, 24, 24, 24, 24],
                borderWidth: 4,
                pointRadius: 0,
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            }]
           }

           graficoProdAnalistaEquipe.data = newDataEsteira
           graficoProdAnalistaEquipe.update()

           selectAnalista.addEventListener("change", function() {
               selectedOptionAnalista = this.value
               let newDataAnalista

               if(selectedOptionAnalista == "Larissa Costa") {
                   newDataAnalista = {
                       labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                       datasets: [{
                           label: 'Esteira',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'rgba(75, 192, 192, 1)',
                           data: [48, 35, 83, 34, 24, 57],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       }, 
                       {
                           label: 'Analista',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'yellow',
                           data: [12, 20, 45, 22, 40, 60],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       },{
                        label: 'Limite Superior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: '#081c4c',
                        data: [83, 83, 83, 83, 83, 83],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    },
                    {
                        label: 'Limite Inferior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'red',
                        data: [12, 12, 12, 12, 12, 12],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    }]
                   }
               } else if(selectedOptionAnalista == "Marcos Pereira") {
                   newDataAnalista = {
                       labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                       datasets: [{
                           label: 'Esteira',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'rgba(75, 192, 192, 1)',
                           data: [48, 35, 83, 34, 24, 57],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       }, 
                       {
                           label: 'Analista',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'yellow',
                           data: [33, 45, 32, 55, 21, 45],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       },{
                        label: 'Limite Superior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: '#081c4c',
                        data: [83, 83, 83, 83, 83, 83],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    },
                    {
                        label: 'Limite Inferior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'red',
                        data: [21, 21, 21, 21, 21, 21],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    }]
                   }
               } else {
                newDataAnalista = {
                    labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                    datasets: [{
                        label: 'Esteira',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'rgba(75, 192, 192, 1)',
                        data: [48, 35, 83, 34, 24, 57],
                        fill: false,
                        borderWidth: 2,
                        pointRadius: 0,
                    },{
                     label: 'Limite Superior',
                     type: 'line',
                     backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                     borderColor: '#081c4c',
                     data: [83, 83, 83, 83, 83, 83],
                     borderWidth: 4,
                     pointRadius: 0,
                     barPercentage: 0.4,
                     datalabels: {
                         display: false // Remove os rótulos de dados para este conjunto de dados
                     }
                 },
                 {
                     label: 'Limite Inferior',
                     type: 'line',
                     backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                     borderColor: 'red',
                     data: [24, 24, 24, 24, 24, 24],
                     borderWidth: 4,
                     pointRadius: 0,
                     barPercentage: 0.4,
                     datalabels: {
                         display: false // Remove os rótulos de dados para este conjunto de dados
                     }
                 }]
                }
     
               }

               graficoProdAnalistaEquipe.data = newDataAnalista
               graficoProdAnalistaEquipe.update()
           })
       } else if(selectedOption == "Consórcios") {
           selectAnalista.innerHTML = `
               <option value='Analistas'>Analistas</option>
               <option value='Gabriela Lima'>Gabriela Lima</option>
               <option value='Lucas Silva'>Lucas Silva</option>
           `

           newDataEsteira = {
               labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
               datasets: [{
                   label: 'Esteira',
                   backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                   borderColor: 'rgba(75, 192, 192, 1)',
                   data: [65, 23, 95, 34, 56, 43],
                   fill: false,
                   borderWidth: 2,
                   pointRadius: 0,
               },{
                label: 'Limite Superior',
                type: 'line',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: '#081c4c',
                data: [95, 95, 95, 95, 95, 95],
                borderWidth: 4,
                pointRadius: 0,
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            },
            {
                label: 'Limite Inferior',
                type: 'line',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'red',
                data: [23, 23, 23, 23, 23, 23],
                borderWidth: 4,
                pointRadius: 0,
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            }]
           }

           graficoProdAnalistaEquipe.data = newDataEsteira
           graficoProdAnalistaEquipe.update()

           selectAnalista.addEventListener("change", function() {
               selectedOptionAnalista = this.value
               let newDataAnalista

               if(selectedOptionAnalista == "Gabriela Lima") {
                   newDataAnalista = {
                       labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                       datasets: [{
                           label: 'Esteira',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'rgba(75, 192, 192, 1)',
                           data: [65, 23, 95, 34, 56, 43],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       }, 
                       {
                           label: 'Analista',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'yellow',
                           data: [25, 35, 73, 46, 62, 80],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       },{
                        label: 'Limite Superior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: '#081c4c',
                        data: [95, 95, 95, 95, 95, 95],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    },
                    {
                        label: 'Limite Inferior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'red',
                        data: [23, 23, 23, 23, 23, 23],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    }]
                   }
               } else if(selectedOptionAnalista == "Lucas Silva") {
                   newDataAnalista = {
                       labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                       datasets: [{
                           label: 'Esteira',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'rgba(75, 192, 192, 1)',
                           data: [65, 23, 95, 34, 56, 43],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       }, 
                       {
                           label: 'Analista',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'yellow',
                           data: [44, 32, 23, 56, 83, 45],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       },{
                        label: 'Limite Superior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: '#081c4c',
                        data: [95, 95, 95, 95, 95, 95],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    },
                    {
                        label: 'Limite Inferior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'red',
                        data: [23, 23, 23, 23, 23, 23],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    }]
                   }
               } else {
                newDataAnalista = {
                    labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                    datasets: [{
                        label: 'Esteira',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'rgba(75, 192, 192, 1)',
                        data: [65, 23, 95, 34, 56, 43],
                        fill: false,
                        borderWidth: 2,
                        pointRadius: 0,
                    },{
                     label: 'Limite Superior',
                     type: 'line',
                     backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                     borderColor: '#081c4c',
                     data: [95, 95, 95, 95, 95, 95],
                     borderWidth: 4,
                     pointRadius: 0,
                     barPercentage: 0.4,
                     datalabels: {
                         display: false // Remove os rótulos de dados para este conjunto de dados
                     }
                 },
                 {
                     label: 'Limite Inferior',
                     type: 'line',
                     backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                     borderColor: 'red',
                     data: [23, 23, 23, 23, 23, 23],
                     borderWidth: 4,
                     pointRadius: 0,
                     barPercentage: 0.4,
                     datalabels: {
                         display: false // Remove os rótulos de dados para este conjunto de dados
                     }
                 }]
                }
               }

               graficoProdAnalistaEquipe.data = newDataAnalista
               graficoProdAnalistaEquipe.update()
           })
       } else if(selectedOption == "Funcionários") {
           selectAnalista.innerHTML = `
               <option value='Analistas'>Analistas</option>
               <option value='Isabela Ferreira'>Isabela Ferreira</option>
               <option value='Bruno Oliveira'>Bruno Oliveira</option>
           `

           newDataEsteira = {
               labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
               datasets: [{
                   label: 'Esteira',
                   backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                   borderColor: 'rgba(75, 192, 192, 1)',
                   data: [98, 36, 82, 62, 45, 12],
                   fill: false,
                   borderWidth: 2,
                   pointRadius: 0,
               },{
                label: 'Limite Superior',
                type: 'line',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: '#081c4c',
                data: [98, 98, 98, 98, 98, 98],
                borderWidth: 4,
                pointRadius: 0,
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            },
            {
                label: 'Limite Inferior',
                type: 'line',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'red',
                data: [12, 12, 12, 12, 12, 12],
                borderWidth: 4,
                pointRadius: 0,
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            }]
           }

           graficoProdAnalistaEquipe.data = newDataEsteira
           graficoProdAnalistaEquipe.update()

           selectAnalista.addEventListener("change", function() {
               selectedOptionAnalista = this.value
               let newDataAnalista

               if(selectedOptionAnalista == "Isabela Ferreira") {
                   newDataAnalista = {
                       labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                       datasets: [{
                           label: 'Esteira',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'rgba(75, 192, 192, 1)',
                           data: [98, 36, 82, 62, 45, 12],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       }, 
                       {
                           label: 'Analista',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'yellow',
                           data: [44, 38, 37, 64, 26, 8],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       },{
                        label: 'Limite Superior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: '#081c4c',
                        data: [98, 98, 98, 98, 98, 98],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    },
                    {
                        label: 'Limite Inferior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'red',
                        data: [8, 8, 8, 8, 8, 8],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    }]
                   }
               } else if(selectedOptionAnalista == "Bruno Oliveira") {
                   newDataAnalista = {
                       labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                       datasets: [{
                           label: 'Esteira',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'rgba(75, 192, 192, 1)',
                           data: [98, 36, 82, 62, 45, 12],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       }, 
                       {
                           label: 'Analista',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'yellow',
                           data: [27, 83, 12, 56, 80, 31],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       },{
                        label: 'Limite Superior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: '#081c4c',
                        data: [98, 98, 98, 98, 98, 98],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    },
                    {
                        label: 'Limite Inferior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'red',
                        data: [12, 12, 12, 12, 12, 12],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    }]
                   }
               } else {
                newDataAnalista = {
                    labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                    datasets: [{
                        label: 'Esteira',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'rgba(75, 192, 192, 1)',
                        data: [98, 36, 82, 62, 45, 12],
                        fill: false,
                        borderWidth: 2,
                        pointRadius: 0,
                    },{
                     label: 'Limite Superior',
                     type: 'line',
                     backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                     borderColor: '#081c4c',
                     data: [98, 98, 98, 98, 98, 98],
                     borderWidth: 4,
                     pointRadius: 0,
                     barPercentage: 0.4,
                     datalabels: {
                         display: false // Remove os rótulos de dados para este conjunto de dados
                     }
                 },
                 {
                     label: 'Limite Inferior',
                     type: 'line',
                     backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                     borderColor: 'red',
                     data: [12, 12, 12, 12, 12, 12],
                     borderWidth: 4,
                     pointRadius: 0,
                     barPercentage: 0.4,
                     datalabels: {
                         display: false // Remove os rótulos de dados para este conjunto de dados
                     }
                 }]
                }
               }

               graficoProdAnalistaEquipe.data = newDataAnalista
               graficoProdAnalistaEquipe.update()
           })
       } else if(selectedOption == "Externas") {
           selectAnalista.innerHTML = `
           <option value='Analistas'>Analistas</option>
           <option value='Raul Oliveira'>Raul Oliveira</option>
           <option value='Lucas Madeiro'>Lucas Madeiro</option>
           `

           newDataEsteira = {
               labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
               datasets: [{
                   label: 'Esteira',
                   backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                   borderColor: 'rgba(75, 192, 192, 1)',
                   data: [34, 56, 76, 53, 34, 34],
                   fill: false,
                   borderWidth: 2,
                   pointRadius: 0,
               },{
                label: 'Limite Superior',
                type: 'line',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: '#081c4c',
                data: [76, 76, 76, 76, 76, 76],
                borderWidth: 4,
                pointRadius: 0,
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            },
            {
                label: 'Limite Inferior',
                type: 'line',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'red',
                data: [34, 34, 34, 34, 34, 34],
                borderWidth: 4,
                pointRadius: 0,
                barPercentage: 0.4,
                datalabels: {
                    display: false // Remove os rótulos de dados para este conjunto de dados
                }
            }]
           }

           graficoProdAnalistaEquipe.data = newDataEsteira
           graficoProdAnalistaEquipe.update()

           selectAnalista.addEventListener("change", function() {
               selectedOptionAnalista = this.value
               let newDataAnalista

               if(selectedOptionAnalista == "Raul Oliveira") {
                   newDataAnalista = {
                       labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                       datasets: [{
                           label: 'Esteira',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'rgba(75, 192, 192, 1)',
                           data: [34, 56, 76, 53, 34, 34],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       }, 
                       {
                           label: 'Analista',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'yellow',
                           data: [78, 21, 51, 65, 34, 29],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       },{
                        label: 'Limite Superior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: '#081c4c',
                        data: [78, 78, 78, 78, 78, 78],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    },
                    {
                        label: 'Limite Inferior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'red',
                        data: [21, 21, 21, 21, 21, 21],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    }]
                   }
               } else if(selectedOptionAnalista == "Lucas Madeiro") {
                   newDataAnalista = {
                       labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
                       datasets: [{
                           label: 'Esteira',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'rgba(75, 192, 192, 1)',
                           data: [34, 56, 76, 53, 34, 34],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       }, 
                       {
                           label: 'Analista',
                           backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                           borderColor: 'yellow',
                           data: [27, 74, 58, 96, 5, 29],
                           fill: false,
                           borderWidth: 2,
                           pointRadius: 0,
                       },{
                        label: 'Limite Superior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: '#081c4c',
                        data: [96, 96, 96, 96, 96, 96],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    },
                    {
                        label: 'Limite Inferior',
                        type: 'line',
                        backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                        borderColor: 'red',
                        data: [5, 5, 5, 5, 5, 5],
                        borderWidth: 4,
                        pointRadius: 0,
                        barPercentage: 0.4,
                        datalabels: {
                            display: false // Remove os rótulos de dados para este conjunto de dados
                        }
                    }]
                   }
               }
           })
       }
   } else {
       selectAnalista.style.backgroundColor = "lightgray"
       selectAnalista.style.color = "gray"
       selectAnalista.disabled = true
   }
})

const selectTempoHistoricoProd = document.getElementById("select-tempo-historico-produtividade")

selectTempoHistoricoProd.addEventListener("change", function() {
    let newLabel
    const optionTempo = this.value
    
    if(optionTempo == "Últimos 30 dias") {
        newLabel = ["5", "10", "15", "20", "25", "30"]
    } else if(optionTempo == "Último semestre") {
        newLabel = ["Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    } else if(optionTempo == "Último ano") {
        newLabel = ["Fev", "Abr", "Jun", "Ago", "Out", "Dez"]
    }

    if(selectEsteiras.value != "Esteiras" && selectAnalista.value == "Analistas") {
        let valoresGrafico = gerarValores()

        let newData = {
            labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Esteira',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'rgba(75, 192, 192, 1)',
                data: valoresGrafico.vetorAleatorio,
                fill: false,
                borderWidth: 2,
                pointRadius: 0,
            },{
             label: 'Limite Superior',
             type: 'line',
             backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
             borderColor: '#081c4c',
             data: valoresGrafico.vetorMaximo,
             borderWidth: 4,
             pointRadius: 0,
             barPercentage: 0.4,
             datalabels: {
                 display: false // Remove os rótulos de dados para este conjunto de dados
             }
         },
         {
             label: 'Limite Inferior',
             type: 'line',
             backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
             borderColor: 'red',
             data: valoresGrafico.vetorMinimo,
             borderWidth: 4,
             pointRadius: 0,
             barPercentage: 0.4,
             datalabels: {
                 display: false // Remove os rótulos de dados para este conjunto de dados
             }
         }]
        }

       graficoProdAnalistaEquipe.data = newData
       graficoProdAnalistaEquipe.update()
    } else {
        doisvalores = gerarDoisValores()

        newData = {
            labels: ['Jul', 'Ago', 'Ste', 'Out', 'Nov', 'Dez'],
            datasets: [{
                label: 'Esteira',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'rgba(75, 192, 192, 1)',
                data: doisvalores.vetorEsteira,
                fill: false,
                borderWidth: 2,
                pointRadius: 0,
            }, 
            {
                label: 'Analista',
                backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
                borderColor: 'yellow',
                data: doisvalores.vetorAnalista,
                fill: false,
                borderWidth: 2,
                pointRadius: 0,
            },{
             label: 'Limite Superior',
             type: 'line',
             backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
             borderColor: '#081c4c',
             data: doisvalores.vetorMaximo,
             borderWidth: 4,
             pointRadius: 0,
             barPercentage: 0.4,
             datalabels: {
                 display: false // Remove os rótulos de dados para este conjunto de dados
             }
         },
         {
             label: 'Limite Inferior',
             type: 'line',
             backgroundColor: createLinearGradientBar(graficoAnaliseEsteiraCtx, 'rgba(70,115,196,255)', 'rgba(157,195,230,255)'),
             borderColor: 'red',
             data: doisvalores.vetorMinimo,
             borderWidth: 4,
             pointRadius: 0,
             barPercentage: 0.4,
             datalabels: {
                 display: false // Remove os rótulos de dados para este conjunto de dados
             }
         }]
        }
       graficoProdAnalistaEquipe.data = newData
       graficoProdAnalistaEquipe.update()
    }


    graficoProdAnalistaEquipe.data.labels = newLabel
    graficoProdAnalistaEquipe.update()
})

function gerarValores() {
    const vetorAleatorio = Array.from({ length: 6 }, () => Math.round(Math.random() * 100));

    // Encontrar o valor máximo
    const maximo = Math.max(...vetorAleatorio);

    // Encontrar o valor mínimo
    const minimo = Math.min(...vetorAleatorio);

    const vetorMaximo = Array(6).fill(maximo);
    const vetorMinimo = Array(6).fill(minimo);

    return {
        vetorAleatorio,
        vetorMaximo,
        vetorMinimo
    }
}

function gerarDoisValores() {
    const esteira = gerarValores()
    const analista = gerarValores()

    const vetorEsteira = esteira.vetorAleatorio
    const vetorAnalista = analista.vetorAleatorio
    let vetorMaximo = []
    let vetorMinimo = []

    if(esteira.vetorMaximo[0] > analista.vetorMaximo[0])
        vetorMaximo = esteira.vetorMaximo
    else   
        vetorMaximo = analista.vetorMaximo

    
    if(esteira.vetorMinimo[0] < analista.vetorMinimo[0])
        vetorMinimo = esteira.vetorMinimo
    else   
        vetorMinimo = analista.vetorMinimo

    return {vetorEsteira, vetorAnalista, vetorMinimo, vetorMaximo}
}