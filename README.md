# EcoShop

## Description

EcoShop est une application web de commerce électronique développée avec React. Elle permet aux utilisateurs de parcourir un catalogue de produits, d'ajouter des articles à leur panier et de passer des commandes en ligne. Cette application a été conçue pour offrir une expérience utilisateur fluide et intuitive.

## Pages principales

1. **Accueil** : Présentation générale du site, mise en avant des produits phares.
2. **Catalogue de produits** : Affichage des produits avec filtres (catégories, prix, etc.).
3. **Page produit** : Détails d’un produit spécifique avec options d’ajout au panier.
4. **Panier** : Liste des produits ajoutés avec quantité, prix total, et possibilité de modifier le panier.
5. **Page Contact** : Formulaire de contact.
6. **Page de paiement** : Informations de paiement pour finaliser l’achat.

## Fonctionnalités

- Ajout/Suppression de produits dans le panier.
- Navigation fluide entre les pages.
- Récupération des produits via une API externe.

## Structure du Projet

```
EcoShop/
│
├── public/
│   ├── images/                   # Dossier contenant les images publiques
│   └── index.html                # Fichier HTML principal, point d'entrée de l'application
│
├── src/                          # Dossier source principal
│   ├── __tests__/                # Dossier pour les tests unitaires des composants
│   │   ├── CartContext.test.js       # Test pour le composant CartContext
│   │   ├── ContactForm.test.js       # Test pour le composant ContactForm
│   │   ├── PopularProducts.test.js   # Test pour le composant PopularProducts
│   │   ├── ProductCarousel.test.js   # Test pour le composant ProductCarousel
│   │   ├── ProductFetcher.test.js    # Test pour le composant ProductFetcher
│   │   ├── ProductList.test.js       # Test pour le composant ProductList
│   │   └── SearchBar.test.js         # Test pour le composant SearchBar
│   │
│   ├── components/               # Dossier contenant les composants réutilisables
│   │   ├── CartContext.js            # Contexte pour la gestion du panier
│   │   ├── ContactForm.js            # Composant pour le formulaire de contact
│   │   ├── Footer.js                 # Composant pour le pied de page
│   │   ├── Header.js                 # Composant pour l'en-tête
│   │   ├── Layout.js                 # Composant de mise en page pour structurer les pages
│   │   ├── Navigation.js             # Composant pour la barre de navigation
│   │   ├── PageNotification.js       # Composant pour les notifications de page
│   │   ├── PopularProducts.js        # Composant pour l'affichage des produits populaires
│   │   ├── ProductCard.js            # Composant de carte de produit individuel
│   │   ├── ProductCarousel.js        # Carrousel pour afficher les produits
│   │   ├── ProductFetcher.js         # Gestion de la récupération des produits via API
│   │   ├── ProductList.js            # Affiche une liste de produits
│   │   ├── SearchBar.js              # Barre de recherche pour trouver des produits
│   │   ├── TestimonialCard.js        # Carte pour afficher les témoignages clients
│   │   └── TestimonialSection.js     # Section pour afficher plusieurs témoignages
│   │
│   ├── Pages/                    # Dossier contenant les pages principales de l'application
│   │   ├── Cart.js                   # Page affichant le panier de l'utilisateur
│   │   ├── Contact.js                # Page de contact avec formulaire
│   │   ├── Home.js                   # Page d'accueil de l'application
│   │   ├── ProductDetail.js          # Vue détaillée d'un produit spécifique
│   │   └── Shop.js                   # Page affichant tous les produits de la boutique
│   │
│   ├── Styles/                   # Dossier pour les fichiers de style globaux
│   │   └── index.css                 # Fichier CSS principal pour les styles globaux
│   │
│   ├── App.js                    # Composant principal configurant la structure et les routes de l'application
│   ├── AppRouter.js              # Gère la logique de routage de l'application
│   ├── index.js                  # Point d'entrée de l'application
│   └── Layout.js                 # Composant de mise en page principal
│
├── package.json                  # Dépendances et scripts du projet
└── package-lock.json             # Fichier de verrouillage des versions des dépendances
└── README.md                     # Documentation principale du projet
```

## Description des Dossiers

### `public/`

Contient les ressources publiques accessibles dans le navigateur :

- **images/** : Dossier pour les images utilisées dans l'application.
- **index.html** : Le fichier HTML principal, servant de point d'entrée pour le rendu de React.

### `src/`

Le dossier source contenant le code de l'application.

- **`__tests__/`** : Tests unitaires des composants individuels, assurant la fiabilité du code.
  - Chaque fichier (`*.test.js`) teste un composant spécifique pour vérifier son bon fonctionnement.

- **`components/`** : Composants réutilisables au sein de l'application.
  - **CartContext.js** : Contexte pour la gestion du panier dans l'application.
  - **ContactForm.js** : Formulaire de contact pour que les utilisateurs puissent nous joindre.
  - **Footer.js** : Composant pour le pied de page.
  - **Header.js** : Composant pour l'en-tête incluant le logo et la navigation principale.
  - **Layout.js** : Composant de mise en page offrant une structure cohérente.
  - **Navigation.js** : Barre de navigation pour les liens principaux du site.
  - **PageNotification.js** : Composant d'affichage des notifications ou alertes.
  - **PopularProducts.js** : Affiche une liste de produits populaires.
  - **ProductCard.js** : Affiche les détails individuels d'un produit sous forme de carte.
  - **ProductCarousel.js** : Carrousel pour présenter des produits sous forme de diaporama.
  - **ProductFetcher.js** : Gère la récupération des produits depuis une API.
  - **ProductList.js** : Liste les produits dans une mise en page structurée.
  - **SearchBar.js** : Barre de recherche pour filtrer les produits.
  - **TestimonialCard.js** : Carte affichant les témoignages individuels des clients.
  - **TestimonialSection.js** : Section pour afficher plusieurs témoignages.

- **`Pages/`** : Contient les pages principales de l'application.
  - **Cart.js** : Page du panier d'achat.
  - **Contact.js** : Page de contact avec un formulaire de contact.
  - **Home.js** : Page d'accueil avec les principales sections et produits.
  - **ProductDetail.js** : Vue détaillée d'un produit avec descriptions et détails.
  - **Shop.js** : Page boutique listant tous les produits.

- **`Styles/`** : Dossier pour les styles globaux et modulaires.
  - **index.css** : Fichier CSS principal pour le style global.

- **App.js** : Composant principal initialisant la structure et les routes de l'application.
- **AppRouter.js** : Composant gérant le routage des pages.
- **index.js** : Fichier d'entrée qui monte l'application.
- **Layout.js** : Structure de mise en page principale pour englober les pages.

### `package.json`

Liste les dépendances, les scripts et les métadonnées du projet.

---

## Utilisation de `React Router`

- **AppRouter.js** : Ce fichier gère les routes principales de l'application en utilisant `React Router`. Il assure la navigation entre les pages suivantes :
  - `/` : Page d'accueil (`Home.js`)
  - `/shop` : Page boutique avec la liste des produits (`Shop.js`)
  - `/cart` : Page du panier (`Cart.js`)
  - `/contact` : Page de contact (`Contact.js`)
  - `/product/:id` : Page de détails d'un produit spécifique
    (`ProductDetails.js`)

  ## Intégration de l'API Fake Store

L'application **EcoShop** utilise l'API **Fake Store** pour récupérer dynamiquement les données des produits et les afficher dans le catalogue. Cette API fournit des données simulées de produits, parfaites pour des projets de démonstration.

### Étapes de l'Intégration de l'API

1. **Choix de l'API** : Nous utilisons **Fake Store API**, accessible à l'adresse [https://fakestoreapi.com](https://fakestoreapi.com).

   - **Endpoints utilisés** :
     - `GET /products` : Récupère la liste de tous les produits.
     - `GET /products/:id` : Récupère les détails d'un produit spécifique.

2. **Intégration des Appels API avec `axios`** :
   - Nous avons utilisé la bibliothèque `axios` pour simplifier les appels API. `axios` gère les requêtes HTTP et offre une syntaxe simple et rapide pour récupérer des données.
   - **Installation d'axios** (si ce n'est pas encore fait) :

     ```bash
     npm install axios
     ```

   - Le fichier `ProductList.js` inclut un appel à l'API pour obtenir les données produit dès que le composant est monté.

3. **Gestion de l'État avec React (`useState` et `useEffect`)** :
   - Le composant `ProductList` utilise le hook `useState` pour stocker les produits récupérés de l'API.
   - Le hook `useEffect` permet de déclencher l'appel API au moment où le composant est monté, récupérant ainsi la liste des produits à afficher.

### Exemple de Code dans `ProductList.js`

```javascript
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Composant pour afficher chaque produit individuellement

const ProductList = () => {
  const [products, setProducts] = useState([]); // État pour stocker les produits

  useEffect(() => {
    // Fonction pour récupérer les produits depuis l'API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data); // Met à jour l'état avec les données reçues
      } catch (error) {
        console.error('Erreur lors de la récupération des produits :', error);
      }
    };

    fetchProducts(); // Appel initial de la fonction
  }, []); // Exécute une seule fois au montage du composant

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
```

### Explication du Code

- **`useState([])`** : Initialise l'état `products` comme un tableau vide pour stocker les produits récupérés de l'API.
- **`useEffect`** : Utilisé pour effectuer un appel API au moment du montage du composant. La fonction `fetchProducts` est appelée une seule fois pour récupérer les produits de `https://fakestoreapi.com/products`.
- **`axios.get`** : Effectue un appel GET à l'API Fake Store pour obtenir la liste des produits. Les données sont ensuite stockées dans `products`.
- **`products.map`** : Pour chaque produit dans `products`, le composant `ProductCard` est rendu avec les détails du produit, affichant chaque produit de manière dynamique.

### Affichage Dynamique des Produits

Grâce à l'API et à `axios`, le composant `ProductList` affiche les produits de
manière dynamique. Si de nouveaux produits sont ajoutés à l'API, ils
apparaîtront automatiquement lors du prochain chargement de la page, sans
nécessiter de modifications supplémentaires dans le code.

# Améliorations de l'Interface Utilisateur et de l'Accessibilité

Pour améliorer l'expérience utilisateur de **EcoShop**, nous avons ajouté du style, optimisé l'accessibilité, et assuré la compatibilité responsive.

## 1. Stylisation de l'Application avec Bootstrap

L'application utilise **Bootstrap**, une bibliothèque CSS populaire, pour styliser les composants et créer une interface cohérente et professionnelle.

- **Installation de Bootstrap** :
  - Bootstrap a été installé via npm :

    ```bash
    npm install bootstrap
    ```

  - Importation de Bootstrap dans `index.js` ou `App.js` :

    ```javascript
    import 'bootstrap/dist/css/bootstrap.min.css';
    ```

- **Utilisation des Classes Bootstrap** :
  - Les composants et pages utilisent les classes Bootstrap pour organiser le contenu et le styliser rapidement.
  - **Exemples** :
    - Grilles Bootstrap (`row`, `col-md-*`) pour organiser les éléments en colonnes.
    - Boutons stylisés avec les classes `btn`, `btn-primary`, etc.
    - Utilisation des classes de mise en page (`container`, `d-flex`, `align-items-center`) pour une mise en page flexible et alignée.

## 2. Utilisation de CSS personnalisé

En plus de Bootstrap, des styles CSS personnalisés ont été ajoutés pour répondre aux besoins spécifiques de l'application et affiner certains détails visuels.

- **Fichiers de styles** :
  - Un fichier CSS principal est utilisé pour des ajustements de style spécifiques qui ne sont pas couverts par Bootstrap.

- **Exemple de CSS personnalisé** :

  ```css
  /* Exemple de style personnalisé pour les cartes de produits */
  .product-card {
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    transition: box-shadow 0.3s ease-in-out;
  }

  .product-card:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  }
  ```

## 3. Améliorations d'Accessibilité

Pour rendre l'application accessible à tous les utilisateurs, y compris ceux qui utilisent des lecteurs d'écran, nous avons implémenté plusieurs améliorations d'accessibilité.

- **Attributs ARIA** :
  - Utilisation d'attributs ARIA pour améliorer la lisibilité des composants par les lecteurs d'écran.
  - Exemples d'attributs ARIA :
    - `aria-label` pour les boutons et les icônes non textuelles.
    - `aria-expanded` pour indiquer si les éléments comme les menus déroulants sont ouverts ou fermés.

- **Composants de Formulaires Accessibles** :
  - Tous les champs de formulaire ont des étiquettes (`label`) associées pour faciliter la navigation.
  - Les boutons et liens sont clairement identifiés avec des descriptions textuelles significatives.

## 4. Optimisation Responsive

L'application est optimisée pour être accessible et agréable à utiliser sur différents appareils, y compris les mobiles et les tablettes.

- **Classes Bootstrap Responsive** :
  - Les classes Bootstrap (`col-sm-*`, `col-md-*`, `col-lg-*`, etc.) ont été utilisées pour contrôler l'affichage des éléments sur des écrans de différentes tailles.
  - Les images sont rendues responsive avec les classes `img-fluid`.

- **Exemple de Media Queries Personnalisées** :
  - En plus des classes Bootstrap, des **media queries CSS** ont été utilisées pour un contrôle précis du comportement de certains éléments sur mobile.

  ```css
  /* Exemple de media query pour adapter la taille des cartes produits sur mobile */
  @media (max-width: 768px) {
    .product-card {
      flex-direction: column;
      align-items: center;
    }
  }
  ```

## Installation

Pour installer et exécuter le projet en local, suivez les étapes ci-dessous :

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/KevinCaris/Eco-Shop.git

2. Accédez au répertoire du projet :

   ```bash
   cd Eco-Shop

3. Installez les dépendances :

   ```bash
   npm install

3. Démarrez l'application :

   ```bash
   npm start

L'application sera accessible à l'adresse <http://localhost:3000>

## Technologies Utilisées

- **React**  : Framework JavaScript pour construire l'interface utilisateur.
- **React Router** : Gestion de la navigation entre les différentes pages de l'application.
- **Axios** : Bibliothèque pour effectuer des appels API et gérer les requêtes HTTP.
- **Bootstrap** : Framework CSS pour styliser l'application avec une interface cohérente et responsive.
-- **CSS personnalisé** : Ajouts spécifiques de style pour affiner l'apparence de certains composants.
- **Jest** : Framework de test pour écrire et exécuter les tests unitaires.
- **React Testing Library** : Bibliothèque de tests pour tester les composants React, en complément de Jest.
- **Contexte React (Context API)** : Pour gérer l'état global du panier dans l'application.
- **Fake Store API** : API externe pour récupérer des données de produits et les afficher dans le catalogue.
- **HTML et ARIA** : Utilisés pour améliorer l'accessibilité, avec des attributs ARIA pour les lecteurs d'écran.
- **Lighthouse** : Outil pour auditer l'accessibilité et les performances de l'application.

## Lien vers le Dépôt GitHub

<https://github.com/KevinCaris/Eco-Shop>

## Tableau de Gestion des Tâches

Accéder au tableau Trello (remplacez ce texte par le lien vers votre tableau de gestion des tâches).

## Auteurs

Kevin Caris - Développeur principal
