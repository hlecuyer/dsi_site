# CLAUDE.md — atelier site-dsi-coop

Refonte du site vitrine de DSI.coop (fonction mutualisée, ESS / tiers-lieux / communs) et de son offre commerciale.
Hugo et Baptiste Nominé en sont les deux opérateurs. Pas de devis client : c'est leur propre site.

**Contexte, statut et prochaine action : voir `ETAT.md` à la racine.**

---

## Lire dans cet ordre en début de session

1. `ETAT.md`
2. `01-brief/constat-site-actuel.md` — l'état de l'existant, ce qui se garde et ce qui se jette
3. `01-brief/materia/capture-accueil-2026-10-28.png` — le site à remplacer, en pleine page
4. `02-design/` — les directions visuelles et le design system retenu

## Périmètre validé (ne pas dériver)

- **Une seule page**, scroll down, mobile-first, statique (HTML/CSS/JS minimal, pas de framework)
- **From scratch** : on ne réutilise ni le design Divi, ni sa structure de blocs
- **Contenu réécrit intégralement.** Le texte actuel a de la matière (accroche, triptyque, méthode, exemples) mais il est mal hiérarchisé et truffé de fautes
- **Offre commerciale à refaire** : les 3 tarifs actuels (4 000 € audit, 4 000 €/an soutien, 18 000 €/an infogestion) sont invendables tels quels. Structure à proposer, arbitrage avec Baptiste
- **Pas de tracker, pas de dépendance externe.** Le discours est « numérique sobre, dégooglisé, maîtrisé » : le site doit en être la démonstration

## Ce qui n'est pas dans le périmètre

- La maintenance courante de dsi.coop (WordPress actuel, sauvegardes UpdraftPlus) reste dans le projet coffre `Maintenance dsi.coop`
- Les sites clients (Coop des Communs, RELIEF Aura) : hors sujet

## Contraintes

- Le logo n'existe qu'en 130x123 px (`01-brief/materia/logo-dsi.jpg`). CC BY-SA 4.0, attribué à Connie Chow-Petit. Toute refonte graphique du logo passe par elle
- L'éditrice légale du site est Connie Chow-Petit (mentions légales actuelles). Un changement de support peut l'obliger à mettre à jour les mentions
- Baptiste doit valider l'offre avant qu'elle soit publiée

## Règles de travail

- Toute info nouvelle (message, décision, réunion) va dans `ETAT.md` tout de suite
- À la fin de toute session, **mettre à jour `ETAT.md`**, systématiquement, sans demander
- Les maquettes se valident dans le navigateur par Hugo, pas sur parole
