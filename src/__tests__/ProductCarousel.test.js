import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCarousel from './ProductCarousel';
import ProductCard from './ProductCard';

// Mock de ProductCard pour isoler les tests de ProductCarousel
jest.mock('./ProductCard', () => ({ produit }) => (
  <div data-testid="product-card">{produit.title}</div>
));

describe('ProductCarousel', () => {
  const produitsMock = [
    { id: 1, title: 'Produit 1', price: 29.99, image: 'https://example.com/img1.jpg' },
    { id: 2, title: 'Produit 2', price: 39.99, image: 'https://example.com/img2.jpg' },
    { id: 3, title: 'Produit 3', price: 19.99, image: 'https://example.com/img3.jpg' },
    { id: 4, title: 'Produit 4', price: 24.99, image: 'https://example.com/img4.jpg' },
    { id: 5, title: 'Produit 5', price: 34.99, image: 'https://example.com/img5.jpg' },
  ];

  test('affiche correctement les produits dans le carrousel par groupes de 3', () => {
    render(<ProductCarousel produitsFiltres={produitsMock} />);

    // Vérifier le nombre de groupes dans le carrousel (produitsMock divisé en groupes de 3)
    const carouselItems = screen.getAllByRole('listitem'); // Carousel.Item est rendu avec un rôle de liste
    expect(carouselItems).toHaveLength(Math.ceil(produitsMock.length / 3));

    // Vérifier que chaque produit est affiché dans le composant ProductCard
    produitsMock.forEach((produit) => {
      expect(screen.getByText(produit.title)).toBeInTheDocument();
    });
  });

  test('affiche un seul groupe si moins de 3 produits sont fournis', () => {
    const fewProduitsMock = produitsMock.slice(0, 2); // Moins de 3 produits
    render(<ProductCarousel produitsFiltres={fewProduitsMock} />);

    // Vérifier qu'il n'y a qu'un seul élément dans le carrousel
    const carouselItems = screen.getAllByRole('listitem');
    expect(carouselItems).toHaveLength(1);

    // Vérifier que les deux produits sont affichés
    fewProduitsMock.forEach((produit) => {
      expect(screen.getByText(produit.title)).toBeInTheDocument();
    });
  });
});
