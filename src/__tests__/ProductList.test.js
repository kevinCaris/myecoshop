import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';
import ProductCard from './ProductCard';

// Mock de ProductCard pour isoler les tests de ProductList
jest.mock('./ProductCard', () => ({ produit }) => (
  <div data-testid="product-card">{produit.title}</div>
));

describe('ProductList', () => {
  const produitsMock = [
    { id: 1, title: 'Produit 1', price: 29.99, image: 'https://example.com/img1.jpg' },
    { id: 2, title: 'Produit 2', price: 39.99, image: 'https://example.com/img2.jpg' },
  ];

  test('affiche les produits lorsque la liste n\'est pas vide', () => {
    render(<ProductList produitsFiltres={produitsMock} />);

    // Vérifie que chaque produit est rendu
    expect(screen.getAllByTestId('product-card')).toHaveLength(produitsMock.length);
    expect(screen.getByText('Produit 1')).toBeInTheDocument();
    expect(screen.getByText('Produit 2')).toBeInTheDocument();
  });

  test('affiche le message "Aucun produit trouvé" si la liste est vide', () => {
    render(<ProductList produitsFiltres={[]} />);

    // Vérifie que le message d'absence de produit est affiché
    expect(screen.getByText(/aucun produit trouvé/i)).toBeInTheDocument();
  });
});
