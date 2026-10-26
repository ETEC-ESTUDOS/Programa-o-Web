const botaoTrcTema = document.getElementById("trcTema");
const divTrcTema = document.getElementById("escTema");

function TrocaTema(tema){
    const cabecalho = document.querySelector('.cabecalho');
    const cards = document.querySelectorAll('.card');
    const paises = document.querySelectorAll('.pais');
    const links = document.querySelectorAll('.card-texto a');
    if(tema == "escuro"){
        botaoTrcTema.style.left = "75%"
        botaoTrcTema.src = "./images/escTema/icon-dark.svg"
        document.body.style.backgroundColor = "#181824"
        document.body.style.color = "#eee"
        cabecalho.style.backgroundColor = "#10101c"
        for(i=0;i<cards.length;i++){
            cards[i].style.backgroundColor = "#252538"
            cards[i].style.border = "1px solid #3a3a55";
        }
        for(let i = 0; i < paises.length; i++) {
            paises[i].style.color = "#aaa"
        }
        for(let i = 0; i < links.length; i++){
            links[i].style.color = "#8ecae6"
        }
    }else if(tema == "claro"){
        botaoTrcTema.style.left = "0%";
        botaoTrcTema.src = "./images/escTema/icon-light.svg";
        document.body.style.backgroundColor = "#f4f4f4";
        document.body.style.color = "#333";
        cabecalho.style.backgroundColor = "#2c2e91";
        for (i = 0; i < cards.length; i++) {
          cards[i].style.backgroundColor = "#fff";
          cards[i].style.border = "1px solid #ddd";
        }
        for (let i = 0; i < paises.length; i++) {
          paises[i].style.color = "#777";
        }
        for (let i = 0; i < links.length; i++) {
          links[i].style.color = "#2e2e91";
        }  
    }
}

// botaoTrcTema.addEventListener("click", () => {
//   const estiloAtual = window.getComputedStyle(botaoTrcTema);
//   if (estiloAtual.left === "0px") {
//     TrocaTema("escuro");
//   } else if (estiloAtual.left === "225px") {
//     TrocaTema("claro");
//   }
// });

divTrcTema.addEventListener("click", () => {
  const estiloAtual = window.getComputedStyle(botaoTrcTema);
  if (estiloAtual.left === "0px") {
    TrocaTema("escuro");
  } else if (estiloAtual.left === "225px") {
    TrocaTema("claro");
  }
});
