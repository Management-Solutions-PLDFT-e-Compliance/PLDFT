document.addEventListener("DOMContentLoaded", function () {
    criaGraficosColunaRiscoAg();
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