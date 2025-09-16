let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
mensagemInicial();

function exibirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial(){
exibirTextoNaTela ("h1" , "Jogo do número secreto");
exibirTextoNaTela("p", `Escolha um número entre 1 e ${numeroLimite}`); 
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;   
    }
}

function verificarChute(){
    let chute = document.querySelector("input").value;
    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1? "tentativas": "tentativa";
        let mensagem = `Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagem);

        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        tentativas++;
        limparCampo();
        if(chute>numeroSecreto){
            exibirTextoNaTela("p", "O número secreto é menor!");
        }else {
            exibirTextoNaTela("p", "O número secreto é maior");
        }
       
    }
}

function limparCampo(){
    let chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto =gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}



