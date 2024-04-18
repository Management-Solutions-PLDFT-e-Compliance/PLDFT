const cliente = document.getElementById("cliente")
const telaVariaveisAtuais = document.getElementById("visualização-das-variaveis-atuais")
const telaCenariosListaPonderacoes = document.getElementById("cenarios-lista-ponderacoes")
const telaAdicionarVariavel = document.getElementById("adicionar-variavel")
const telaParametrizar = document.getElementById("parametrizar")
const telaCenariosListaPonderacoesParametrizar = document.getElementById("cenarios-lista-ponderacoes-parametrizar")
const adicionarVariavelBtn = document.getElementById("adicionar-variavel-btn")
const clienteHome = document.getElementById("cliente-home")

const dadosVariaveisAtuais = [
    {
        id: "00001",
        variavel: "Profissão",
        tipo: "Cadastral",
        pfpj: "PF",
        pesoMaximo: "200",
        tipoPonderacao: "Lista",
        cenarios: "4"
    },
    {
        id: "00003",
        variavel: "CEP",
        tipo: "Cadastral",
        pfpj: "PF",
        pesoMaximo: "100",
        tipoPonderacao: "Lista",
        cenarios: "3"
    },
    {
        id: "00009",
        variavel: "PEP",
        tipo: "Cadastral",
        pfpj: "PF",
        pesoMaximo: "300",
        tipoPonderacao: "Lista",
        cenarios: "2"
    },
    {
        id: "00010",
        variavel: "Tempo de relacionamento",
        tipo: "Cadastral",
        pfpj: "PF",
        pesoMaximo: "50",
        tipoPonderacao: "Cenários",
        cenarios: "3"
    },
    {
        id: "00016",
        variavel: "Renda",
        tipo: "Cadastral",
        pfpj: "PF",
        pesoMaximo: "60",
        tipoPonderacao: "Cenários",
        cenarios: "3"
    },
]

const tableDataArea = document.getElementById("table-data-area")

dadosVariaveisAtuais.forEach(dado => {
    const tr = document.createElement("tr")

    tr.innerHTML = `<td><input type='checkbox' name='' id=''></td>
    <td><span>${dado.id}</span></td>
    <td><span>${dado.variavel}</span></td>
    <td><span>${dado.tipo}</span></td>
    <td><span>${dado.pfpj}</span></td>
    <td><span>${dado.pesoMaximo}</span></td>
    <td><span>${dado.tipoPonderacao}</span></td>
    <td><span>${dado.cenarios}</span></td>`

    tableDataArea.appendChild(tr)

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
        adicionarVariavelBtnAvancar.style.backgroundColor = "#304c7c"
    } else {
        adicionarVariavelBtnAvancar.style.backgroundColor = "#a6a6a6"
    }
}

function adicionarVariavelAvancar() {
    if(adicionarVariavelBtnAvancar.style.backgroundColor == "rgb(48, 76, 124)") {
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
const telaPopUp = document.getElementById("pop-up")
const fecharPopUp = document.getElementById("fechar-pop-up")
const popUpBtnIncluir = document.getElementById("pop-up-btn-incluir")

function verificacaoCenarioListaPonderacoes() {
    // console.log(cenariosListaPonderacoesAte1.value, cenariosListaPonderacoesAte2.value, cenariosListaPonderacoesDe.value, cenariosListaPonderacoesAcimaDe.value)
    if(cenariosListaPonderacoesAte1.value != "Selecionar"
    && cenariosListaPonderacoesAte2.value != "Selecionar" 
    && cenariosListaPonderacoesDe.value != "Selecionar" 
    && cenariosListaPonderacoesAcimaDe.value != "Selecionar"
    )
    {
        adicionarVariavelBtnSimular.style.backgroundColor = "#304c7c"
        adicionarVariavelBtnIncluir.style.backgroundColor = "#304c7c"
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
    if(adicionarVariavelBtnSimular.style.backgroundColor == "rgb(48, 76, 124)") {
        telaPopUp.style.display = "flex"
    }
}

adicionarVariavelBtnSimular.addEventListener("click", cenariosListaPonderacoesSimular)

fecharPopUp.addEventListener("click", function() {
    telaPopUp.style.display = "none"
})

let counterId = 16
function cenariosListaPonderacoesIncluir() {
    if(adicionarVariavelBtnSimular.style.backgroundColor == "rgb(48, 76, 124)") {

        counterId+= 1
        let counterIdString = counterId.toString().padStart(5, '0');
        dadosVariaveisAtuais.push({
                id: counterIdString,
                variavel: adicionarVariavelVarCentral.value,
                tipo: "Cadastral",
                pfpj: "PF",
                pesoMaximo: adicionarVariavelPeso.value,
                tipoPonderacao: adicionarVariavelCenarioFaixas.checked ? "Cenários": "Lista",
                cenarios: adicionarVariavelQntFaixas.value
        })

        const tr = document.createElement("tr")

        tr.innerHTML = `<td><input type='checkbox' name='' id=''></td>
        <td><span>${counterIdString}</span></td>
        <td><span>${adicionarVariavelVarCentral.value}</span></td>
        <td><span>${"Cadastral"}</span></td>
        <td><span>${"PF"}</span></td>
        <td><span>${adicionarVariavelPeso.value}</span></td>
        <td><span>${adicionarVariavelCenarioFaixas.checked ? "Cenários": "Lista"}</span></td>
        <td><span>${adicionarVariavelQntFaixas.value}</span></td>`

        tableDataArea.appendChild(tr)

        Swal.fire({
            icon: 'success',
            title: 'Variável incluída com sucesso!'
        })
        telaPopUp.style.display = "none"
        telaCenariosListaPonderacoes.style.display = "none"
        telaVariaveisAtuais.style.display = "flex"
    }
}

adicionarVariavelBtnIncluir.addEventListener("click", cenariosListaPonderacoesIncluir)
popUpBtnIncluir.addEventListener("click", cenariosListaPonderacoesIncluir)

const checkboxVariaveisAtuais = document.querySelectorAll("#visualização-das-variaveis-atuais input")
const visualizacaoVariaveisParametrizar = document.getElementById("visualizacao-variaveis-parametrizar")
const visualizacaoVariaveisDownload = document.getElementById("visualizacao-variaveis-download")
const visualizacaoVariaveisExcluir = document.getElementById("visualizacao-variaveis-excluir")

function checkboxAtiva() {
    let ativo = false

    checkboxVariaveisAtuais.forEach(checkbox => {if(checkbox.checked) ativo = true})

    if(ativo){
        visualizacaoVariaveisParametrizar.style.backgroundColor = "rgb(48, 76, 124)"
        visualizacaoVariaveisDownload.style.backgroundColor = "rgb(48, 76, 124)"
        visualizacaoVariaveisExcluir.style.backgroundColor = "rgb(48, 76, 124)"
    } else {
        visualizacaoVariaveisParametrizar.style.backgroundColor = "#a6a6a6"
        visualizacaoVariaveisDownload.style.backgroundColor = "#a6a6a6"
        visualizacaoVariaveisExcluir.style.backgroundColor = "#a6a6a6"
    }

}

checkboxVariaveisAtuais.forEach(checkbox => checkbox.addEventListener("click", checkboxAtiva))

visualizacaoVariaveisParametrizar.addEventListener("click", function() {
    if(visualizacaoVariaveisParametrizar.style.backgroundColor == "rgb(48, 76, 124)") {
        telaVariaveisAtuais.style.display = "none"
        telaParametrizar.style.display = "flex"

        let indexDado
        
        checkboxVariaveisAtuais.forEach((checkbox, index) => {
        
            if(checkbox.checked) {
                indexDado = index
            }
        })

        const dadoParametrizar = dadosVariaveisAtuais[indexDado]

        parametrizarVarCadastral.value = dadoParametrizar.variavel
        parametrizarPeso.value = dadoParametrizar.pesoMaximo
        parametrizarQntFaixas.value = dadoParametrizar.cenarios
        dadoParametrizar.tipoPonderacao == "Lista" ? parametrizarLista.checked = true : parametrizarCenariosFaixas.checked = true

    }
})

const parametrizarVarCadastral = document.getElementById("parametrizar-var-cadastral")
const parametrizarPeso = document.getElementById("parametrizar-peso")
const parametrizarQntFaixas = document.getElementById("parametrizar-qnt-faixas")
const parametrizarCenariosFaixas = document.getElementById("parametrizar-cenarios-faixas")
const parametrizarLista = document.getElementById("parametrizar-lista")
const parametrizarBtnAvancar = document.getElementById("parametrizar-btn-avancar")

function verificacaoParametrizar() {
    if(parametrizarVarCadastral.value != "Selecionar"
    && parametrizarPeso.value != "Selecionar" 
    && parametrizarQntFaixas.value != "Selecionar" 
    && (parametrizarCenariosFaixas.checked || parametrizarLista.checked))
    {
        parametrizarBtnAvancar.style.backgroundColor = "#304c7c"
    } else {
        parametrizarBtnAvancar.style.backgroundColor = "#a6a6a6"
    }

}

parametrizarCenariosFaixas.addEventListener("click", verificacaoParametrizar)
parametrizarLista.addEventListener("click", verificacaoParametrizar)
parametrizarPeso.addEventListener("click", verificacaoParametrizar)
parametrizarQntFaixas.addEventListener("click", verificacaoParametrizar)
parametrizarVarCadastral.addEventListener("click", verificacaoParametrizar)

function parametrizarAvancar() {
    if(parametrizarBtnAvancar.style.backgroundColor == "rgb(48, 76, 124)") {
        telaCenariosListaPonderacoesParametrizar.style.display = "flex"
        telaParametrizar.style.display = "none"
    }
}

parametrizarBtnAvancar.addEventListener("click", parametrizarAvancar)

const adicionarVariavelParametrizarBtnUploadLista = document.querySelector("#adicionar-variavel-parametrizar-btn-upload-lista input")

adicionarVariavelParametrizarBtnUploadLista.addEventListener("change", function() { 
    Swal.fire({
        icon: 'success',
        title: 'Lista atualizada com sucesso!'
    })
    telaCenariosListaPonderacoesParametrizar.style.display = "none"
    telaVariaveisAtuais.style.display = "flex"

    let indexDado
        checkboxVariaveisAtuais.forEach((checkbox, index) => {
            if(checkbox.checked)
                indexDado = index
        })

        dadosVariaveisAtuais[indexDado].variavel = parametrizarVarCadastral.value
        dadosVariaveisAtuais[indexDado].pesoMaximo = parametrizarPeso.value
        dadosVariaveisAtuais[indexDado].cenario = parametrizarQntFaixas.value
        parametrizarLista.checked ? dadosVariaveisAtuais[indexDado].tipoPonderacao = "Lista" : dadosVariaveisAtuais[indexDado].tipoPonderacao = "Cenários"

        const trAll = document.querySelectorAll("tr")

        trAll[indexDado+1].innerHTML = `<td><input type='checkbox' name='' id=''></td>
        <td><span>${dadosVariaveisAtuais[indexDado].id}</span></td>
        <td><span>${dadosVariaveisAtuais[indexDado].variavel}</span></td>
        <td><span>${"Cadastral"}</span></td>
        <td><span>${"PF"}</span></td>
        <td><span>${dadosVariaveisAtuais[indexDado].pesoMaximo}</span></td>
        <td><span>${dadosVariaveisAtuais[indexDado].tipoPonderacao == "Cenários" ? "Cenários": "Lista"}</span></td>
        <td><span>${dadosVariaveisAtuais[indexDado].cenario}</span></td>`
})

visualizacaoVariaveisDownload.addEventListener("change", function() {
    Swal.fire({
        icon: 'success',
        title: 'Lista baixada com sucesso!'
    })
})

visualizacaoVariaveisExcluir.addEventListener("click", function() {
    Swal.fire({
        title: 'Tem certeza que deseja excluir variável?',
        showCancelButton: true,
        confirmButtonColor: '#304c7c',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'

    }).then((result) => {
        if (result.isConfirmed) {

            checkboxVariaveisAtuais.forEach(checkbox => {
                if(checkbox.checked) {
                    checkbox.parentElement.parentElement.remove()
                }
            })
            
            Swal.fire({
                icon: 'success',
                title: 'Variável excluída com sucesso!'
            });
        } else {
            // Ação a ser executada se o botão "Não" for clicado
            Swal.fire('Operação cancelada');
        }
    });
})