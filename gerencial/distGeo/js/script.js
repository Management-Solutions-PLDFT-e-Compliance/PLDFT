document.addEventListener("DOMContentLoaded", function () {
    criaGraficosColunaRiscoAg();
    CriaMapaCalor();
  });

  function criaGraficosColunaRiscoAg(){
    // Iterar sobre as linhas da tabela
    document.querySelectorAll(".table5Col tbody tr").forEach(function (row) {
        // Obter a quinta célula de cada linha
        var cell = row.querySelector("td:nth-child(5)");
    
        // Criar um ID único para cada gráfico
        var chartId = "chart" + row.rowIndex;
  
        var vermelho = Math.round(Math.random() * 100);
  
        var cinza = 100 - vermelho;
    
        // Inserir uma tag canvas com o ID único
        cell.innerHTML = '<canvas id="' + chartId + '" width="50" height="50"></canvas><p>'+vermelho+'%</p>';
    
        // Obter o contexto do canvas
        var ctx = document.getElementById(chartId).getContext("2d");
    
        // Dados do gráfico Doughnut (exemplo)
  
        var data = {
          datasets: [{
            data: [vermelho, cinza],
            backgroundColor: ["red", "lightgray"],
            borderWidth: 0
          }]
        };
    
        // Configurações do gráfico
        var options = {
          responsive: false,
          legend: {
            display: false // Ocultar as legendas
          }
        };
    
        // Criar e renderizar o gráfico Doughnut
        var doughnutChart = new Chart(ctx, {
          type: "doughnut",
          data: data,
          options: options
        });
      });
  }

  //Mapa de calor

  function CriaMapaCalor(){
    
    let dadosMapaCalor = [
      {
        "id" : "BR-AC",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-AL",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-AP",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-AM",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-BA",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-CE",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-DF",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-ES",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-GO",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-MA",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-MT",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-MS",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-MG",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-PA",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-PB",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-PR",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-PE",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-PI",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-RJ",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-RN",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-RS",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-RO",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-RR",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-SC",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-SP",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-SE",
        "value" : Math.floor(Math.random()*100)
      },
      {
        "id" : "BR-TO",
        "value" : Math.floor(Math.random()*100)
      }
    ];

    // Define o local e tipo de gráfico
    let chartMapaCalor = am4core.create("graficoMapaCalor", am4maps.MapChart);


    // Atribui o 'brazilLow' como o mapa
    // Você pode optar pelo 'brazilHigh', basta alterar aqui e src do script no html
    // Também define que as partes que montam o mapa serão com base no MapPolygonSeries
    chartMapaCalor.geodata = am4geodata_brazilLow;
    let polygonSeriesMapaCalor = chartMapaCalor.series.push(new am4maps.MapPolygonSeries());
    polygonSeriesMapaCalor.data = dadosMapaCalor;
    polygonSeriesMapaCalor.useGeodata = true;


    // Preenche os dados para fazer o mapa de calor
    // Faremos com que os menores valores sejam verdes e maiores sejam vermelhos
    polygonSeriesMapaCalor.heatRules.push({
    property: "fill",
    target: polygonSeriesMapaCalor.mapPolygons.template,
    min: am4core.color("#99ff00"),
    max: am4core.color("#FF0000")
    });


    // Define as legendas, posição e cores.
    let heatLegend = chartMapaCalor.createChild(am4maps.HeatLegend);
    heatLegend.series = polygonSeriesMapaCalor;
    heatLegend.align = "right";
    heatLegend.width = am4core.percent(25);
    heatLegend.marginRight = am4core.percent(4);
    heatLegend.marginBottom = am4core.percent(2);
    heatLegend.minValue = 0;
    heatLegend.maxValue = 100;
    heatLegend.valign = "bottom";
    heatLegend.numberFormatter = new am4core.NumberFormatter();
    heatLegend.numberFormatter.numberFormat = "#.#'%'";


    // Configuras os tooltips (texto ao passar o mouse)
    let polygonTemplate = polygonSeriesMapaCalor.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}%";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;


    // Muda a cor do estado ao passar o mouse
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("grey").brighten(-0.5);

    polygonTemplate.events.on("over", function(ev) {
      if (!isNaN(ev.target.dataItem.value)) {
        heatLegend.valueAxis.showTooltipAt(ev.target.dataItem.value)
      }
      else {
        heatLegend.valueAxis.hideTooltip();
      }
    });
    
    polygonTemplate.events.on("out", function(ev) {
      heatLegend.valueAxis.hideTooltip();
    });
  }