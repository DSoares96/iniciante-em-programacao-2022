
const X = "X";
const O = "O";
let turno;
let trocaVez = true;
let jogador = O;
let fimDeJogo = false;


function reiniciarJogo() {
    location.reload()
}


function selecionarArea(posicaoLinha, posicaoColuna) {

    marcarJogadorAtivo(jogador);
    if (fimDeJogo) {
        return;
    }

    if (!fimDeJogo) {
        if (trocaVez) {
            jogador = X;
            desenharSimbolo("X", posicaoLinha, posicaoColuna);

        } if (trocaVez == false) {
            desenharSimbolo("O", posicaoLinha, posicaoColuna)
            jogador = O;
        }

        turno = trocaVez ? X : O;
        trocaVez = !trocaVez;
    }
    exibirResultado("o vencedor é " + jogador);
    fimDeJogo = verificaVencedor(jogador);
}


function verificaVencedor() {

    const quadrado = document.querySelectorAll(".quadrado-jogo");
    for (let i = 0; i < quadrado.length; i++) {

        let a1 = quadrado[0];
        let a2 = quadrado[1];
        let a3 = quadrado[2];
        let b1 = quadrado[3];
        let b2 = quadrado[4];
        let b3 = quadrado[5];
        let c1 = quadrado[6];
        let c2 = quadrado[7];
        let c3 = quadrado[8];

        let vencedor = "";

        if ((a1 == b1 && a1 == c1 && a1 != " ") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "")) {
            vencedor = a1
        } else if ((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")) {
            vencedor = b2;
        } else if (((c3 == c2 && c3 == c1) || (c3 == a3 && c3 == b3)) && c3 != "") {
            vencedor = c3
        }
      
    }
}
