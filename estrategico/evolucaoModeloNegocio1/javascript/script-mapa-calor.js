// GET SPANS COM VALORES

const valoresMatriz = document.querySelectorAll('.mapa_calor_linha > li ')
const mapaCalor = document.getElementById('mapa-calor-id')
let itemSelecionadoAnterior

let dadosMapa = [6, 90, 78, 34, 19, 40, 32, 2, 20, 29, 4, 7, 74, 57, 45, 95]

var newData = [
    {
        metrica: "Monitoramento/Segmento",
        descricao: "Alertas fora do SLA requerido pelo regulador",
        risco: "Alto"
    },
    {
        metrica: "Monitoramento/Segmento",
        descricao: "Alertas fora do SLA requerido pelo regulador",
        risco: "Moderado"
    },
    {
        metrica: "Monitoramento/Segmento",
        descricao: "Alertas fora do SLA requerido pelo regulador",
        risco: "Baixo"
    },
    {
        metrica: "Monitoramento/Segmento",
        descricao: "Alertas fora do SLA requerido pelo regulador",
        risco: "Baixo"
    },
    {
        metrica: "Monitoramento/Segmento",
        descricao: "Alertas fora do SLA requerido pelo regulador",
        risco: "Muito Alto"
    },
    {
        metrica: "Monitoramento/Segmento",
        descricao: "Alertas fora do SLA requerido pelo regulador",
        risco: "Muito Alto"
    },
    {
        metrica: "Monitoramento/Segmento",
        descricao: "Alertas fora do SLA requerido pelo regulador",
        risco: "Muito Alto"
    },
]

function getInformation(e) {
    const tabela_indicacao = document.getElementById('tabela_indicacao')
    const btnDownloadTabela = document.getElementsByClassName("btn-download-tabela")[0]

    if(e.target.tagName == 'LI' && e.target.firstChild.innerHTML != "n/a" &&  e.target.innerHTML != "n/a") {
        if(itemSelecionadoAnterior == null){
            itemSelecionadoAnterior = e.target
            e.target.classList.add('selected')
            tabela_indicacao.style.display = 'block'
            btnDownloadTabela.style.display = 'flex'
        } else {
            itemSelecionadoAnterior.classList.remove('selected')
            itemSelecionadoAnterior = e.target
            e.target.classList.add('selected')
            tabela_indicacao.style.display = 'block'
            btnDownloadTabela.style.display = 'flex'
        }
    } else if(e.target.firstChild.innerHTML != "n/a"  &&  e.target.innerHTML != "n/a") {
        if(itemSelecionadoAnterior == null){
            itemSelecionadoAnterior = e.target.parentNode
            e.target.parentNode.classList.add('selected')
            tabela_indicacao.style.display = 'block'
            btnDownloadTabela.style.display = 'flex'
        } else {
            itemSelecionadoAnterior.classList.remove('selected')
            itemSelecionadoAnterior = e.target.parentNode
            e.target.parentNode.classList.add('selected')
            tabela_indicacao.style.display = 'block'
            btnDownloadTabela.style.display = 'flex'
        }
    }

    let datas =  "<li><ul class='table_header_indicacao'><li><span>Métrica</span></li><li><span>Descrição</span></li><li><span>Risco</span></li></ul></li>"
    if(e.target.firstChild.innerHTML != "n/a" &&  e.target.innerHTML != "n/a") {
        newData.forEach(data => {
            let linha = "<li><ul class='table_row_indicacao'><li><span>" + data.metrica + "</span></li><li><span>" + data.descricao + "</span></li><li><span>" + data.risco + "</span></li></ul></li>"
            datas += linha
        })
        
    } else {
        newData.forEach(data => {
            let linha = "<li><ul class='table_row_indicacao'><li><span></span></li><li><span></span></li><li><span></span></li></ul></li>"
            datas += linha
        })
        
    }
    tabela_indicacao.innerHTML = datas
}

valoresMatriz.forEach((item, index) => {
    item.firstChild.innerText = dadosMapa[index]
})

valoresMatriz.forEach(item => {
    var valorSpan = item.firstChild.innerText; // ou spanElement.textContent;
    item.addEventListener("click", e => getInformation(e))
    updateColor(valorSpan, item)
})

function updateMatriz() {
    valoresMatriz.forEach((item, index) => {
        item.firstChild.innerText = dadosMapa[index]
    })

    valoresMatriz.forEach((item, index) => {
        if (item.classList.contains('selected')) {
            item.classList.remove('selected')
        }

        item.firstChild.innerText = dadosMapa[index]
        var valorSpan = item.firstChild.innerText;
        updateColor(valorSpan, item)
    })
}




function interpolateColor(color1, color2, factor) {
    const r = Math.round(color1[0] + factor * (color2[0] - color1[0]));
    const g = Math.round(color1[1] + factor * (color2[1] - color1[1]));
    const b = Math.round(color1[2] + factor * (color2[2] - color1[2]));
    return `rgb(${r},${g},${b})`;
}


  // Função para atualizar a cor com base no valor
function updateColor(value, colorBox) {

    let color1, color2;

    // Defina as condições para as cores de transição
    if (value == 0) {
      colorBox.style.backgroundColor = 'rgb(67,190,67)'; // Verde
    } else if (value == 40) {
      colorBox.style.backgroundColor = 'rgb(247,230,36)'; // Amarelo
    } else if (value == 100) {
      colorBox.style.backgroundColor = 'rgb(217,61,61)'; // Vermelho
    } else if(value == 'n/a') {
        colorBox.style.backgroundColor = 'rgba(242,242,242,255)'
    } else {
      // Calcule a cor intermediária
      if(value < 40) {
        const factor = value / 40; // Fator de interpolação
        color1 = [67, 190, 67]; // Verde
        color2 = [247, 230, 36]; // Amarelo
        colorBox.style.backgroundColor = interpolateColor(color1, color2, factor);
        return;
      } else if (value > 40 && value < 100) {
        console.log("chegou aqui")
        const factor = value / 100; // Fator de interpolação
        color1 = [247, 230, 36]; // Verde
        color2 = [217, 61, 61]// Amarelo
        colorBox.style.backgroundColor = interpolateColor(color1, color2, factor);
        return;
      }
    }
}

const mapaCalorHearder = document.querySelectorAll(".mapa_calor_header > li > span")

document.getElementById('mapa_calor_select').addEventListener('change', function () {
    var selectedOption = this.value;
    const tabela_indicacao = document.getElementById('tabela_indicacao')
    const btnDownloadTabela = document.getElementsByClassName("btn-download-tabela")[0]

    // Atualiza os dados com base na opção selecionada

    if (selectedOption === 'Segmento') {
        newData  = [
            {
                metrica: "Monitoramento/Segmento",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Alto"
            },
            {
                metrica: "Monitoramento/Segmento",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Moderado"
            },
            {
                metrica: "Monitoramento/Segmento",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Baixo"
            },
            {
                metrica: "Monitoramento/Segmento",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Baixo"
            },
            {
                metrica: "Monitoramento/Segmento",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Muito Alto"
            },
            {
                metrica: "Monitoramento/Segmento",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Muito Alto"
            },
            {
                metrica: "Monitoramento/Segmento",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Muito Alto"
            },
        ]
        
       mapaCalorHearder[0].innerHTML = "Digital PF"
       mapaCalorHearder[1].innerHTML = "Digital PJ"
       mapaCalorHearder[2].innerHTML = "Varejo"
       mapaCalorHearder[3].innerHTML = "Corporate"

        dadosMapa = [6, 90, 78, 34, 19, 40, 32, 2, 20, 29, 4, 7, 74, 57, 45, 95]
    } else if (selectedOption === 'Canais') {
        newData = [
            {
                metrica: "Monitoramento/Canais",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Alto"
            },
            {
                metrica: "Monitoramento/Canais",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Moderado"
            },
            {
                metrica: "Monitoramento/Canais",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Baixo"
            },
            {
                metrica: "Monitoramento/Canais",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Baixo"
            },
            {
                metrica: "Monitoramento/Canais",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Muito Alto"
            },
            {
                metrica: "Monitoramento/Canais",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Muito Alto"
            },
            {
                metrica: "Monitoramento/Canais",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Muito Alto"
            },
        ]

        mapaCalorHearder[0].innerHTML = "Digital"
        mapaCalorHearder[1].innerHTML = "Agência"
        mapaCalorHearder[2].innerHTML = "Correspondentes"
        mapaCalorHearder[3].innerHTML = "SAC"


        dadosMapa = [10, 25, 95, 34, 18, 40, 32, 24, 'n/a', 'n/a', 'n/a', 'n/a', 'n/a', 'n/a', 'n/a', 'n/a']
    } else if (selectedOption == 'Produtos') {
        newData = [
            {
                metrica: "Monitoramento/Produtos",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Alto"
            },
            {
                metrica: "Monitoramento/Produtos",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Moderado"
            },
            {
                metrica: "Monitoramento/Produtos",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Baixo"
            },
            {
                metrica: "Monitoramento/Produtos",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Baixo"
            },
            {
                metrica: "Monitoramento/Produtos",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Muito Alto"
            },
            {
                metrica: "Monitoramento/Produtos",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Muito Alto"
            },
            {
                metrica: "Monitoramento/Produtos",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Muito Alto"
            },
        ]

        mapaCalorHearder[0].innerHTML = "Empréstimos"
        mapaCalorHearder[1].innerHTML = "Investimentos"
        mapaCalorHearder[2].innerHTML = "Câmbio"
        mapaCalorHearder[3].innerHTML = "Seguros"

        dadosMapa = ['n/a', 'n/a', 'n/a', 'n/a', 'n/a', 'n/a', 'n/a', 'n/a', 20, 10, 99, 40, 75, 4, 7, 4, 95]
    } else if (selectedOption === 'Segmentos') {
        newData = [
            {
                metrica: "Monitoramento/Segmentos",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Alto"
            },
            {
                metrica: "Monitoramento/Segmentos",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Moderado"
            },
            {
                metrica: "Monitoramento/Segmentos",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Baixo"
            },
            {
                metrica: "Monitoramento/Segmentos",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Baixo"
            },
            {
                metrica: "Monitoramento/Segmentos",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Muito Alto"
            },
            {
                metrica: "Monitoramento/Segmentos",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Muito Alto"
            },
            {
                metrica: "Monitoramento/Segmentos",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Muito Alto"
            },
        ]

        dadosMapa = [6, 90, 78, 34, 25, 35, 45, 61, 65, 83, 27, 15, 19, 40, 32, 2]
    } else if (selectedOption === 'Serviços') {
        newData = [
            {
                metrica: "Monitoramento/Serviços",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Alto"
            },
            {
                metrica: "Monitoramento/Serviços",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Moderado"
            },
            {
                metrica: "Monitoramento/Serviços",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Baixo"
            },
            {
                metrica: "Monitoramento/Serviços",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Baixo"
            },
            {
                metrica: "Monitoramento/Serviços",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Muito Alto"
            },
            {
                metrica: "Monitoramento/Serviços",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Muito Alto"
            },
            {
                metrica: "Monitoramento/Serviços",
                descricao: "Alertas fora do SLA requerido pelo regulador",
                risco: "Muito Alto"
            },
        ]

        dadosMapa = [63, 91, 64, 14, 19, 40, 35, 2, 21, 98, 76, 98, 15, 80, 25, 2]
    }

    let datas =  "<li><ul class='table_header_indicacao'><li><span>Métrica</span></li><li><span>Descrição</span></li><li><span>Risco</span></li></ul></li>"
    for(let i = 0; i < 5; i++) {
        let linha = "<li><ul class='table_row_indicacao'><li><span></span></li><li><span></span></li><li><span></span></li></ul></li>"
        datas += linha
    }
    tabela_indicacao.innerHTML = datas
    tabela_indicacao.style.display = "none"
    btnDownloadTabela.style.display = "none"

    updateMatriz()
})

function handleChangeTableCliente() {
    var selectedOption = this.value;
    const tabelaCliente = document.getElementById("table-cliente")
    let newData = []
    
    if(selectedOption == "PF") {
        newData = [
            {
                cliente: "Matheus",
                numAlertas: "90",
                risco: "Risco alto",
            },
            {
                cliente: "Victor",
                numAlertas: "84",
                risco: "Risco alto",
            },
            {
                cliente: "Rodolfo",
                numAlertas: "52",
                risco: "Risco médio",
            },
            {
                cliente: "Débora",
                numAlertas: "31",
                risco: "Risco baixo",
            },
            {
                cliente: "Erick",
                numAlertas: "19",
                risco: "Risco baixo",
            },
        ]
    } else if(selectedOption == "PJ") {
        newData = [
            {
                cliente: "Amazon",
                numAlertas: "95",
                risco: "Risco alto",
            },
            {
                cliente: "IBM",
                numAlertas: "76",
                risco: "Risco alto",
            },
            {
                cliente: "Huawei",
                numAlertas: "41",
                risco: "Risco médio",
            },
            {
                cliente: "Google",
                numAlertas: "32",
                risco: "Risco baixo",
            },
            {
                cliente: "Apple",
                numAlertas: "29",
                risco: "Risco baixo",
            },
        ]
    } else if(selectedOption == "Clientes") {
        newData = [
            {
                cliente: "Amazon",
                numAlertas: "95",
                risco: "Risco alto",
            },
            {
                cliente: "Matheus",
                numAlertas: "90",
                risco: "Risco alto",
            },
            {
                cliente: "Victor",
                numAlertas: "84",
                risco: "Risco alto",
            },
            {
                cliente: "IBM",
                numAlertas: "76",
                risco: "Risco alto",
            },
            {
                cliente: "Rodolfo",
                numAlertas: "52",
                risco: "Risco médio",
            },
        ]
    }

    let linhas = "<li><ul class='table_header'><li><span>Cliente</span></li><li><span>Número de alertas em 2022</span></li><li><span>Risco cliente LDFT</span></li></ul></li>"
    for(let i=0; i < newData.length; i++) {
        linhas += "<li><ul class='table_row'><li><span>" + newData[i].cliente + "</span></li><li><span>" + newData[i].numAlertas + " alertas</span></li><li><span>" + newData[i].risco + "</span></li></ul></li>"
    }

    tabelaCliente.innerHTML = linhas

}

document.getElementById('clientes-selects').addEventListener('change', handleChangeTableCliente)
