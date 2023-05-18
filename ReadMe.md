# Print-It WebSite v.1

Fonctionnement du script du carousel:

Attend le chargement de la page avant d'executer le script, met un place un array contenant le les images et les texte à afficher pour le carousel dans slides[].
Définition des varaibles pour les boutons via getDocumentByID,
et de la slide actuel --> currentSlide.

limiteSlide();
Définis les "limites" du slide après la slide 4 on repasse à la 1ere et inversement, en fonction de currentSLide.

changeSlide();
A chaques interactions boutons/fleche, on vide au préalable puis on rajoute dans le html la nouvelle image et le texte, contenu dans slides[].

slideToDots();
A chaques changements de slides, les boutons correspondant à la slide modifie les autres dots pour enlever toutes class dot_selected et se rajoute cet même classe pour la slide actuel.

dots();
Utilise slideToDots(), changeSlide() et renvoie la nouvelle valeur de currentSlide.

arrows();
Utilise limiteSlide() et dots(), pour effectuer un carousel infini.

Mise en place un eventListener sur les boutons et les fleches, qui redéfinissent currentSlide au clic, et appellent les fonctions.

Un appel inital de changeSlide() qui affiche la currentSlide qui est définie de base à 1 juste après le changement de la page, avant l'interaction.
