document.getElementById("foto").addEventListener("change", function () {
  var file = this.files[0];
  if (file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      alert("Arquivo carregado!");
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var mensagem = document.getElementById("mensagem");
  mensagem.innerText =
    "Parabéns! Seu formulário foi enviado. Aguarde a aprovação.";
  mensagem.style.display = "block";

  setTimeout(function () {
    document.getElementById("myForm").reset();
    mensagem.style.display = "none";
  }, 3000);
});
