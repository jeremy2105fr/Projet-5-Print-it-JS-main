// Attend le chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  // Variables
  // Gère les flèches et les boutons
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");
  const dot1 = document.getElementById("dot-1");
  const dot2 = document.getElementById("dot-2");
  const dot3 = document.getElementById("dot-3");
  const dot4 = document.getElementById("dot-4");
  const slides = [
    {
      image: "assets/images/slideshow/slide1.jpg",
      tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
      image: "assets/images/slideshow/slide2.jpg",
      tagLine:
        "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
      image: "assets/images/slideshow/slide3.jpg",
      tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
      image: "assets/images/slideshow/slide4.png",
      tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
  ];
  // Définie la slide de "base" et permet de régler les slides suivantes
  let currentSlide = 1;
  // Fonctions
  // Permet de limiter le nombre de slide de 1 à 4
  function limiteSlide() {
    if (currentSlide < 1) {
      currentSlide = 4;
    }
    if (currentSlide > 4) {
      currentSlide = 1;
    }
    return currentSlide;
  }
  // Permet de changer les slides
  function changeSlide() {
    // Selectionne des élements html par l'ID
    const banner = document.getElementById("texte");
    const carousel = document.getElementById("carousel");
    // Selectionne des élements du tableau
    let image = slides[currentSlide - 1].image;
    let tagLineSlide = slides[currentSlide - 1].tagLine;
    // Remplacement des élements html par les élements du tableau
    // Supprime l'image et en rajoute une nouvelle
    carousel.innerHTML = "";
    // Création d'une balise img
    const imageSlide = document.createElement("img");
    // Supprime le texte et en rajoute un nouveau
    banner.innerHTML = "";
    // Création d'une balise p
    const tagLine = document.createElement("p");
    // Redefinie la source de l'image
    imageSlide.src = image;
    // Redefinie le texte contenue dans la balise p
    tagLine.innerHTML = tagLineSlide;
    // Ajoute des élements html dans le DOM
    banner.appendChild(tagLine);
    carousel.appendChild(imageSlide);
  }
  // Permet d'activer le changement de class des dots lors du changement de slide
  function slideToDots() {
    if (currentSlide === 1) {
      dot1.classList.add("dot_selected");
      dot2.classList.remove("dot_selected");
      dot3.classList.remove("dot_selected");
      dot4.classList.remove("dot_selected");
    }
    if (currentSlide === 2) {
      dot1.classList.remove("dot_selected");
      dot2.classList.add("dot_selected");
      dot3.classList.remove("dot_selected");
      dot4.classList.remove("dot_selected");
    }
    if (currentSlide === 3) {
      dot1.classList.remove("dot_selected");
      dot2.classList.remove("dot_selected");
      dot3.classList.add("dot_selected");
      dot4.classList.remove("dot_selected");
    }
    if (currentSlide === 4) {
      dot1.classList.remove("dot_selected");
      dot2.classList.remove("dot_selected");
      dot3.classList.remove("dot_selected");
      dot4.classList.add("dot_selected");
    }
  }
  // Fonctions communes aux fleches et aux boutons
  function dots() {
    slideToDots(); // Appel de la fonction slideToDots
    changeSlide(); // Appel de la fonction changeSlide
    return currentSlide; // Retourne la nouvelle valeur à la slide actuelle
  }
  function arrows() {
    limiteSlide(); // Permet l'appel de la fonction limiteSlide
    dots(); // Appel de la fonction dots, qui possède déja les fonctions et la commande qui seront appelées ici
  }

  // Fleches
  // Fleche gauche
  arrowLeft.addEventListener("click", function () {
    currentSlide--;
    arrows(); // Permet l'appel de la fonction arrows qui est commune aux fleches
  });
  // Fleche droite
  arrowRight.addEventListener("click", function () {
    currentSlide++;
    arrows();
  });

  //Boutons
  dot1.addEventListener("click", function () {
    currentSlide = 1;
    dots(); // Permet l'appel de la fonction dots qui est commune aux boutons
  });
  dot2.addEventListener("click", function () {
    currentSlide = 2;
    dots();
  });
  dot3.addEventListener("click", function () {
    currentSlide = 3;
    dots();
  });
  dot4.addEventListener("click", function () {
    currentSlide = 4;
    dots();
  });
  // Appel initiale de la fonction changeSlide
  changeSlide();
});
