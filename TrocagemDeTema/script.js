const Tecnologias = [
  {
    imagem: "./images/html.png",
    nome: "HTML",
  },
  {
    imagem: "./images/css.png",
    nome: "CSS",
  },
  {
    imagem: "./images/javascript.png",
    nome: "JAVASCRIPT",
  },
  {
    imagem: "./images/python.png",
    nome: "PYTHON",
  },
  {
    imagem: "./images/cpp.png",
    nome: "C++",
  },
  {
    imagem: "./images/java.png",
    nome: "JAVA",
  },
  {
    imagem: "./images/expo.png",
    nome: "EXPO",
  },
  {
    imagem: "./images/react-native.png",
    nome: "REACT NATIVE",
  },
  {
    imagem: "./images/react.png",
    nome: "REACT",
  },
  {
    imagem: "./images/tailwind-css.png",
    nome: "TAILWIND CSS",
  },
];

function carregarCard(){
    imagem.src = Tecnologias[indice].imagem;
    imagem.alt = "Logo " + Tecnologias[indice].nome;
    titulo.textContent = Tecnologias[indice].nome;
}

function anterior() {
  indice--;
  if(indice >= Tecnologias.length){
    indice = 0
  }else if(indice < 0){
    indice = Tecnologias.length
  }
  carregarCard()
}

function proximo() {
  indice++;
  if (indice >= Tecnologias.length) {
    indice = 0;
  } else if (indice < 0) {
    indice = Tecnologias.length;
  }
  carregarCard()
}

const imagem = document.querySelector(".imagem");
const titulo = document.querySelector(".nomeLinguagem");
const botaoTrcTema = document.getElementById("trcTema")
const divTrcTema = document.getElementById("escTema")
let indice = 0;

setInterval(() => {
  carregarCard()
  indice++
  if(indice >= Tecnologias.length){
    indice = 0
  }
  console.log(indice)
},5000)

function TrocaTema(tema){
    const header = document.getElementById("header")
    const menu = document.getElementById("menu")
    const cards = document.getElementsByClassName("card")
    const footer = document.querySelector("footer")
    const progLing = document.querySelector(".progLinguagens")
    const menuTec = document.querySelector(".menuTecnologias")
    if(tema === "escuro"){
        document.body.style.background = "linear-gradient(203deg, #fff, #DDD4D4)"
        botaoTrcTema.style.left = "75%"
        menu.style.background = header.style.background = "linear-gradient(95deg, rgb(142, 72, 72), #4b0000d1)"
        progLing.style.background = menuTec.style.background = "linear-gradient(52deg, #ff8282, #f45252)"
        footer.style.background = "radial-gradient( #FFFFFF, #E0E0E0)"
        footer.style.color = "#1a1a00"
        for(let i = 0; i < cards.length; i++){
            cards[i].style.background = "radial-gradient( #f62d2d, #4b2828)"
        }
    }else if(tema === "claro"){
        botaoTrcTema.style.left = "0%"
        document.body.style.background = "linear-gradient(203deg, #000000, #1d1717)"
        menu.style.background = header.style.background = "linear-gradient(100deg, rgb(34, 0, 0), #860000d1)"
        progLing.style.background = menuTec.style.background = "linear-gradient(52deg, #292828, #920000)"
        footer.style.background = "radial-gradient(#000, #1f1f1f)"
        footer.style.color = "#ffd"
        for(let i = 0; i < cards.length; i++){
            cards[i].style.background = "radial-gradient(#920000, #330000)"
        }
    }
}
botaoTrcTema.addEventListener('click',() => {
    const estiloAtual = window.getComputedStyle(botaoTrcTema)
    if(estiloAtual.left === "0px"){
        TrocaTema("escuro")
    }else if(estiloAtual.left === "225px"){
        TrocaTema("claro")
    }
})

divTrcTema.addEventListener('click',() => {
    const estiloAtual = window.getComputedStyle(botaoTrcTema)
    if(estiloAtual.left === "0px"){
        TrocaTema("escuro")
    }else if(estiloAtual.left === "225px"){
        TrocaTema("claro")
    } 
})