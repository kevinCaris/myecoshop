import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const setRechercheMock = jest.fn();

  beforeEach(() => {
    setRechercheMock.mockClear();
  });

  test('affiche la barre de recherche avec le placeholder', () => {
    render(<SearchBar recherche="" setRecherche={setRechercheMock} />);

    // Vérifier que le placeholder est affiché
    const input = screen.getByPlaceholderText(/rechercher un produit.../i);
    expect(input).toBeInTheDocument();
  });

  test('affiche la valeur initiale dans le champ de recherche', () => {
    render(<SearchBar recherche="Produit Test" setRecherche={setRechercheMock} />);

    // Vérifier que la valeur initiale est bien affichée dans le champ
    const input = screen.getByDisplayValue('Produit Test');
    expect(input).toBeInTheDocument();
  });

  test('appelle setRecherche avec la nouvelle valeur lors de la saisie', () => {
    render(<SearchBar recherche="" setRecherche={setRechercheMock} />);

    // Simuler la saisie dans le champ de recherche
    const input = screen.getByPlaceholderText(/rechercher un produit.../i);
    fireEvent.change(input, { target: { value: 'Nouveau produit' } });

    // Vérifier que setRecherche est appelé avec la bonne valeur
    expect(setRechercheMock).toHaveBeenCalledTimes(1);
    expect(setRechercheMock).toHaveBeenCalledWith('Nouveau produit');
  });
});
