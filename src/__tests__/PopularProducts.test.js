import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import PopularProducts from './PopularProducts';
import '@testing-library/jest-dom/extend-expect';

// Mock d'axios pour contrôler les réponses API
jest.mock('axios');

describe('PopularProducts', () => {
  const productsMock = [
    { id: 1, title: 'Produit 1', price: 29.99, image: 'https://example.com/img1.jpg' },
    { id: 2, title: 'Produit 2', price: 39.99, image: 'https://example.com/img2.jpg' },
  ];

  test('affiche le message de chargement au début', () => {
    axios.get.mockResolvedValueOnce({ data: productsMock });

    render(<PopularProducts />);

    expect(screen.getByText(/chargement des produits.../i)).toBeInTheDocument();
  });

  test('affiche les produits après le chargement', async () => {
    axios.get.mockResolvedValueOnce({ data: productsMock });

    render(<PopularProducts />);

    // Attendre que les produits soient affichés
    await waitFor(() => {
      expect(screen.getByText('Produit 1')).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText('Produit 2')).toBeInTheDocument();
    });

    // Vérifier que les prix et boutons sont également affichés
    expect(screen.getByText('29.99 €')).toBeInTheDocument();
    expect(screen.getByText('39.99 €')).toBeInTheDocument();
    expect(screen.getAllByText(/voir détails/i)).toHaveLength(2);
  });

  test('affiche un message d\'erreur en cas d\'échec de récupération des produits', async () => {
    axios.get.mockRejectedValueOnce(new Error('Erreur lors de la récupération des produits'));

    render(<PopularProducts />);

    // Attendre que le chargement soit terminé et que l'erreur soit gérée
    await waitFor(() => {
      expect(screen.queryByText(/chargement des produits.../i)).not.toBeInTheDocument();
    });

    expect(screen.queryByText('Produits Populaires')).not.toBeInTheDocument();
  });
});
