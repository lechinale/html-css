let fundoAtual = 1;

function mudar() {
    const body = document.body;

    if (fundoAtual === 1) {
        body.style.backgroundImage = "url('imagens/wallpaper001.jpg')";
        fundoAtual = 2;
    } else {
        body.style.backgroundImage = "url('imagens/wallpaper004.jpg')";
        fundoAtual = 1;
    }
}
