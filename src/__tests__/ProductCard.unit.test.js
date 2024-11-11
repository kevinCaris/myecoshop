import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductCard from './ProductCard';
import { CartProvider, useCart } from './CartContext';

// Mock du contexte CartContext pour pouvoir tester ajouterAuPanier
jest.mock('./CartContext', () => ({
  useCart: jest.fn(),
}));

describe('ProductCard', () => {
  const produit = {
    id: 1,
    image: 'https://example.com/image.jpg',
    title: 'Exemple de produit',
    category: 'Catégorie Exemple',
    rating: { rate: 4.5, count: 10 },
    price: 29.99,
  };

  const ajouterAuPanier = jest.fn();

  beforeEach(() => {
    useCart.mockReturnValue({ ajouterAuPanier });
  });

  test('affiche correctement les informations du produit', () => {
    render(
      <Router>
        <ProductCard produit={produit} />
      </Router>
    );

    // Vérifie que les informations du produit sont affichées
    expect(screen.getByAltText(`img ${produit.title} dans la catégorie ${produit.category}`)).toBeInTheDocument();
    expect(screen.getByText('Catégorie Exemple')).toBeInTheDocument();
    expect(screen.getByText('Exemple de produit')).toBeInTheDocument();
    expect(screen.getByText('⭐ 4.5 | (10 avis)')).toBeInTheDocument();
    expect(screen.getByText('29.99 €')).toBeInTheDocument();
  });

  test('appelle ajouterAuPanier lorsque le bouton "Ajouter au panier" est cliqué', () => {
    render(
      <Router>
        <ProductCard produit={produit} />
      </Router>
    );

    // Clique sur le bouton pour ajouter au panier
    const button = screen.getByText('Ajouter au panier');
    fireEvent.click(button);

    // Vérifie que la fonction ajouterAuPanier a été appelée avec le bon produit
    expect(ajouterAuPanier).toHaveBeenCalledWith(produit);
  });

  test('tronque le titre du produit si sa longueur dépasse la limite de mots', () => {
    const longProduit = {
      ...produit,
      title: 'Produit avec un très très long titre qui dépasse la limite',
    };

    render(
      <Router>
        <ProductCard produit={longProduit} />
      </Router>
    );

    // Vérifie que le titre est tronqué
    expect(screen.getByText('Produit avec un très très long...')).toBeInTheDocument();
  });
});
