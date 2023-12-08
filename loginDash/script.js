document.getElementById('formLogin').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const usuario = document.getElementById('loginUsuario').value;
  const senha = document.getElementById('loginSenha').value;

  if (usuario.trim() !== '' && senha.trim() !== '') {
      localStorage.setItem('usuario', usuario);
      window.location.href = './home/home.html';
  } else {
    Swal.fire({
      icon: "error",
      title: "Por favor, preencha todos os campos."
    });
  }
});
