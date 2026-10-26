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
let indice = 0;

setInterval(() => {
  carregarCard()
  indice++
  if(indice >= Tecnologias.length){
    indice = 0
  }
  console.log(indice)
},5000)