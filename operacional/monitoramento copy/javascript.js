const fileInput = document.getElementById("fileInput");
const uploadLabel = document.querySelector(".upload-label");
const dragArea = document.getElementById("dragArea");
const fileName = document.getElementById("file-name");
const dataDaIdentificaçãoDoIncidente = document.getElementById("data-da-identificação-do-incidente");
const dataDoIncidente = document.getElementById("data-do-incidente");
const localização = document.getElementById("localização");
const tipoDeCliente = document.getElementById("tipo-de-cliente");
const nomeDoCliente = document.getElementById("nome-do-cliente");
const transacoesEnvolvidas = document.getElementById("transacoes-envolvidas");
const motivoDaDenuncia = document.getElementById("motivo-da-denuncia");
const valoresTransacionados = document.getElementById("valores-transacionados");
const nomeDoFuncionario = document.getElementById("nome-do-funcionario");
const codigoDoFuncionario = document.getElementById("codigo-do-funcionario");
const emailDoFuncionario = document.getElementById("email-do-funcionario");


// Clique no rótulo
uploadLabel.addEventListener("click", function () {
    fileInput.click();
});

// Arraste e solte
dragArea.addEventListener("dragover", function (e) {
    e.preventDefault();
    dragArea.classList.add("drag-over");
});

dragArea.addEventListener("dragleave", function () {
    dragArea.classList.remove("drag-over");
});

dragArea.addEventListener("drop", function (e) {
    e.preventDefault();
    dragArea.classList.remove("drag-over");

    const files = e.dataTransfer.files;
    handleFiles(files);
});

// Seleção de arquivo
fileInput.addEventListener("change", function () {
    const files = fileInput.files;
    handleFiles(files);
});

function handleFiles(files) {
    // Lógica para lidar com os arquivos selecionados
    fileName.innerHTML = files[0].name
    dataDaIdentificaçãoDoIncidente.value = "15-01-2024"
    dataDoIncidente.value = "07-01-2024"
    localização.value = "Agência 0583 – SP"
    tipoDeCliente.value = "Pessoa física"
    nomeDoCliente.value = "João Santos"
    transacoesEnvolvidas.value = " PIX "
    motivoDaDenuncia.innerHTML = "Realização de diversos PIX para diferentes contas com valores incompatíveis ao perfil do cliente"
    valoresTransacionados.innerHTML = "•	R$ 5.780,00 - R$ 5.781,00 -	R$ 5785,00"
    nomeDoFuncionario.value = "Ana Silva"
    codigoDoFuncionario.value = "00BR003"
    emailDoFuncionario.value = "ana.silva@banco.com"
}
