/* DSI.coop — comportements
   Rien d'autre que le menu mobile. Aucune dépendance, aucun traceur. */

(function () {
  "use strict";

  /* Dès que ce fichier s'exécute, le menu peut fonctionner :
     on retire .no-js pour activer le burger. */
  document.documentElement.classList.remove("no-js");

  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav-principal");
  if (!burger || !nav) return;

  function estOuvert() {
    return nav.getAttribute("data-ouvert") === "true";
  }

  function ouvrir() {
    nav.setAttribute("data-ouvert", "true");
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Fermer le menu");
  }

  function fermer() {
    nav.setAttribute("data-ouvert", "false");
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Ouvrir le menu");
  }

  burger.addEventListener("click", function () {
    if (estOuvert()) fermer();
    else ouvrir();
  });

  /* Un clic sur un lien referme le panneau */
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) fermer();
  });

  /* Échap referme et rend le focus au bouton */
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && estOuvert()) {
      fermer();
      burger.focus();
    }
  });

  /* Un clic hors du panneau referme */
  document.addEventListener("click", function (event) {
    if (!estOuvert()) return;
    if (nav.contains(event.target) || burger.contains(event.target)) return;
    fermer();
  });

  /* Si la fenêtre repasse en desktop, on remet l'état neutre */
  var media = window.matchMedia("(min-width: 901px)");
  var surChangement = function (event) {
    if (event.matches) fermer();
  };
  if (media.addEventListener) media.addEventListener("change", surChangement);
  else if (media.addListener) media.addListener(surChangement);
})();
