# dsi.coop

Site de DSI.coop : une page statique, plus les mentions légales.

Aucun framework, aucun runtime, aucun traceur. Trois fichiers pour le site, plus les
ressources.

```
docs/
├── index.html          # la page unique
├── mentions-legales.html
├── styles.css
├── script.js           # menu mobile uniquement
├── robots.txt
├── sitemap.xml
└── assets/
    ├── logo-dsi-coop.svg        # logo complet (glyphes + « dsi.coop »)
    ├── logo-dsi-marque.svg      # glyphes seuls, pour le header
    ├── favicon.svg
    ├── apple-touch-icon.png
    ├── partage.png              # image Open Graph 1200 × 630
    ├── logo-*.webp              # logos des organisations citées
    ├── portrait-*.webp
    └── fonts/                   # Atkinson Hyperlegible + Bricolage Grotesque
```

## Direction artistique

Orange signal `#F26B2E`, encre `#16233A`, papier blanc. Bricolage Grotesque pour les
titres, Atkinson Hyperlegible pour le corps (police conçue pour la basse vision).

## Développement

```bash
python3 -m http.server 8000 --directory docs
```

Puis ouvrir http://localhost:8000/.

## Déploiement

GitHub Pages, branche `main`, dossier `/docs`.

## Modifier un contenu

Le texte est dans `index.html`, en clair entre les balises. La mise en forme est dans
`styles.css`, pilotée par des classes (`.heros`, `.offre`, `.reference`…) et par des
variables CSS en haut du fichier pour les couleurs et les polices.

## Licence

Contenu sous Creative Commons BY-SA 4.0. Polices sous SIL Open Font License 1.1.
