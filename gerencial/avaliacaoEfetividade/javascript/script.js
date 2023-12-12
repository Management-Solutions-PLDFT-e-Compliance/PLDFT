var data = {
    labels: ['Muito alto', 'Alto', 'Moderado', 'Baixo', 'Muito baixo'],
    datasets: [{
      data: [13, 8, 6, 7, 50],
      backgroundColor: [
        'rgba(252, 148, 148, 0.7)',     // Dado 5 (Vermelho)
        'rgba(252, 196, 116, 0.7)',    // Dado 4 (Laranja)
        'rgba(252, 252, 148, 0.7)',    // Dado 3 (Amarelo)
        'rgba(148, 212, 84, 0.7)',      // Dado 2 (Verde escuro)
        'rgba(132, 252, 132, 0.7)'   // Dado 1 (Verde claro)
      ],
      borderWidth: 1
    }]
  };

  // Configurações do gráfico
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend:{
            position: 'bottom',
            display: false,
        }
    }
    
  };

  // Obtém o contexto do canvas
  var ctx = document.getElementById('doughnutChart').getContext('2d');

  // Cria o gráfico Doughnut
  var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
  });


var data = {
    labels: ['Muito alto', 'Alto', 'Moderado', 'Baixo', 'Muito baixo'],
    datasets: [{
      data: [58, 39, 45, 39, 14],
      backgroundColor: [
        'rgba(252, 148, 148, 0.7)',     // Dado 5 (Vermelho)
        'rgba(252, 196, 116, 0.7)',    // Dado 4 (Laranja)
        'rgba(252, 252, 148, 0.7)',    // Dado 3 (Amarelo)
        'rgba(148, 212, 84, 0.7)',      // Dado 2 (Verde escuro)
        'rgba(132, 252, 132, 0.7)'   // Dado 1 (Verde claro)
      ],
      borderWidth: 1
    }]
  };

  // Configurações do gráfico
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend:{
            position: 'bottom',
            display: false,
        },
    }
  };

  // Obtém o contexto do canvas
  var ctx = document.getElementById('doughnutChart2').getContext('2d');

  // Cria o gráfico Doughnut
  var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
  });
var data = {
    labels: ['Muito alto', 'Alto', 'Moderado', 'Baixo', 'Muito baixo'],
    datasets: [{
      data: [5, 3, 2, 1, 11],
      backgroundColor: [
        'rgba(252, 148, 148, 0.7)',     // Dado 5 (Vermelho)
        'rgba(252, 196, 116, 0.7)',    // Dado 4 (Laranja)
        'rgba(252, 252, 148, 0.7)',    // Dado 3 (Amarelo)
        'rgba(148, 212, 84, 0.7)',      // Dado 2 (Verde escuro)
        'rgba(132, 252, 132, 0.7)'   // Dado 1 (Verde claro)
      ],
      borderWidth: 1
    }]
  };

  // Configurações do gráfico
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend:{
            position: 'bottom',
            display: false,
        }
    }
  };

  // Obtém o contexto do canvas
  var ctx = document.getElementById('doughnutChart3').getContext('2d');

  // Cria o gráfico Doughnut
  var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
  });
var data = {
    labels: ['Muito alto', 'Alto', 'Moderado', 'Baixo', 'Muito baixo'],
    datasets: [{
      data: [5, 3, 2, 1, 11],
      backgroundColor: [
        'rgba(252, 148, 148, 0.7)',     // Dado 5 (Vermelho)
        'rgba(252, 196, 116, 0.7)',    // Dado 4 (Laranja)
        'rgba(252, 252, 148, 0.7)',    // Dado 3 (Amarelo)
        'rgba(148, 212, 84, 0.7)',      // Dado 2 (Verde escuro)
        'rgba(132, 252, 132, 0.7)'   // Dado 1 (Verde claro)
      ],
      borderWidth: 1
    }]
  };

  // Configurações do gráfico
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend:{
            position: 'bottom',
            display: false,
        }
    }
  };

  // Obtém o contexto do canvas
  var ctx = document.getElementById('doughnutChart4').getContext('2d');

  // Cria o gráfico Doughnut
  var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
  });
var data = {
    labels: ['Muito alto', 'Alto', 'Moderado', 'Baixo', 'Muito baixo'],
    datasets: [{
      data: [158, 245, 75, 146, 29],
      backgroundColor: [
        'rgba(252, 148, 148, 0.7)',     // Dado 5 (Vermelho)
        'rgba(252, 196, 116, 0.7)',    // Dado 4 (Laranja)
        'rgba(252, 252, 148, 0.7)',    // Dado 3 (Amarelo)
        'rgba(148, 212, 84, 0.7)',      // Dado 2 (Verde escuro)
        'rgba(132, 252, 132, 0.7)'   // Dado 1 (Verde claro)
      ],
      borderWidth: 1
    }]
  };

  // Configurações do gráfico
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend:{
            position: 'bottom',
            display: false,
        }
    }
  };

  // Obtém o contexto do canvas
  var ctx = document.getElementById('doughnutChart5').getContext('2d');

  // Cria o gráfico Doughnut
  var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
  });

var select = document.getElementById("perfilSelect");
var tabela = document.getElementsByTagName("table");

if(document.getElementById("perfilSelect").value == "Funcionarios"){
  console.log("Funcionou");
  tabela.innerHTML = `<table>
  <thead>
    <tr class="headerTable">
      <th></th>
      <th>TESTEEEEEEEEE</th>
      <th>Segmento 2</th>
      <th>Segmento 3</th>
      <th>Segmento 4</th>
      <th>Segmento 5</th>
    </tr>
  </thead>
  <tbody>
    <tr class="riscoMuitoAlto">
      <td class="headerTable">Muito Alto</td>
      <td>12</td>
      <td>1</td>
      <td>123</td>
      <td>98</td>
      <td>5</td>
    </tr>
    <tr class="riscoAlto">
      <td class="headerTable">Risco Alto</td>
      <td>2333</td>
      <td>1232</td>
      <td>3257</td>
      <td>743</td>
      <td>789</td>
    </tr>
    <tr class="riscoModerado">
      <td class="headerTable">Risco Moderado</td>
      <td>6444</td>
      <td>90334</td>
      <td>72578</td>
      <td>3486</td>
      <td>142</td>
    </tr>
    <tr class="riscoBaixo">
      <td class="headerTable">Risco Baixo</td>
      <td>19324</td>
      <td>40553</td>
      <td>32532</td>
      <td>280</td>
      <td>236</td>
    </tr>
    <tr class="riscoMuitoBaixo">
      <td class="headerTable">Risco Muito Baixo</td>
      <td>205</td>
      <td>2944</td>
      <td>46643</td>
      <td>967</td>
      <td>24</td>
    </tr>
  </tbody>
</table>`
}

  // incluirBotao.addEventListener('click', function () {
  //   var regulador = document.getElementById('Regulador').checked;
  //   var descricao = document.getElementById('Descrição').value;
  //   var fonte = document.getElementById('Fonte').value;
  //   var periodicidade = document.getElementById('Periodicidade').value;
  //   let configPreTriagem = document.getElementById('padraoCheckbox').checked;
  
  //   let valorRegulador = regulador ? 'Regulador' : 'Outro';
  
  //   let valorConfig = configPreTriagem ? 'Configuração padrão' : 'Configuração customizada';
  
  //   var tabela = document.querySelector('.tableVariavesCapturaParams tbody');
  
  //   tabela.innerHTML = tabela.innerHTML + 
  //   ` <tr>
  //     <td>0017</td>
  //     <td>${valorRegulador}</td>
  //     <td>${descricao}</td>
  //     <td>${fonte}</td>
  //     <td>${periodicidade}</td>
  //     <td>${valorConfig}</td>
  //     <td class="tableButton"><button class="botaoEngrenagemLixeira"><img src="./assets/icons/engrenagem-novo-2.png" alt="Descrição da Imagem" height="30px" width="30px"><button class="botaoEngrenagemLixeira"><img src="./assets/icons/lixo-novo-2.png" alt="Descrição da Imagem" height="25px" width="25px"></button></td>
  //     </tr>`;
  