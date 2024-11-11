import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import ProductFetcher from './ProductFetcher';
import ProductCarousel from './ProductCarousel';
import { Spinner } from 'react-bootstrap';

// Mock d'axios pour simuler les appels API
jest.mock('axios');
// Mock de ProductCarousel pour isoler le test de ProductFetcher
jest.mock('./ProductCarousel', () => jest.fn(() => <div data-testid="product-carousel" />));

describe('ProductFetcher', () => {
  const produitsMock = [
    { id: 1, title: 'Produit 1', price: 29.99, image: 'https://example.com/img1.jpg' },
    { id: 2, title: 'Produit 2', price: 39.99, image: 'https://example.com/img2.jpg' },
    { id: 3, title: 'Produit 3', price: 19.99, image: 'https://example.com/img3.jpg' },
    { id: 4, title: 'Produit 4', price: 24.99, image: 'https://example.com/img4.jpg' },
  ];

  beforeEach(() => {
    axios.get.mockClear();
    ProductCarousel.mockClear();
  });

  test('affiche le spinner pendant le chargement', () => {
    axios.get.mockResolvedValueOnce({ data: produitsMock });

    render(<ProductFetcher />);

    // Vérifier que le spinner est affiché pendant le chargement
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  test('affiche le carousel de produits après le chargement', async () => {
    axios.get.mockResolvedValueOnce({ data: produitsMock });

    render(<ProductFetcher />);

    // Attendre que le chargement soit terminé
    await waitFor(() => expect(screen.queryByRole('status')).not.toBeInTheDocument());

    // Vérifier que le carousel de produits est affiché
    expect(screen.getByTestId('product-carousel')).toBeInTheDocument();
    expect(ProductCarousel).toHaveBeenCalledWith({ produitsFiltres: produitsMock }, {});
  });

  test('affiche une erreur en cas de problème lors de la récupération des produits', async () => {
    axios.get.mockRejectedValueOnce(new Error('Erreur lors de la récupération des produits'));

    render(<ProductFetcher />);

    // Attendre que le chargement soit terminé
    await waitFor(() => expect(screen.queryByRole('status')).not.toBeInTheDocument());

    // S'assurer que le carousel de produits n'est pas affiché en cas d'erreur
    expect(screen.queryByTestId('product-carousel')).not.toBeInTheDocument();
  });
});
