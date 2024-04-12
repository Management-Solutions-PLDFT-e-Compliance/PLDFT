document.addEventListener("DOMContentLoaded", function() {
  // Adiciona o ouvinte de evento ao botão
  document.querySelector(".adicionar").addEventListener("click", adicionarCondicao);

  function adicionarCondicao() {
    // Seleciona a div camposRegras
    var camposRegrasDiv = document.querySelector(".camposRegras");

    // Cria um novo div para a nova condição
    var novaCondicaoDiv = document.createElement("div");
    var novaCondicaoDiv2 = document.createElement("div");

    // Adiciona inputs e labels à nova div
    var checkbox1 = document.createElement("input");
    checkbox1.type = "checkbox";

    var label1 = document.createElement("label");
    label1.htmlFor = "";
    label1.textContent = "e";

    var checkbox2 = document.createElement("input");
    checkbox2.type = "checkbox";

    var label2 = document.createElement("label");
    label2.htmlFor = "";
    label2.textContent = "ou";

    novaCondicaoDiv.appendChild(checkbox1);
    novaCondicaoDiv.appendChild(label1);
    novaCondicaoDiv.appendChild(checkbox2);
    novaCondicaoDiv.appendChild(label2);

    // Adiciona selects à nova div
    for (var i = 0; i < 3; i++) {
      var select = document.createElement("select");
      var options = [];

      switch(i) {
        case 0:
          options = ["", "Valor transf.", "Quantidade transf.", "Renda"];
          break;
        case 1:
          options = ["", ">", ">=", "<", "<="];
          break;
        case 2:
          options = ["", "5.000", "50.000", "150.000", "500.000"];
          break;
        default:
          break;
      }

      for (var j = 0; j < options.length; j++) {
        var option = document.createElement("option");
        option.value = options[j];
        option.text = options[j];
        select.appendChild(option);
      }

      novaCondicaoDiv2.appendChild(select);
    }

    // Adiciona a nova div à div camposRegras
    camposRegrasDiv.appendChild(novaCondicaoDiv);
    camposRegrasDiv.appendChild(novaCondicaoDiv2);
  }
});

document.getElementById('label_codigo_regra').onclick = function() {
  document.getElementById('codigo_regra').value = "00018";
  document.getElementById('nome_regra').value = "Câmbio / renda 2";
};

if (document.getElementById("salvar")) {
  let botaoSalvar = document.getElementById("salvar");

  botaoSalvar.addEventListener('click', function () {
    Swal.fire({
      icon: 'success',
      title: 'Nova regra salva com sucesso!'
    }).then(function () {
      // Redirecionar para "../abaRegrasCadastradas/abaRegrasCadastradas.html?executarFuncao=true"
      window.location.href = '../abaRegrasCadastradas/abaRegrasCadastradas.html?executarFuncao=true';
    });
  });
};

         
// incluirBotao.addEventListener('click', function () {
  // var tabela = document.querySelector('.tabelaRegras tbody');

  // tabela.innerHTML = tabela.innerHTML + 
  // `<tr>
  // <td><input type="checkbox"></td>
  // <td>00018</td>
  // <td>Câmbio / renda 2</td>
  // <td>PF/PJ</td>
  // <td>Câmbio</td>
  // <td>BRL</td>
  // <td>>50.000 ou >#10...</td>
  // <td>Diário</td>
  // <td>Ativo</td>
  // </tr>`;

//   document.getElementById('Regulador').checked = false;
//   document.getElementById('Descrição').value = '';
//   document.getElementById('Fonte').value = '';
//   document.getElementById('Periodicidade').value = '';
  
//   document.getElementById('Outro').checked = false;
//   document.getElementById('Armazenar').value = '';
//   document.getElementById('Horário').value ='';
// )};