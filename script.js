const imagemVisualizacao = document.getElementById("imagem-visualizacao");
const tituloProduto = document.getElementById("titulo-produto");
const nomeCor = document.getElementById("nome-cor-selecionada");
const miniaturaImg0 = document.getElementById("0-imagem-miniatura");
const miniaturaImg1 = document.getElementById("1-imagem-miniatura");
const miniaturaImg2 = document.getElementById("2-imagem-miniatura");

const verdeCipreste = {
    nome: "Verde-cipreste",
    pasta: "imagens-verde-cipreste"
};

const azulInverno = {
    nome: "Azul-inverno",
    pasta: "imagens-azul-inverno"
};

const meiaNoite = {
    nome: "Meia-noite",
    pasta: "imagens-meia-noite"
};

const estelar = {
    nome: "Estelar",
    pasta: "imagens-estelar"
};

const rosaClaro = {
    nome: "Rosa-claro",
    pasta: "imagens-rosa-claro"
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTam = ["41 mm", "45 mm"];

let imagemSelecionada = 1;
let tamSelecionado = 1;
let corSelecionada = 1;

function trocarImg() {
    const idOpSelecionada = document.querySelector('[name ="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg";
}

function trocarTam() {
    //atualizar variavel de controle do tamanho da caixa (tamSelecionado)
    const idOpSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;

    tamSelecionado = idOpSelecionada.charAt(0);

    //mudar o titulo do produto também 
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTam[tamSelecionado];


    //mudar o tamanho da imagem de acordo com a opção selecionada 
    if(opcoesTam[tamSelecionado] === '41 mm') {
        imagemVisualizacao.classList.add("caixa-pequena");
    } else {
        imagemVisualizacao.classList.remove('caixa-pequena');
    }
        
}

function trocarColor() {
    //atualizar variavel a cor selecionada (corSelecionada)
    const idOpSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idOpSelecionada.charAt(0);

    //trocar o titulo da página
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTam[tamSelecionado];

    //trocar o nome da cor
    nomeCor.innerText = "Cor - " + opcoesCores[corSelecionada].nome;

    //trocar imagens: miniatura
    miniaturaImg0.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-0.jpeg";
    miniaturaImg1.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-1.jpeg";
    miniaturaImg2.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-2.jpeg";
    //trocar imagens de visualizção 
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg";

}