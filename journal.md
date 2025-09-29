

Le 23 septembre, j’ai commencé par créer un dossier sur le **Bureau**. Ensuite, avec **Visual Studio Code**, j’ai généré une application **Next.js** avec la commande `npx create-next-app`. Le problème, c’est que l’application s’est retrouvée **dans le dossier que j’avais créé en premier**, alors que je voulais qu’elle soit directement sur le Bureau.

La bonne méthode, c’est d’**ouvrir Visual Studio Code**, rester dans le terminal intégré, et créer l’application **directement dans le Bureau**, sans déplacer de dossiers.

Voici le processus complet que je voulais suivre :

1. **Créer le projet Next.js**

   * Ouvrir Visual Studio Code
   * Dans le terminal intégré :

     ```bash
     cd ~/Desktop       # se placer sur le Bureau
     npx create-next-app hop
     ```
   * Suivre les questions interactives de `create-next-app` pour choisir :

     * JavaScript (débutant)
     * Pas de TypeScript
     * Pas de dossier `src/`
     * Pages Router
     * Turbopack non
     * Alias d’import non

2. **Initialiser le repository GitHub**

   * Créer un dépôt vide sur GitHub nommé `hop`
   * Dans le terminal local :

     ```bash
     cd hop
     git init
     git add .
     git commit -m "Initial commit - projet Hop"
     git remote add origin https://github.com/ton_nom_utilisateur/hop.git
     git push -u origin main
     ```

3. **Créer une nouvelle branche pour expérimenter**

   * Avant d’ajouter Sanity ou un CMS, créer une branche `dev` pour **tester les nouvelles fonctionnalités sans toucher à la version stable** :

     ```bash
     git checkout -b dev
     ```
   * Cela permet d’éviter de devoir **supprimer à nouveau le projet** si quelque chose bloque.

4. **Vérifier l’application en local**

   * Dans le terminal :

     ```bash
     npm run dev
     ```
   * Ouvrir [http://localhost:3000](http://localhost:3000) pour s’assurer que le projet fonctionne

5. **Déployer sur Vercel**

   * S’inscrire ou se connecter sur **Vercel**
   * Lier le dépôt GitHub `hop` à Vercel
   * Dans les options de build : cocher les 3 premières cases, laisser la quatrième décochée
   * Choisir **NPM** comme gestionnaire de packages

6. **Sanity / CMS**

   * Mon problème est survenu lorsque j’ai essayé d’ajouter **Sanity**
   * J’ai déplacé des dossiers par erreur, ce qui a embrouillé l’architecture du projet
   * Résultat : j’étais perdu et le projet ne fonctionnait plus

7. **Repartir de zéro**

   * Le 24 septembre, après avoir passé la matinée dessus, j’ai décidé de tout **supprimer et recommencer**
   * Cela m’a pris environ 30 à 45 minutes, alors que la veille, j’avais mis 3 heures pour arriver à ce stade

8. **Prochaines étapes**

   * Installer un nouveau **CMS** proprement sur la branche `dev`
   * Continuer à utiliser **Next.js**, **GitHub**, et **Vercel**
   * Suivre un workflow clair pour éviter de se perdre dans l’architecture
 * 

Reprise du lundi 29 septembre.
Un peu difficile de lire la documentation de Sanity ; finalement, je me suis encore aidé de ChatGPT, qui m’a permis de comprendre pas mal de choses et de réussir à configurer moi-même le projet.

D’abord, il faut créer des fichiers correspondant aux différentes catégories, à placer dans le dossier **schemaTypes**.
Ensuite, dans le fichier **index.ts**, on importe chaque fichier de catégorie et on l’ajoute au tableau `schema.types` pour qu’il soit pris en compte.
------------------------------------------------------------------------------------------------------------------------------------------------------------------




