document.getElementById("body").addEventListener("click", Fonction);
  console.log("test");

function Fonction() {
  var element = document.getElementById("body");
  element.classList.toggle("animeBody");
  
  var titre = document.getElementById("titre");
  titre.classList.toggle("animeTitre");
  
  console.log("test2");
}
