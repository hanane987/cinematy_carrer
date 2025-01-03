# Consultation des Offres d'Emploi

## Description du Projet

Cette application permet de consulter et gérer les offres d'emploi tout en offrant des fonctionnalités de candidature et d'administration. Le projet met en œuvre des technologies modernes pour fournir une expérience utilisateur fluide et optimisée.

## Fonctionnalités

### Consultation des Offres d'Emploi
- Affichage de la liste des offres disponibles via une API tierce.
- Recherche et filtrage des offres par :
  - Titre.
  - Localisation.
  - Type de contrat.

### Gestion des Candidatures
- Création de compte utilisateur et connexion sécurisée.
- Possibilité de postuler directement aux offres depuis l'application.
- Suivi de l'état des candidatures :
  - En attente.
  - Acceptée.
  - Refusée.

### Administration
- Visualisation des candidatures reçues par les administrateurs.
- Ajout de notes et mise à jour du statut des candidatures.

### Server-Side Rendering (SSR)
- Rendu côté serveur pour :
  - Afficher les détails d'une candidature individuelle.
  - Lister les candidatures.

## Conventions API
- Respect des conventions RESTful.
- Gestion de la pagination avec les paramètres :
  - `page`
  - `size`
  - `offset`

## Technologies Utilisées

### Framework
- **Next.js** : Pour le rendu côté serveur (SSR) et le développement frontend.

### UI/UX
- **Tailwind CSS** : Framework CSS pour une conception réactive et moderne.

### Gestion de l'État
- **React Context** ou **Redux** : Gestion centralisée de l'état de l'application.

### Base de Données
- **MongoDB avec Mongoose** ou **PostgreSQL** : Pour stocker les utilisateurs et les candidatures.

### Authentification
- **JWT (JSON Web Token)** : Authentification sécurisée des utilisateurs.

### Intégration et Déploiement Continus (CI/CD)
- **GitHub Actions** ou **GitLab CI** : Implémentation d'un pipeline CI/CD.

### Tests
- **Jest** : Framework de tests pour JavaScript.
- **Supertest** : Tests E2E de l'API.

### Documentation
- **Swagger** : Documentation interactive de l'API.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone <url_du_depot>
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Configurez les variables d'environnement dans un fichier `.env` :
   ```env
   DATABASE_URL=<votre_url_base_de_donnees>
   JWT_SECRET=<votre_cle_secrete_jwt>
   API_BASE_URL=<url_de_l_api_tierce>
   ```
4. Lancez l'application :
   ```bash
   npm run dev
   ```

## Usage

### Lancement en Mode Développement
```bash
npm run dev
```

### Lancement en Mode Production
```bash
npm run build
npm start
```

## Contributions

Les contributions sont les bienvenues ! Veuillez soumettre une demande de tirage (pull request) ou signaler un problème (issue).

## License

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus de détails.
