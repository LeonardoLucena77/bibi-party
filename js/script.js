function confirmarPresenca() {
    var nome = document.getElementById("nome").value;
    var presenca = document.getElementById("presenca").value;
    var telefoneBibi = "5511977328791"; 

    if (nome.trim() === "") {
        alert("Por favor, digite seu nome.");
        return;
    }

    var mensagem = "Olá Bibi! Meu nome é " + nome + " e gostaria de confirmar minha presença na sua festa! Minha resposta é: " + presenca + ".";
    var linkWhatsApp = "https://wa.me/" + telefoneBibi + "?text=" + encodeURIComponent(mensagem);

    window.location.href = linkWhatsApp;
}