
function habilitaEdicao(divId){
    divEditar = document.getElementById(divId);
    
    divEditar.setAttribute('contenteditable', true);
    divEditar.focus();
    divEditar.classList.add("divEditavel");
}

function desabilitaEdicao(divId){
    divEditar = document.getElementById(divId);
    
    divEditar.setAttribute('contenteditable', false);
    divEditar.classList.remove("divEditavel");
}

function comunicarCoaf(){
    Swal.fire({
        icon: "success",
        title: "Relatório comunicado para COAF!",
      }).then((result) => {
        if(result.isConfirmed){
            window.location.href = '../analiseAlerta/analiseAlerta.html';
        }else{
            window.location.href = '../analiseAlerta/analiseAlerta.html';
        }
      })
}

function arquivarRelatorio(){
    Swal.fire({
        icon: "success",
        title: "Relatório arquivado!",
      }).then((result) => {
        if(result.isConfirmed){
            window.location.href = '../analiseAlerta/analiseAlerta.html';
        }else{
            window.location.href = '../analiseAlerta/analiseAlerta.html';
        }
      })
}

function comunicarGestor(){
    Swal.fire({
        icon: "success",
        title: "Relatório encaminhado para o(a) gestor(a) responsável!",
      }).then((result) => {
        if(result.isConfirmed){
            window.location.href = '../analiseAlerta/analiseAlerta.html';
        }else{
            window.location.href = '../analiseAlerta/analiseAlerta.html';
        }
      })
}