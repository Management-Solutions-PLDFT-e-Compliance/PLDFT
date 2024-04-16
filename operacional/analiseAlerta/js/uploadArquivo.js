function uploadFiles() {
    var fileInput = document.getElementById('file-input');
    var uploadedFilesList = document.getElementById('uploaded-files');

    // console.log(fileInput.files.length)

    var fileName = fileInput.files[0].name;
    var listItem = document.createElement('li');
    listItem.textContent = fileName;
    uploadedFilesList.appendChild(listItem);

    // Limpa a lista de arquivos enviados
    // uploadedFilesList.innerHTML = uploadedFilesList.innerHTML + ;
    // console.log(uploadFiles.length)
    // Itera sobre os arquivos selecionados
    // for (var i = 0; i < fileInput.files.length; i++) {
        
    // }
}