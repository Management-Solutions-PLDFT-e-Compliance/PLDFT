function downloadExcel() {
    var tabelaHtml = document.getElementById('Tabela_Regras');

    // Clona a tabela, removendo a primeira coluna
    var tabelaClone = tabelaHtml.cloneNode(true);
    var primeirasColunas = tabelaClone.querySelectorAll('th:first-child, td:first-child');
    for (var i = 0; i < primeirasColunas.length; i++) {
        primeirasColunas[i].parentNode.removeChild(primeirasColunas[i]);
    }

    // Cria um objeto Blob contendo a tabela HTML modificada
    var blob = new Blob([tabelaClone.outerHTML], {
        type: 'application/vnd.ms-excel'
    });

    // Cria um link para download
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'Regras_monitoramento.xls';

    // Adiciona o link ao documento e simula o clique
    document.body.appendChild(a);
    a.click();

    // Remove o link do documento
    document.body.removeChild(a);
}

// Ativando Parametrizar e Inativar

var checkboxes = document.querySelectorAll('#Tabela_Regras .checkbox');
var botoes = document.querySelectorAll('#botoes_inferiores button');

botoes[1].disabled = true;
botoes[2].disabled = true;

for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function() {
      var peloMenosUmaMarcada = false;
  
      for (var j = 0; j < checkboxes.length; j++) {
        if (checkboxes[j].checked) {
          peloMenosUmaMarcada = true;
          break;
        }
      }
  
      if (peloMenosUmaMarcada) {
        botoes[1].disabled = false;
        botoes[2].disabled = false;
        botoes[1].classList.replace('botao_inativo', 'botao_ativo');
        botoes[2].classList.replace('botao_inativo', 'botao_ativo');
      } else {
        botoes[1].disabled = true;
        botoes[2].disabled = true;
        botoes[1].classList.replace('botao_ativo', 'botao_inativo');
        botoes[2].classList.replace('botao_ativo', 'botao_inativo');
      }
    });
}


// Display parametrizar
function trocaPaginaParametrizar() {
    
    var tabelaFiltro = document.getElementById('pag_filtros_tabelas')
    var parametrizar = document.getElementById('pag_parametrizar')
    
    if (tabelaFiltro.style.display !== 'none'){
        
        tabelaFiltro.style.display = 'none'
        parametrizar.style.display = 'block'
    }

}


var ou = document.getElementById('filtro_OU')
var e = document.getElementById('filtro_E')

e.addEventListener('change', function () {
  if(e.checked){
    ou.checked = false
  } 
})

ou.addEventListener('change', function (){
  if(ou.checked){
    e.checked = false
  }
})


// Adicionar Condição 

var contador = 1; // Inicializa o contador

function adicionarCondicao() {
  // Cria um novo container com um ID único
  var container = document.createElement('div');
  container.id = 'container' + contador;

  // Criação da div que conterá os elementos (checkbox E e checkbox OU)
  var divFiltro = criarFiltroElemento('e', 'filtro_E' + contador, 'e', 'ou', 'filtro_OU' + contador, 'ou');
  var divSelect = criarFiltroElementoSelect();

  // Adiciona os elementos ao container recém-criado
  container.appendChild(divFiltro);
  container.appendChild(divSelect);

  // Adiciona o container à div com o ID "racional_filtros"
  document.getElementById('racional_filtros').appendChild(container);

  // Incrementa o contador para garantir um ID único para o próximo container
  contador++;
}
function criarFiltroElemento(id, checkboxId, labelText) {
  var div = document.createElement('div');
  div.className = 'cada_filtro'; // Alterado para 'cada_filtro'

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.style = 'width: 15px; height: 15px; margin-left: 10px;';
  checkbox.id = checkboxId;

  var label = document.createElement('label');
  label.htmlFor = 'input';
  label.innerText = labelText;

  div.appendChild(checkbox);
  div.appendChild(label);

  return div;
}

function criarFiltroElementoSelect() {
  var div = document.createElement('div');
  div.className = 'cada_filtro'; // Alterado para 'cada_filtro'

  var select1 = criarSelect('campo_regra', ['Selecionar', 'Quantidade trans.']);
  var select2 = criarSelect('operacao', ['Selecionar', '>=']);
  var select3 = criarSelect('valor', ['Selecionar', '#10']);

  div.appendChild(select1);
  div.appendChild(select2);
  div.appendChild(select3);

  return div;
}

function criarSelect(name, optionsArray) {
  var select = document.createElement('select');
  select.name = name;
  select.className = 'selection-boxes';

  for (var i = 0; i < optionsArray.length; i++) {
    var option = document.createElement('option');
    option.value = optionsArray[i];
    option.text = optionsArray[i];
    select.appendChild(option);
  }

  return select;
}


function criarFiltroElemento(checkbox1LabelText, checkbox1Id, checkbox1Value, checkbox2LabelText, checkbox2Id, checkbox2Value) {
  var div = document.createElement('div');
  div.className = 'cada_filtro';

  // Checkbox E
  var checkboxE = document.createElement('input');
  checkboxE.type = 'checkbox';
  checkboxE.style = 'width: 15px; height: 15px; margin-left: 10px;';
  checkboxE.id = checkbox1Id;
  checkboxE.value = checkbox1Value;

  var labelE = document.createElement('label');
  labelE.htmlFor = checkbox1Id;
  labelE.innerText = checkbox1LabelText;

  // Checkbox OU
  var checkboxOU = document.createElement('input');
  checkboxOU.type = 'checkbox';
  checkboxOU.style = 'margin-left: 30px; width: 15px; height: 15px;';
  checkboxOU.id = checkbox2Id;
  checkboxOU.value = checkbox2Value;

  var labelOU = document.createElement('label');
  labelOU.htmlFor = checkbox2Id;
  labelOU.innerText = checkbox2LabelText;

  // Adiciona os elementos à div
  div.appendChild(checkboxE);
  div.appendChild(labelE);
  div.appendChild(checkboxOU);
  div.appendChild(labelOU);

  return div;
}

function SalvarAtivar(){
  Swal.fire({
    title: 'Salvar e ativar',
    text: 'Regra salva e ativada com sucesso!',
    icon: 'success',
    confirmButtonText: 'Ok'
  });

  document.getElementById('pag_parametrizar').style.display = 'none'

  document.getElementById('pag_filtros_tabelas').style.display = 'block'
}


function Inativar() {
  Swal.fire({
    title: 'Salvar e ativar',
    text: 'Tem certeza que deseja inativar esta(s) regras?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não',
    closeOnCancel: true
  }).then((result) => {
    // Verifica se o botão 'Sim' foi clicado
    if (result.isConfirmed) {
        Swal.fire('Regra inativada com sucesso!', '', 'success');
    } 
    
  });
}


function VoltarTela() {
  document.getElementById('pag_parametrizar').style.display = 'none'
  document.getElementById('pag_filtros_tabelas').style.display = 'block'
}