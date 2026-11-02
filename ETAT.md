# ETAT — site-dsi-coop

- **statut** : dormant (reprise à la première des deux réponses)
- **en face** : Connie Chow-Petit (logo en SVG, demande envoyée le 28/10) ; Baptiste Nominé (arbitrages des prix, des « depuis » et du mot « coopérative », maquette envoyée le 28/10)
- **date réelle** : aucune — à poser avec Baptiste (point de synchro cdc/dsi jeudi 29/10, 11h-12h)
- **prochaine action** : attendre les retours de Connie (logo) et de Baptiste (arbitrages), puis intégrer
- **risque** : le logo d'origine n'existe qu'en 219x210 px, sous CC BY-SA attribué à Connie. Contourné le 2026-11-02 : 7 SVG vectorisés depuis les PNG 500x500 Canva, propres jusqu'à 300 px de large (voir `01-brief/materia/logos-svg/`)

## Périmètre

1. Refonte complète de dsi.coop : one page, statique, from scratch
2. Reprise de l'offre commerciale : 3 formules + tarifs, à valider avec Baptiste

## État au 28/10 (fin de session)

**DA retenue : variante C « Le manuel », carte blanche.** Orange signal `#F26B2E`, encre
`#16233A`, Bricolage Grotesque + Atkinson Hyperlegible, filets pleins, numéros encerclés,
listes de définitions. Export reçu et archivé dans `02-design/retenue-variante-c/`.

Reste à corriger avant intégration (détail dans `02-design/revue-variante-c-2026-10-28.md`) :
menu mobile qui déborde, page mentions légales absente, chapeau « quatre » pour cinq
organisations, section références trop longue (un quart de la page).

## Reste à faire

- [x] Envoyer la maquette et les arbitrages à Baptiste (28/10) et demander le logo à Connie (28/10)
- [x] Vectoriser les logos depuis les PNG Canva 500x500 (2026-11-02, 7 SVG dans `01-brief/materia/logos-svg/`) : débloque la mise en ligne
- [x] Rendu validé par Hugo le 2026-11-02 : les SVG tracés font l'affaire pour le site
- [ ] Attendre le retour de Connie sur le logo pour remplacer les tracés automatiques par l'export Canva natif
- [ ] Attendre les arbitrages de Baptiste (prix, dates « depuis », mot « coopérative »)
- [ ] Corriger le menu mobile (menu burger) et produire la page mentions légales
- [ ] Trancher sur la section références (raccourcir ou déplier)
- [ ] Reprendre une photo de Hugo dans le registre de celle de Baptiste, ou passer les deux en noir et blanc
- [ ] Trancher la stack de déploiement (Infomaniak statique, ou serveur Podman existant)
- [ ] Clarifier les accès : admin WordPress, Infomaniak, qui reste éditrice du site
- [ ] Intégration en HTML/CSS autonome, sans React ni runtime
- [ ] Recette et mise en ligne

## Matière disponible

- `01-brief/constat-site-actuel.md` : constat complet de l'existant
- `01-brief/materia/` : capture pleine page de l'accueil, PNG sources 500x500 et logo d'origine
- `01-brief/materia/logos-svg/` : les 7 SVG vectorisés + `README.md` (méthode et limite)
- `01-brief/materia/comparatif-logos.html` : comparatif PNG / SVG à 88, 28 et grand format
- `02-design/prompt-claude-design-v1.md` : le prompt des 3 variantes
- `02-design/references/` : 8 sites de référence capturés
- `02-design/retenue-variante-c/` : l'export retenu + captures desktop et mobile
- `02-design/revue-variante-c-2026-10-28.md` : la revue complète, corrections et arbitrages
