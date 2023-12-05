# JEE-Activite-5

Le but de cette activite est de reprendre l'exemple de la démo pour maitriser les concepts fondamentaux de Angular.

### Travail à faire ###
Créer une application web basée sur Angular qui permet de gérer les produits. Chaque Produit est défini par son id, name, price, quantity, available. Le backend de l'application est basé sur une REST API basée sur Json-Server
L'application doit permettre de :
1. Afficher les produits;
2. Chercher les produits;
3. Faire la pagination;
4. Supprimer un produits;
5. Editer un produit;
6. Mettre à jour un produit;
7. Faire l'authentification et protéger les routes.

=> Vidéos à utiliser comme ressources : 
- Partie 1 : https://www.youtube.com/watch?v=Bq-vewCZk-o&authuser=0
- Partie 2 : https://www.youtube.com/watch?v=h0zPn2d4fGI&authuser=0
- Partie 3 : https://www.youtube.com/watch?v=ejQg0Ugm9s8&t=224s&ab_channel=ProfesseurMohamedYOUSSFI
- Partie 4 : https://www.youtube.com/watch?v=ZWQtLaRM49o&authuser=0

### Présentation d'Angular ### 

![angular-3-logo](https://github.com/Ikramouslih/JEE-Activite-6/assets/60039200/ebef6263-bf31-4059-96b0-1e8b83434e09)

Angular est un framework JavaScript open-source basé sur TypeScript. Il permet de construire des applications web dynamiques, single-page (SPA) et multiplateformes. Il offre un ensemble complet d'outils et de fonctionnalités pour simplifier le processus de développement et améliorer l'expérience utilisateur.

Principales caractéristiques et avantages d'Angular :
- Structure MVC : Facilite la séparation des responsabilités et la maintenance du code. Cela rend le développement plus structuré et évolutif.
- Deux-way data binding : Toute modification effectuée dans l'interface utilisateur est automatiquement reflétée dans les données sous-jacentes, et vice versa. Cela permet une synchronisation fluide entre les vues et les modèles de données.
- Injection de dépendances : Facilite la gestion des dépendances entre les composants. Cela rend le code plus modulaire, réutilisable et testable.
- Routing : Permet la navigation entre différentes vues et la gestion des URL. Cela permet la création d'applications à pages multiples tout en maintenant une expérience utilisateur fluide.
- Validation des formulaires : Simplifient la validation des données côté client. Il fournit également des mécanismes pour personnaliser les règles de validation selon les besoins de l'application.
- Performances optimisées : Utilise des techniques telles que le lazy loading, la détection du changement, et la compilation juste-à-temps (JIT) ou à l'avance (AOT).
- Large communauté et écosystème : Des nombreuses ressources, bibliothèques et extensions disponibles pour faciliter le développement.

### La configuration et les dependences du projet ### 

Ce projet a été généré avec [Angular CLI](https://github.com/angular/angular-cli) version 17.0.2.

- Bootstrap & Bootstrap-icons : 
Une bibliothèque open-source de développement front-end pour la conception de sites et d'applications web. Elle fournit des styles CSS prédéfinis, des composants JavaScript et des icônes pour faciliter la création d'interfaces utilisateur esthétiques et responsives.
    * Installation : `npm i bootstrap bootstrap-icon`
- Json-server : 
JSON Server est un outil simple et léger permettant de créer rapidement une fausse API RESTful en utilisant un fichier JSON comme source de données. Il fournit un serveur web minimaliste qui expose les données JSON comme des endpoints REST.
    * Installation : `npm install -g json-server`
    * Lancement du json-server sur le port 8089 : `json-server -w data/db.json -p 8089`
- JWT-decode :
Cette bibliothèque offre une fonction simple (jwtDecode) pour décoder la charge utile d'un JWT côté client. Après l'installation, il suffit d'importer la bibliothèque dans le composant ou le service Angular, puis d'appeler la fonction jwtDecode(token) avec le JWT à décoder. Il est important de noter que la décodage côté client signifie que les informations sont accessibles au client, et les opérations sensibles doivent être gérées côté serveur.
    * Installation : `npm install jwt-decode`

## L'interface utilisateur et les fonctionnalités implémentées ##

## Partie 1 ##

- La liste des produits : 

<img width="958" alt="list" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/0008900f-6e65-45c5-9db9-c8d659e2fc95">
<br><br>

- La possibilité de changer la valeur booléeanne de l'attribut 'checked' avec un bouton.

<img width="960" alt="check" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/4252b465-d086-480b-8a90-4fec67debc2b">
<br><br>

- La recherche d'un produit selon un mot clé : 

<img width="960" alt="search" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/0c66ebe4-378b-4da7-b872-fd92b374a902">
<br><br>

- Le formulaire d'ajout d'un produit :

<img width="953" alt="add 1" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/9ca1b481-8a0a-430a-aaf7-9702835cd56b">
<img width="960" alt="add fill" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/6c6b0258-1f1d-4b3e-a490-32c61a52cec6">
<img width="960" alt="add 3" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/74f227bf-5443-42c8-b31d-4dd6b050ddd0">
<br><br>

- La suppression d'un produit : 

<img width="960" alt="del1" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/2b9e7e0b-ddf5-4165-b374-31bfb396ae63">
<img width="960" alt="del2" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/2b3c143a-a587-4689-af01-0813ff6f0106">
<img width="960" alt="del3" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/257d3a96-5db8-420a-9971-e6992771bf75">
<br><br>

## Partie 2 ##

- La modification d'un produit :

<img width="960" alt="edit1" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/a103e2b1-7a75-4c75-a38d-e70657aa2a18">
<img width="960" alt="edit2" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/de8dbda7-01c1-4075-80f5-5d9bf3fa253d">
<img width="960" alt="edit3" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/998ebc62-bd9e-410f-8158-bb7d14ef386b">
<img width="960" alt="edit4" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/35db47fe-dae6-476c-b964-87244ac9e911">
<br><br>

- La pagination :

<img width="960" alt="pagination" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/d9602ba1-4d78-48fd-b854-496d4834b6df">
<br><br>

## Partie 3 & 4 ##

- Le formulaire de l'authentification :

<img width="960" alt="login page" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/0175ff70-c737-46c0-b04c-a95b52cc3dcd">
<img width="960" alt="bad credentioals" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/6ab0d146-430f-44fe-8780-6320e3a82f0f">
<br><br>

- L'interface ADMIN :

<img width="960" alt="what admin sees" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/4d324e96-3fc4-4d4d-8bd7-969b3519a116">
<br><br>

- L'interface USER :

<img width="960" alt="what user can see " src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/60886154-9a28-4473-89b0-2d8820d2cfaa">
<br><br>

- La protection des routes :

<img width="960" alt="is user tries new product" src="https://github.com/Ikramouslih/JEE-Activite-Pratique-5/assets/60039200/6d8cba6a-4813-48bd-91de-52769744e7c6">
<br><br>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
