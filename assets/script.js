// Attent le chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  //Gère les flèches et les boutons
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");
  const bot1 = document.getElementById("dot-1");
  const bot2 = document.getElementById("dot-2");
  const bot3 = document.getElementById("dot-3");
  const bot4 = document.getElementById("dot-4");

  // const slides = document.getElement(".banner-img");
  let currentSlide = 1;
  //Permet de limiter le nombre de slide de 1 à 4
  function limiteSlide() {
    if (currentSlide < 1) {
      currentSlide = 4;
    }
    if (currentSlide > 4) {
      currentSlide = 1;
    }
    return currentSlide;
  }
  // Permet de changer de slide
  function changeSlide(currentSlide) {
    const slides = [
      {
        image: "slide1.jpg",
        tagLine:
          "Impressions tous formats <span>en boutique et en ligne</span>",
      },
      {
        image: "slide2.jpg",
        tagLine:
          "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
      },
      {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
      },
      {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
      },
    ];
    const slide = slides[currentSlide - 1];
    const image = document.createElement("img");
    image.src = slide.image;
    tagLineSlide.innerText = slide.tagLine;
    const banner = document.getElementById("banner");
    const carousel = document.getElementById("carousel");

    const tagLineSlide = document.createElement("p");
    banner.appendChild(tagLineSlide);
    carousel.appendChild(image);
  }
  // Fleches
  // Fleche gauche
  arrowLeft.addEventListener("click", function () {
    currentSlide--;
    limiteSlide(); // Veiller a bien placer la fonction limiteSlide() apres le currentSlide--
    console.log("====> curentSlide", currentSlide);
    return currentSlide;
  });
  // Fleche droite
  arrowRight.addEventListener("click", function () {
    currentSlide++;
    limiteSlide(); // Veiller a bien placer la fonction limiteSlide() apres le currentSlide++
    console.log("====> curentSlide", currentSlide);
    return currentSlide;
  });

  //Boutons
  bot1.addEventListener("click", function () {
    currentSlide = 1;
    console.log("====> curentSlide", currentSlide);
    return currentSlide;
  });

  bot2.addEventListener("click", function () {
    currentSlide = 2;
    console.log("====> curentSlide", currentSlide);
    return currentSlide;
  });

  bot3.addEventListener("click", function () {
    currentSlide = 3;
    console.log("====> curentSlide", currentSlide);
    return currentSlide;
  });

  bot4.addEventListener("click", function () {
    currentSlide = 4;
    console.log("====> curentSlide", currentSlide);
    return currentSlide;
  });

  changeSlide();
});
