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

// Ativando Paramentrizar e Inativar

var checkboxes = document.querySelectorAll('#Tabela_Regras .checkbox');
var botoes = document.querySelectorAll('#botoes_inferiores .button');

// Adiciona um ouvinte de evento de mudança a todas as checkboxes
checkboxes.forEach(function(checkbox, index) {
    if (index < 2) {
        checkbox.addEventListener('change', function() {
            // Se a checkbox estiver marcada, muda a classe do botão para 'changed', caso contrário, volta para 'original'
            if (checkbox.checked) {
                botoes[index].classList.replace('botao_inativo', 'botao_ativo');
            } else {
                botoes[index].classList.replace('botao_ativo', 'botao_inativo');
            }
        });
    }
});