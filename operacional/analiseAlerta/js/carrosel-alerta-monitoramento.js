const carrosel = document.getElementById("carrosel-alerta-monitoramento")
const conteudo = document.querySelectorAll("#carrosel .conteudo")
const pagAtual = document.getElementById("pag-atual")
const ant = document.getElementById("ant")
const prox = document.getElementById("prox")

let valorAtual = 1

pagAtual.innerHTML = `${valorAtual}/${conteudo.length}`

for(let i = 0; i < conteudo.length; i++) {
    if(i != 0)
        conteudo[i].style.display = "none"
}

ant.addEventListener("click", function() {
    if(valorAtual > 1) {
        conteudo[valorAtual-1].style.display = "none"
        valorAtual--
        pagAtual.innerHTML = `${valorAtual}/${conteudo.length}`
        conteudo[valorAtual-1].style.display = "flex"
    }
})

prox.addEventListener("click", function() {
    if(valorAtual < conteudo.length) {
        conteudo[valorAtual-1].style.display = "none"
        valorAtual++
        pagAtual.innerHTML = `${valorAtual}/${conteudo.length}`
        conteudo[valorAtual-1].style.display = "flex"
    }
})
