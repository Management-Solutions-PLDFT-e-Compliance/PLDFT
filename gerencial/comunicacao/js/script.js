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

  var dataNovosRelRec = {
    labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun'],
    datasets: [{
        label: 'Valores das Barras',
        backgroundColor: 'rgb(9,41,104)',
        borderWidth: 1,
        data: [3, 5, 4, 2, 6, 5],
        barPercentage: 0.5
    }]
};

var optionsNovosRelRec = {
    scales: {
        y: {
            display: false,
            beginAtZero: true,
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


Chart.register(ChartDataLabels);

var NovosRelRec = new Chart(ctxNovosRelRec, {
    type: 'bar',
    data: dataNovosRelRec,
    options: optionsNovosRelRec
});