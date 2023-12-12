document.addEventListener('DOMContentLoaded', function () {
    atualizarSelectComunicCoaf();
});

function atualizarValoresCasosCoaf() {

    // Obtém todos os elementos com a classe "elem1" e "elem2"
    var elem1Elements = document.querySelectorAll('.blocoSuperior .card1 .conteudo .conteinerContadores .contador .elem1');
    var elem2Elements = document.querySelectorAll('.blocoSuperior .card1 .conteudo .conteinerContadores .contador .elem2');

    elem1Elements.forEach(function(elem) {
        var value = Math.round(Math.random() * 30);
        elem.textContent = value;
      });
  
    elem2Elements.forEach(function(elem) {
    var value = Math.round(Math.random() * 5);
    elem.textContent = "(" + value + ")";
    });
  }

  function atualizarValoresNumOficios() {

    // Obtém todos os elementos com a classe "elem1" e "elem2"
    var elem1Elements = document.querySelectorAll('.blocoSuperior .card4 .conteudo .conteinerContadores .contador .elem1');

    elem1Elements.forEach(function(elem) {
        var value = Math.round(Math.random() * 30);
        elem.textContent = value;
      });
  }


  var ctxNovosRelRec = document.getElementById('novosRelRec').getContext('2d');

  var ctxComunicCoaf = document.getElementById('comunicCoaf').getContext('2d');

  var dataNovosRelRec = {
    labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun'],
    datasets: [{
        label: 'Relacionamentos Recusados',
        backgroundColor: 'rgb(9,41,104)',
        borderWidth: 1,
        data: [3, 5, 4, 2, 6, 5],
        barPercentage: 0.5
    }]
};

var dataComunicCoaf = {
    labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun'],
    datasets: [{
        label: 'Objetivas',
        data: [255, 360, 365, 252, 284, 313],
        backgroundColor: 'rgb(150,187,220)',
        fill: 'start'
    },{
        label: 'Subjetivas',
        data: [200, 270, 280, 180, 220, 230],
        backgroundColor: 'rgb(222,235,247)',
        fill: 'start'
    }]
  }

  

var optionsNovosRelRec = {
    scales: {
        y: {
            display: false,
            beginAtZero: true,
            max: 8,
            grid: {
                display: true // Remove a grade do eixo Y
            }
        },
        x: {
            beginAtZero: true,
            grid: {
                display: false
            }
        }
        
    },
    plugins: {
        legend: {
            position: 'right', // Coloca a legenda à direita do gráfico
            display: false
        },

        datalabels: {
            anchor: 'end',
            align: 'end',
            color: 'black',
            font: {
                size: 20
            }
        },
        
    },
};

var optionsComunicCoaf = {
    scales: {
        y: {
          stacked: true,
          max: 800,
          display: false,
          grid: {
            display: false // Remove a grade do eixo Y
            }
        },

        x: {
            grid: {
              display: false // Remove a grade do eixo Y
              }
          }
      },
      plugins: {
        filler: {
          propagate: false
        },
        'samples-filler-analyser': {
          target: 'chart-analyser'
        },

        legend: {
            position: 'bottom', // Coloca a legenda à direita do gráfico
            display: true
        },
        datalabels: {
            anchor: 'end',
            align: 'end',
            color: 'black',
            font: {
                size: 13
            }
        }
      },
      interaction: {
        intersect: false,
      },
  };


Chart.register(ChartDataLabels);

var NovosRelRec = new Chart(ctxNovosRelRec, {
    type: 'bar',
    data: dataNovosRelRec,
    options: optionsNovosRelRec
});

var ComunicCoaf = new Chart(ctxComunicCoaf, {
    type: 'line',
    data: dataComunicCoaf,
    options: optionsComunicCoaf
});


function atualizaGrafNovosRelRec(){
    const selectedOption = document.getElementById('selectNovosRelRec').value;

    // Atualizar os dados do gráfico com base na opção selecionada
    switch (selectedOption) {
        case 'PJ':
            NovosRelRec.data.datasets[0].data = [3, 5, 4, 2, 6, 5];
            break;
        case 'PF':
            NovosRelRec.data.datasets[0].data = generateRandomArray(1, 7, 6);
            break;
        default:
            break;
    }

    NovosRelRec.update();
  }


  function generateRandomArray(min, max, length) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
    }
    return randomArray;
  }



  function atualizarSelectComunicCoaf() {
    var checkboxes = document.querySelectorAll('.blocoCheckBox input[type="checkbox"]');
    var select = document.getElementById('selReguladorComCoaf');

    // Desabilitar o select se nenhum checkbox estiver selecionado
    var algumCheckboxSelecionado = Array.from(checkboxes).some(function (checkbox) {
      return checkbox.checked;
    });

    select.disabled = !algumCheckboxSelecionado;

    // Desmarcar outros checkboxes se algum estiver selecionado
    if (algumCheckboxSelecionado) {
      checkboxes.forEach(function (checkbox) {
        if (!checkbox.checked) {
          checkbox.disabled = true;
        }
      });
    } else {
      checkboxes.forEach(function (checkbox) {
        checkbox.disabled = false;
      });
    }
  }

  function atualizarGraficoComunicCoaf() {
    var labels;
    var data;

    if (document.getElementById('chkUltAno').checked) {
      labels = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
      data = {
        datasets: [
          { data: generateRandomArray(180, 365, 12) },
          { data: generateRandomArray(180, 365, 12) }
        ]
      };
    } else if (document.getElementById('chkUltSem').checked) {
      labels = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun'];
      data = {
        datasets: [
          { data: generateRandomArray(180, 365, 6) },
          { data: generateRandomArray(180, 365, 6) }
        ]
      };
    } else if (document.getElementById('chkUltMes').checked) {
      labels = Array.from({ length: 30 }, (_, i) => i + 1);
      data = {
        datasets: [
          { data: generateRandomArray(180, 365, 30) },
          { data: generateRandomArray(180, 365, 30) }
        ]
      };
    }

    ComunicCoaf.data.labels = labels;
    ComunicCoaf.data.datasets[0].data = data.datasets[0].data;
    ComunicCoaf.data.datasets[1].data = data.datasets[1].data;

    ComunicCoaf.update(); // Atualizar o gráfico
  }