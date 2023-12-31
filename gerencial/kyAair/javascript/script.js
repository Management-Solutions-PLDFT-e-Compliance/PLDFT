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



  function atualizarTabela() {
    var selectElement = document.getElementById("seletorTabela");
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;
    var tabelaTesteDiv = document.getElementById("tabelaTeste");

    // Lógica para decidir qual tabela deve ser exibida com base na opção selecionada
    var tabelaHTML = "";
    switch (selectedOption) {
        case "Clientes":
          tabelaHTML = `<table>
          <thead>
            <tr class="headerTable">
              <th></th>
              <th>Digital PF</th>
              <th>Digital PJ</th>
              <th>Alta Renda PF</th>
              <th>Alta Renda PJ</th>
              <th>Varejo</th>
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
        </table>`;
          break;
        
        case "Parceiros":
          tabelaHTML = `<table>
        <thead>
          <tr class="headerTable">
            <th></th>
            <th>Correspondentes <br>Bancários</th>
            <th>Leiloeiros</th>
            <th>Parceiros <br>Internacionais</th>
            <th>Chave Swift</th>
            
          </tr>
        </thead>
        <tbody>
          <tr class="riscoMuitoAlto">
            <td class="headerTable">Muito Alto</td>
            <td>12</td>
            <td>1</td>
            <td>123</td>
            <td>98</td>
            
          </tr>
          <tr class="riscoAlto">
            <td class="headerTable">Risco Alto</td>
            <td>2333</td>
            <td>1232</td>
            <td>3257</td>
            <td>743</td>
            
          </tr>
          <tr class="riscoModerado">
            <td class="headerTable">Risco Moderado</td>
            <td>6444</td>
            <td>90334</td>
            <td>72578</td>
            <td>3486</td>
            
          </tr>
          <tr class="riscoBaixo">
            <td class="headerTable">Risco Baixo</td>
            <td>19324</td>
            <td>40553</td>
            <td>32532</td>
            <td>280</td>
            
          </tr>
          <tr class="riscoMuitoBaixo">
            <td class="headerTable">Risco Muito Baixo</td>
            <td>205</td>
            <td>2944</td>
            <td>46643</td>
            <td>967</td>
            
          </tr>
        </tbody>
      </table>`;
          break;

        case "Funcionários":
            tabelaHTML = `<table>
            <thead>
              <tr class="headerTable">
                <th></th>
                <th>Comercial</th>
                <th>Riscos</th>
                <th>Tecnologia</th>
                <th>Auditoria</th>
                <th>Tesouraria</th>
              </tr>
            </thead>
            <tbody>
              <tr class="riscoMuitoAlto">
                <td class="headerTable">Muito Alto</td>
                <td>300</td>
                <td>1900</td>
                <td>2000</td>
                <td>500</td>
                <td>300</td>
              </tr>
              <tr class="riscoAlto">
                <td class="headerTable">Risco Alto</td>
                <td>600</td>
                <td>550</td>
                <td>650</td>
                <td>700</td>
                <td>500</td>
              </tr>
              <tr class="riscoModerado">
                <td class="headerTable">Risco Moderado</td>
                <td>400</td>
                <td>300</td>
                <td>500</td>
                <td>450</td>
                <td>350</td>
              </tr>
              <tr class="riscoBaixo">
                <td class="headerTable">Risco Baixo</td>
                <td>100</td>
                <td>500</td>
                <td>50</td>
                <td>50</td>
                <td>300</td>
              </tr>
              <tr class="riscoMuitoBaixo">
                <td class="headerTable">Risco Muito Baixo</td>
                <td>1200</td>
                <td>3800</td>
                <td>5100</td>
                <td>1900</td>
                <td>1000</td>
              </tr>
            </tbody>
          </table>`;
            break;
        case "Produtos":
            tabelaHTML = `<table>
            <thead>
              <tr class="headerTable">
                <th>
                <th>Empréstimos</th>
                <th>Contas</th>
                <th>Investimentos</th>
                <th>Câmbio</th>
                <th>Seguros</th>
              </tr>
            </thead>
            <tbody>
              <tr class="riscoMuitoAlto">
                <td class="headerTable">Muito Alto</td>
                <td>300</td>
                <td>1900</td>
                <td>2000</td>
                <td>500</td>
                <td>300</td>
              </tr>
              <tr class="riscoAlto">
                <td class="headerTable">Risco Alto</td>
                <td>600</td>
                <td>550</td>
                <td>650</td>
                <td>700</td>
                <td>400</td>
              </tr>
              <tr class="riscoModerado">
                <td class="headerTable">Risco Moderado</td>
                <td>400</td>
                <td>300</td>
                <td>500</td>
                <td>450</td>
                <td>550</td>
              </tr>
              <tr class="riscoBaixo">
                <td class="headerTable">Risco Baixo</td>
                <td>100</td>
                <td>500</td>
                <td>50</td>
                <td>50</td>
                <td>200</td>
              </tr>
              <tr class="riscoMuitoBaixo">
                <td class="headerTable">Risco Muito Baixo</td>
                <td>1200</td>
                <td>3800</td>
                <td>5100</td>
                <td>1900</td>
                <td>450</td>
              </tr>
            </tbody>
          </table>`;
            break;
        // Adicione casos para outras opções conforme necessário
        default:
            tabelaHTML = `<table>
            <thead>
              <tr class="headerTable">
                <th></th>
                <th>Comercial</th>
                <th>Riscos</th>
                <th>Tecnologia</th>
                <th>Auditoria</th>
                <th>Tesouraria</th>
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
          </table>`;
    }

    // Atualiza a div com a nova tabela
    tabelaTesteDiv.innerHTML = tabelaHTML;
}

// Chama a função uma vez para exibir a tabela inicial
atualizarTabela();