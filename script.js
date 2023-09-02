let saldo = 0;

function atualizarSaldo() {
    document.getElementById("saldo").textContent = `Seu saldo atual é de ${saldo} moedas.`;
}

function adicionarMoedas() {
    const moedas = parseInt(document.getElementById("moedas").value);
    if (!isNaN(moedas) && moedas > 0) {
        saldo += moedas;
        atualizarSaldo();
        document.getElementById("moedas").value = "";
    }
}

function jogar() {
    const aposta = parseInt(document.getElementById("aposta").value);
    const escolha = document.getElementById("escolha").value;

    if (aposta > 0 && aposta <= saldo) {
        const moeda = Math.random() < 0.5 ? "cara" : "coroa";
        document.getElementById("resultado").textContent = `A moeda caiu em ${moeda}.`;

        if (escolha === moeda) {
            saldo += aposta;
            document.getElementById("resultado").textContent += ` Parabéns! Você ganhou ${aposta} moedas.`;
        } else {
            saldo -= aposta;
            document.getElementById("resultado").textContent += ` Você perdeu ${aposta} moedas.`;
        }

        atualizarSaldo();
        document.getElementById("aposta").value = "";
    }
}

function sair() {
    window.close();
}

atualizarSaldo();
