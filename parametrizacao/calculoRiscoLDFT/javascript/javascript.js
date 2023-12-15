const cliente = document.getElementById("cliente")
const telaVariaveisAtuais = document.getElementById("visualização-das-variaveis-atuais")
const telaCenariosListaPonderacoes = document.getElementById("cenarios-lista-ponderacoes")
const telaAdicionarVariavel = document.getElementById("adicionar-variavel")
const adicionarVariavelBtn = document.getElementById("adicionar-variavel-btn")
const clienteHome = document.getElementById("cliente-home")

cliente.addEventListener("click", function(e) {
    if(e.target.parentElement.tagName == "LI")
        e.target.parentElement.style.backgroundColor = "lightgray";
    else
        e.target.style.backgroundColor = "lightgray";

    telaVariaveisAtuais.style.display = "block"
    clienteHome.style.display = "none"
})

adicionarVariavelBtn.addEventListener("click", function() {
    telaVariaveisAtuais.style.display = "none"
    telaAdicionarVariavel.style.display = "flex"
})

const adicionarVariavelVarCentral = document.getElementById("adicionar-variavel-var-central")
const adicionarVariavelPeso = document.getElementById("adicionar-variavel-peso")
const adicionarVariavelQntFaixas = document.getElementById("adicionar-variavel-qnt-faixas")
const adicionarVariavelCenarioFaixas = document.getElementById("adicionar-variavel-cenario-faixas")
const adicionarVariavelLista = document.getElementById("adicionar-variavel-lista")
const adicionarVariavelBtnAvancar = document.getElementById("adicionar-variavel-btn-avancar")

function verificacaoAdicionarVariavel() {
    if(adicionarVariavelVarCentral.value != "Selecionar"
    && adicionarVariavelPeso.value != "Selecionar" 
    && adicionarVariavelQntFaixas.value != "Selecionar" 
    && (adicionarVariavelCenarioFaixas.checked || adicionarVariavelLista.checked))
    {
        adicionarVariavelBtnAvancar.style.backgroundColor = "#2e4a7e"
    } else {
        adicionarVariavelBtnAvancar.style.backgroundColor = "#a6a6a6"
    }
}

function adicionarVariavelAvancar() {
    if(adicionarVariavelBtnAvancar.style.backgroundColor == "rgb(46, 74, 126)") {
        telaAdicionarVariavel.style.display = "none"
        telaCenariosListaPonderacoes.style.display = "flex"
    }
}

adicionarVariavelVarCentral.addEventListener("click", verificacaoAdicionarVariavel)
adicionarVariavelPeso.addEventListener("click", verificacaoAdicionarVariavel)
adicionarVariavelQntFaixas.addEventListener("click", verificacaoAdicionarVariavel)
adicionarVariavelCenarioFaixas.addEventListener("click", verificacaoAdicionarVariavel)
adicionarVariavelLista.addEventListener("click", verificacaoAdicionarVariavel)
adicionarVariavelBtnAvancar.addEventListener("click", verificacaoAdicionarVariavel)

adicionarVariavelBtnAvancar.addEventListener("click",adicionarVariavelAvancar)

const cenariosListaPonderacoesAte1 = document.getElementById("cenarios-lista-ponderacoes-ate1")
const cenariosListaPonderacoesAte2 = document.getElementById("cenarios-lista-ponderacoes-ate2")
const cenariosListaPonderacoesDe = document.getElementById("cenarios-lista-ponderacoes-de")
const cenariosListaPonderacoesAcimaDe = document.getElementById("cenarios-lista-ponderacoes-acima-de")
const cenariosListaPonderacoesPeso1 = document.getElementById("cenarios-lista-ponderacoes-peso1")
const cenariosListaPonderacoesPeso2 = document.getElementById("cenarios-lista-ponderacoes-peso2")
const cenariosListaPonderacoesPeso3 = document.getElementById("cenarios-lista-ponderacoes-peso3")
const adicionarVariavelBtnSimular = document.getElementById("adicionar-variavel-btn-simular")
const adicionarVariavelBtnIncluir = document.getElementById("adicionar-variavel-btn-incluir")

function verificacaoCenarioListaPonderacoes() {
    // console.log(cenariosListaPonderacoesAte1.value, cenariosListaPonderacoesAte2.value, cenariosListaPonderacoesDe.value, cenariosListaPonderacoesAcimaDe.value)
    if(cenariosListaPonderacoesAte1.value != "Selecionar"
    && cenariosListaPonderacoesAte2.value != "Selecionar" 
    && cenariosListaPonderacoesDe.value != "Selecionar" 
    && cenariosListaPonderacoesAcimaDe.value != "Selecionar"
    )
    {
        adicionarVariavelBtnSimular.style.backgroundColor = "#2e4a7e"
        adicionarVariavelBtnIncluir.style.backgroundColor = "#2e4a7e"
    } else {
        adicionarVariavelBtnSimular.style.backgroundColor = "#a6a6a6"
        adicionarVariavelBtnIncluir.style.backgroundColor = "#a6a6a6"
    }
}

cenariosListaPonderacoesAte1.addEventListener("click", verificacaoCenarioListaPonderacoes)
cenariosListaPonderacoesAte2.addEventListener("click", verificacaoCenarioListaPonderacoes)
cenariosListaPonderacoesDe.addEventListener("click", verificacaoCenarioListaPonderacoes)
cenariosListaPonderacoesAcimaDe.addEventListener("click", verificacaoCenarioListaPonderacoes)

function cenariosListaPonderacoesSimular() {
    if(adicionarVariavelBtnSimular.style.backgroundColor == "rgb(46, 74, 126)") {
        telaAdicionarVariavel.style.display = "none"
        telaCenariosListaPonderacoes.style.display = "flex"
    }
}