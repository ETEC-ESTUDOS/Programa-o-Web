
// --- Seleção dos elementos ---
const divTrcTema = document.getElementById("escTema")
const header = document.getElementsByClassName("titulo")[0]; // <header class="titulo">
const h1 = document.getElementsByClassName("titulo")[1];      // <h1 class="titulo">
const h2 = header.getElementsByTagName("h2")[0];               // <h2> dentro do header

const cards = document.getElementsByClassName("card");         // todos os .card
const thumbs = document.getElementsByClassName("thumb");       // todos os .thumb
const nums = document.getElementsByClassName("num");           // todos os .num
const generos = document.getElementsByClassName("genre");      // todos os .genre
const infoGames = document.getElementsByClassName("infoGame"); // todos os .infoGame (pra pegar h4 e p de dentro)

const escTema = document.getElementById("escTema");
const botaoTrcTema = document.getElementById("trcTema");

// --- Função de troca de tema ---
function TrocaTema(tema) {
    botaoTrcTema.style.animation = tema === "escuro"
    ? "moverParaDireita 1s ease 1 forwards"
    : "moverParaEsquerda 1s ease 1 forwards";
    if (tema === "claro") {
        botaoTrcTema.style.left = "0px"
        document.body.style.backgroundColor = "#0b0b0b";
        document.body.style.color = "#dddddd";

        h1.style.color = "#e5e5e5";
        h2.style.color = "#aaaaaa";

        for (let i = 0; i < cards.length; i++) {
            const h3 = cards[i].getElementsByTagName("h3")[0];
            cards[i].style.backgroundColor = "#000000";
            cards[i].style.borderColor = "#333333";
            cards[i].style.boxShadow = "2px 2px 6px rgba(255, 255, 255, 0.15)";
            h3.style.color = "#eeeeee"
        }

        for (let i = 0; i < thumbs.length; i++) {
            thumbs[i].style.backgroundColor = "#cccccc";
            thumbs[i].style.color = "#000000";
        }

        for (let i = 0; i < nums.length; i++) {
            nums[i].style.color = "#777777";
        }

        for (let i = 0; i < generos.length; i++) {
            generos[i].style.color = "#999999";
        }

        for (let i = 0; i < infoGames.length; i++) {
            const h4 = infoGames[i].getElementsByTagName("h4")[0];
            const p = infoGames[i].getElementsByTagName("p")[0];
            h4.style.color = "#bbbbbb";
            p.style.color = "#cccccc";
        }

        botaoTrcTema.src = "./images/escTema/icon-dark.svg";

    } else if (tema === "escuro") {
        botaoTrcTema.style.left = "225px"
        document.body.style.backgroundColor = "#f4f4f4";
        document.body.style.color = "#222";

        h1.style.color = "#1a1a1a";
        h2.style.color = "#555";

        for (let i = 0; i < cards.length; i++) {
            const h3 = cards[i].getElementsByTagName("h3")[0];
            cards[i].style.backgroundColor = "#ffffff";
            cards[i].style.borderColor = "#cccccc";
            cards[i].style.boxShadow = "2px 2px 6px rgba(0, 0, 0, 0.15)";
            h3.style.color = "#111"
        }

        for (let i = 0; i < thumbs.length; i++) {
            thumbs[i].style.backgroundColor = "#333333";
            thumbs[i].style.color = "#ffffff";
        }

        for (let i = 0; i < nums.length; i++) {
            nums[i].style.color = "#888888";
        }

        for (let i = 0; i < generos.length; i++) {
            generos[i].style.color = "#666666";
        }

        for (let i = 0; i < infoGames.length; i++) {
            const h4 = infoGames[i].getElementsByTagName("h4")[0];
            const p = infoGames[i].getElementsByTagName("p")[0];
            h4.style.color = "#444444";
            p.style.color = "#333333";
        }

        botaoTrcTema.src = "./images/escTema/icon-light.svg";
    }
}
divTrcTema.addEventListener('click',() => {
    const estiloAtual = window.getComputedStyle(botaoTrcTema)
    if(estiloAtual.left === "0px"){
        TrocaTema("escuro")
    }else if(estiloAtual.left === "225px"){
        TrocaTema("claro")
    } 
})

document.querySelectorAll('.card').forEach(function (card) {
    card.addEventListener('click', function () {
      var wasOpen = card.classList.contains('is-open');
      document.querySelectorAll('.card.is-open').forEach(function (c) {
        c.classList.remove('is-open');
      });
      if (!wasOpen) card.classList.add('is-open');
    });})
