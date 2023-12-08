var graf_inerentectx = document.getElementById("inerente-chart").getContext("2d");
var graf_negocioctx = document.getElementById("negocio-chart").getContext("2d");


// Primeiro Gráfico
var dados_inerente = {
    labels: ['2021', '2022', '2023'],
    datasets: [{
        // backgroundColor: createLinearGradientBar(graf_inerentectx, 'rgb(9,41,104)', 'rgba(157,195,230,255)'),
        backgroundColor: ['rgb(160,172,196)','rgb(104,124,164)', 'rgb(48,76,124)'],
        barThickness:'flex',
        maxBarThickness: 50,
        data: [80, 83, 95]
    }]
};

var config_inerente = {
    type: 'bar',
    data: dados_inerente,
    options: {
        responsive: true,
        scales: {
            x: {
                grid: {display: false},
            },

            y:{
                display: true,
                ticks: {stepSize: 20}
            }
        },

        plugins:{

            legend: {
                display: false,

                labels: {
                    font: {
                        size: 16
                    }
                }
            },
            
        }
    }
};

var graf_inerente = new Chart(graf_inerentectx, config_inerente);

// Segundo Gráfico

var dados_negocio = {
    labels: ['Unidade 1', 'Unidade 2', 'Unidade 3', 'Unidade 4', 'Unidade 5', 'Unidade 6', 'Unidade 7', 'Unidade 8', 'Unidade 9', 'Unidade 10'],
    datasets: [
        {
            label: '2020',
            backgroundColor: 'rgb(160,172,196)',
            barThickness:'flex',
            data: [63, 71, 53, 50, 58, 74, 74, 74, 63, 84]
        },
        {
            label: '2021',
            backgroundColor: 'rgb(104,124,164)',
            barThickness: 'flex',
            data: [87, 84, 76, 74, 83, 50, 78, 51, 59, 77]
        },
        {
            label: '2022',
            backgroundColor: 'rgb(48,76,124)',
            barThickness:'flex',
            data: [56, 86, 65, 69, 61, 50, 57, 79, 75, 83]
        },
    ]
};

var config_negocio = {
    type: 'bar',
    data: dados_negocio,
    options: {
        responsive: true,

        scales: {
            x:{
                grid:{display: false}
            },

            y:{
                ticks: {min: 0, max:100,stepSize: 20}
            }
        },

        plugins:{

            legend: {
                position: 'right',
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

var graf_negocio = new Chart(graf_negocioctx, config_negocio);

//Gráficos Inferiores


// Financeiro 
// const data_financeiro = {
//     labels: ['Score', 'Gray Area'],
//     datasets: [{
//     label: 'Weekly Sales',
//     data: [20, 80],
//     backgroundColor: [
//         'rgb(8,36,100)',
//         'rgb(255, 255, 255)'
//     ],
//     borderColor: [
//         'rgb(8,36,100)'
//     ],
//     borderWidth: 4,
//     cutout: "80%",
//     circumference: 180,
//     rotation: 270
//     }]
// };

// gaugeChartText bloco de plugin
// const gaugeChartText = {
//     id: 'gaugeChartText',
//     afterDatasetsDraw(chart, args, plugnOptions) {
//         const { ctx, data, chartArea: {top, bottom, left, right, width, height}, scales: {r}} = chart;

//         ctx.save();
//         const xCoor = chart.getDatasetMeta(0).data[0].x;
//         const yCoor = chart.getDatasetMeta(0).data[0].y;

//         ctx.fillRect(xCoor, yCoor, 400, 5)

        
//     }
// }

// const config_finaceiro = {
//     type: 'doughnut',
//     data: data_financeiro,
//     options: {
//         plugins: {
//             legend: {
//                 display: false
//             },
//             tooltip: {
//                 enabled: false
//             }
//         }
//     },
//     // plugins: [gaugeChartText]
// }

// var graf_financeiro = new Chart(graf_financeiroctx, config_finaceiro)


// // Juridico 
// const data_juridico = {
//     labels: ['Score', 'Gray Area'],
//     datasets: [{
//     label: 'Weekly Sales',
//     data: [35, 65],
//     backgroundColor: [
//         'rgb(8,36,100)',
//         'rgb(255, 255, 255)'
//     ],
//     borderColor: [
//         'rgb(8,36,100)'
//     ],
//     borderWidth: 5,
//     cutout: "80%",
//     circumference: 180,
//     rotation: 270
//     }]
// };

// const config_juridico = {
//     type: 'doughnut',
//     data: data_juridico,
//     options: {
//         plugins: {
//             legend: {
//                 display: false
//             },
//             tooltip: {
//                 enabled: false
//             }
//         }
//     },
//     // plugins: [gaugeChartText]
// }

// var graf_juridico = new Chart(graf_juridicoctx, config_juridico)

// // Reputacional 
// const data_reputacional = {
//     labels: ['Score', 'Gray Area'],
//     datasets: [{
//     label: 'Weekly Sales',
//     data: [90, 10],
//     backgroundColor: [
//         'rgb(8,36,100)',
//         'rgb(255, 255, 255)'
//     ],
//     borderColor: [
//         'rgb(8,36,100)'
//     ],
//     borderWidth: 5,
//     cutout: "80%",
//     circumference: 180,
//     rotation: 270
//     }]
// };

// const config_reputacional = {
//     type: 'doughnut',
//     data: data_reputacional,
//     options: {
//         plugins: {
//             legend: {
//                 display: false
//             },
//             tooltip: {
//                 enabled: false
//             }
//         }
//     },
//     // plugins: [gaugeChartText]
// }

// var graf_reputacional = new Chart(graf_reputacionalctx, config_reputacional)

// // Socioambiental 
// const data_socioambiental = {
//     labels: ['Score', 'Gray Area'],
//     datasets: [{
//     label: 'Weekly Sales',
//     data: [75, 15],
//     backgroundColor: [
//         'rgb(8,36,100)',
//         'rgb(255, 255, 255)'
//     ],
//     borderColor: [
//         'rgb(8,36,100)'
//     ],
//     borderWidth: 5,
//     cutout: "80%",
//     circumference: 180,
//     rotation: 270
//     }]
// };

// const config_socioambiental = {
//     type: 'doughnut',
//     data: data_socioambiental,
//     options: {
//         plugins: {
//             legend: {
//                 display: false
//             },
//             tooltip: {
//                 enabled: false
//             }
//         }
//     },
//     // plugins: [gaugeChartText]
// }

// var graf_socioambiental = new Chart(graf_socioambientalctx, config_socioambiental)

function createLinearGradientBar(ctx, colorInicio, colorFim) {
    var gradient = ctx.createLinearGradient(0, 100, 0, 200);
    gradient.addColorStop(0, colorInicio); // Cor no início do gradiente
    gradient.addColorStop(1, colorFim); // Cor no final do gradiente
    return gradient;
}

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