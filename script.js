const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está no início de sua jornada. Qual versículo bíblico você escolhe como seu guia para este caminho?",
        alternativas: [
            {
                texto: "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. (Provérbios 3:5)",
                afirmacao: "Você escolheu a **sabedoria** como sua bússola. "
            },
            {
                texto: "Posso todas as coisas naquele que me fortalece. (Filipenses 4:13)",
                afirmacao: "Você escolheu a **força** como seu escudo. "
            }
        ]
    },
    {
        enunciado: "Ao longo do caminho, você encontra uma pessoa com muitas dúvidas sobre a fé. Qual sua atitude?",
        alternativas: [
            {
                texto: "Compartilhar meu testemunho, mostrando como a fé transformou minha vida.",
                afirmacao: "Você utilizou seu **testemunho pessoal** para ajudar outra pessoa a encontrar o caminho. "
            },
            {
                texto: "Abrir a Bíblia e explicar os ensinamentos de Jesus com paciência e amor.",
                afirmacao: "Você usou a **Palavra de Deus** como fonte de luz e conhecimento. "
            }
        ]
    },
    {
        enunciado: "Em um momento de dificuldade, você se sente desanimado. O que você faz para renovar suas forças?",
        alternativas: [
            {
                texto: "Busco a oração e a meditação na Palavra para ouvir a voz de Deus.",
                afirmacao: "Você se fortaleceu com a **oração e a meditação**, buscando a comunhão com Deus. "
            },
            {
                texto: "Procuro a comunhão com outros irmãos na fé para compartilhar e ser encorajado.",
                afirmacao: "Você reconheceu a importância da **comunidade** para sua caminhada. "
            }
        ]
    },
    {
        enunciado: "Sua jornada te leva a uma comunidade que precisa de ajuda. Qual é a melhor forma de servir?",
        alternativas: [
            {
                texto: "Utilizar meus talentos e habilidades para servir de forma prática, como voluntário.",
                afirmacao: "Você serviu com seus **talentos**, colocando em prática os dons que Deus te deu. "
            },
            {
                texto: "Contribuir financeiramente e em oração para o trabalho da comunidade.",
                afirmacao: "Você serviu com sua **generosidade**, abençoando o trabalho com seus recursos. "
            }
        ]
    },
    {
        enunciado: "No final de sua jornada, você olha para trás e reflete sobre tudo o que viveu. O que você aprendeu de mais valioso?",
        alternativas: [
            {
                texto: "Que a fé é uma jornada de constante aprendizado e humildade, onde Deus é o guia.",
                afirmacao: "Sua jornada te ensinou que a fé é um **caminho contínuo de aprendizado e humildade**. "
            },
            {
                texto: "Que o amor de Deus é a base de tudo, e que nossa missão é compartilhar esse amor com o mundo.",
                afirmacao: "Sua jornada te mostrou que o **amor de Deus** é a maior motivação para viver e servir. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada na fé terminou...";
    caixaAlternativas.textContent = "";
    const caixaResultado = document.createElement("div");
    caixaResultado.classList.add("caixa-resultado");
    const textoResultado = document.createElement("p");
    textoResultado.classList.add("texto-resultado");
    textoResultado.textContent = historiaFinal;
    caixaResultado.appendChild(textoResultado);
    caixaPrincipal.appendChild(caixaResultado);
}

mostraPergunta();