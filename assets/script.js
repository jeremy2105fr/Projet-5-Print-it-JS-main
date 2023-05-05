document.addEventListener("DOMContentLoaded", function () {
  const arrowLeft = document.getElementById("arrow-left");
  const arrowRight = document.getElementById("arrow-right");

  class slideTxt {
    constructor(haut , bas) {
      this.haut = haut;
      this.bas = bas;
    }
  }
  
  let txtCarousel1 = new slideTxt("Impressions tous formats","en boutique et en ligne");
  

// Fleches 
  arrowLeft.addEventListener("click", function () {
    console.log("gauche");
  });

  arrowRight.addEventListener("click", function () {
    console.log("droite");
  });
});
