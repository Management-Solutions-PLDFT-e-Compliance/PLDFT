const fileInput = document.getElementById("fileInput");
const uploadLabel = document.querySelector(".upload-label");
const dragArea = document.getElementById("dragArea");
const fileName = document.getElementById("file-name");

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
}
