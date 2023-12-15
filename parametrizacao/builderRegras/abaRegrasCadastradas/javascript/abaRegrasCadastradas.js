function downloadExcel() {
    var tabelaHtml = document.getElementById('Tabela_Regras').outerHTML;

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
    a.download = 'tabela_excel.xls';

    // Adiciona o link ao documento e simula o clique
    document.body.appendChild(a);
    a.click();

    // Remove o link do documento
    document.body.removeChild(a);
}