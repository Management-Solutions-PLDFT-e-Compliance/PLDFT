const estrategico = document.getElementById('estrategico')
const gerencial = document.getElementById('gerencial')
const operacional = document.getElementById('operacional')
const btnSair= document.getElementById('btn-sair')


const handleClickEstrategico = () => {
    if(!document.getElementById("esconde-estrategico").classList.contains('inativo')) {

        const tituloNavegacao = document.getElementById("titulo-navegacao")
        const corpoNavegacao = document.getElementById("corpo-navegacao")
    
        tituloNavegacao.innerHTML = "Estratégico"
        
        let navegacao = "<li class='item-estrategico'><a href='../riscoLdftInstituicao/riscoLdftInstituicao.html'><p>Risco LDFT da instituição</p></a></li>"
        navegacao += "<li class='item-estrategico'><a href='../evolucaoModeloNegocio1/evolucaoModeloNegocio1.html'><p>Evolução do modelo de negócios</p></a></li>"
    
        corpoNavegacao.innerHTML = navegacao
    
        document.getElementById('esconde-gerencial').classList.add('inativo')
        gerencial.children[1].classList.add('inativo')
        document.getElementById('esconde-operacional').classList.add('inativo')
        operacional.children[1].classList.add('inativo')
        document.getElementById('btn-sair').innerHTML = "Voltar"
    }
}

const handleClickGerencial = () => {

    if(!document.getElementById("esconde-gerencial").classList.contains('inativo')) {

        const tituloNavegacao = document.getElementById("titulo-navegacao")
        const corpoNavegacao = document.getElementById("corpo-navegacao")
    
        tituloNavegacao.innerHTML = "Gerencial"
        
        let navegacao = "<li><a href='#' class='item-navegacao-gerencial'><p>Monitoramento</p></a></li>"
        navegacao += "<li><a href='#' class='item-navegacao-gerencial' ><p>Distribuição de Alertas</p></a></li>"
        navegacao += "<li><a href='#' class='item-navegacao-gerencial' ><p>Comunicação</p></a></li>"
        navegacao += "<li><a href='#' class='item-navegacao-gerencial' ><p>Produtividade</p></a></li>"
        navegacao += "<li><a href='#' class='item-navegacao-gerencial' ><p>KY e AIR</p></a></li>"
        navegacao += "<li><a href='#' class='item-navegacao-gerencial' ><p>Distribuição Geografica</p></a></li>"
        navegacao += "<li><a href='#' class='item-navegacao-gerencial' ><p>Avaliação de Efetividade</p></a></li>"
        
        corpoNavegacao.innerHTML = navegacao
    
        document.getElementById('esconde-estrategico').classList.add('inativo')
        estrategico.children[1].classList.add('inativo')
        document.getElementById('esconde-operacional').classList.add('inativo')
        operacional.children[1].classList.add('inativo')
        document.getElementById('btn-sair').innerHTML = "Voltar"
    }

}

const handleClickOperacional = () => {

    if(!document.getElementById("esconde-operacional").classList.contains('inativo')) {

        const tituloNavegacao = document.getElementById("titulo-navegacao")
        const corpoNavegacao = document.getElementById("corpo-navegacao")
    
        tituloNavegacao.innerHTML = "Operacional"
    
        let navegacao = "<li><a href='#' class='item-navegacao-gerencial'><p>Monitoramento</p></a></li>"
        navegacao += "<li><a href='#' class='item-navegacao-gerencial' ><p>Análise de Alertas</p></a></li>"
        navegacao += "<li><a href='#' class='item-navegacao-gerencial' ><p>Transacional</p></a></li>"
        
        corpoNavegacao.innerHTML = navegacao
    
        document.getElementById('esconde-gerencial').classList.add('inativo')
        gerencial.children[1].classList.add('inativo')
        document.getElementById('esconde-estrategico').classList.add('inativo')
        estrategico.children[1].classList.add('inativo')
        document.getElementById('btn-sair').innerHTML = "Voltar"
    }

}

const handleClickSair = (e) => {

    if(e.target.innerHTML == "Voltar") {

        const tituloNavegacao = document.getElementById("titulo-navegacao")
        const corpoNavegacao = document.getElementById("corpo-navegacao")
    
        tituloNavegacao.innerHTML = ""
        corpoNavegacao.innerHTML = ""
    
        
        document.getElementById('esconde-estrategico').classList.remove('inativo')
        estrategico.children[1].classList.remove('inativo')
        document.getElementById('esconde-estrategico').classList.remove('inativo')
        document.getElementById('esconde-gerencial').classList.remove('inativo')
        gerencial.children[1].classList.remove('inativo')
        document.getElementById('esconde-operacional').classList.remove('inativo')
        operacional.children[1].classList.remove('inativo')
        document.getElementById('btn-sair').innerHTML = "Sair"
    } else {
        window.location.href = "../index.html"
    }

}

estrategico.addEventListener('click', handleClickEstrategico)
gerencial.addEventListener('click', handleClickGerencial)
operacional.addEventListener('click', handleClickOperacional)
btnSair.addEventListener('click', e => handleClickSair(e))
