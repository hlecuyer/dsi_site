# ETAT — site-dsi-coop

- **statut** : actif — site déployé, en attente de la bascule du domaine
- **en face** : Baptiste Nominé (arbitrages : prix, dates « depuis », mot « coopérative ») ; Connie Chow-Petit (éditrice du site, accord nécessaire pour la bascule DNS)
- **date réelle** : aucune — bascule du domaine à caler avec Connie et Baptiste
- **prochaine action** : basculer les DNS de dsi.coop vers GitHub Pages, une fois les accès Infomaniak et l'accord de Connie obtenus
- **risque** : le site est en ligne sur `hlecuyer.github.io/dsi_site/` mais `dsi.coop` pointe encore sur l'ancien WordPress Infomaniak. Les prix, dates « depuis » et clients nommés affichés sont les placeholders de la maquette, non validés par Baptiste

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
- [x] Corriger le menu mobile (burger), chapeau « cinq », section références resserrée (2026-11-02)
- [x] Produire la page mentions légales (2026-11-02)
- [x] Intégration en HTML/CSS autonome, sans React ni runtime (2026-11-02, `docs/`)
- [x] Trancher la stack de déploiement : GitHub Pages, branche `main`, dossier `/docs` (2026-11-02)
- [x] Recette : Lighthouse 100/100/100/100, 235 Ko, LCP 1,8 s (2026-11-02)
- [x] Mise en ligne sur `https://hlecuyer.github.io/dsi_site/` (2026-11-02)
- [x] Photo de Hugo : on garde les deux portraits tels quels (décision du 02/11)
- [ ] Bascule du domaine dsi.coop vers GitHub Pages (DNS Infomaniak + accord de Connie)
- [ ] Attendre les arbitrages de Baptiste (prix, dates « depuis », mot « coopérative »), puis corriger `docs/index.html` en une passe
- [ ] Accord écrit des 5 organisations pour la reproduction de leur logo
- [ ] Remplir `03-livraison/passation.md` une fois le domaine basculé

## Matière disponible

- `docs/` : **le site en production** (index.html, styles.css, script.js, mentions-legales.html, robots.txt, sitemap.xml, assets/)
- `01-brief/constat-site-actuel.md` : constat complet de l'existant
- `01-brief/materia/` : capture pleine page de l'accueil, PNG sources 500x500 et logo d'origine
- `01-brief/materia/logos-svg/` : les 7 SVG vectorisés + `README.md` (méthode et limite)
- `01-brief/materia/comparatif-logos.html` : comparatif PNG / SVG à 88, 28 et grand format
- `02-design/prompt-claude-design-v1.md` : le prompt des 3 variantes
- `02-design/references/` : 8 sites de référence capturés
- `02-design/retenue-variante-c/` : l'export retenu + captures desktop et mobile
- `02-design/revue-variante-c-2026-10-28.md` : la revue complète, corrections et arbitrages
- `03-livraison/qa-rapport.md` : recette Lighthouse et vérifications techniques

## Déploiement

Repo `hlecuyer/dsi_site` (public), branche `main`, GitHub Pages sur `/docs`.
URL de preview : https://hlecuyer.github.io/dsi_site/
Domaine cible : dsi.coop, bascule DNS encore à faire.
