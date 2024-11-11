import { renderHook, act } from '@testing-library/react-hooks';
import { CartProvider, useCart } from './CartContext';

describe('CartContext Unit Tests', () => {
  test('ajouterAuPanier ajoute un produit au panier', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.ajouterAuPanier({ id: 1, name: 'Produit A', price: 10 });
    });

    expect(result.current.cartItems).toEqual([{ id: 1, name: 'Produit A', price: 10, quantity: 1 }]);
  });

  test('ajouterAuPanier augmente la quantité si le produit existe déjà', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.ajouterAuPanier({ id: 1, name: 'Produit A', price: 10 });
      result.current.ajouterAuPanier({ id: 1, name: 'Produit A', price: 10 });
    });

    expect(result.current.cartItems).toEqual([{ id: 1, name: 'Produit A', price: 10, quantity: 2 }]);
  });

  test('supprimerDuPanier enlève un produit du panier', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.ajouterAuPanier({ id: 1, name: 'Produit A', price: 10 });
      result.current.supprimerDuPanier(1);
    });

    expect(result.current.cartItems).toEqual([]);
  });

  test('mettreAJourQuantité modifie la quantité d\'un produit', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.ajouterAuPanier({ id: 1, name: 'Produit A', price: 10 });
      result.current.mettreAJourQuantité(1, 5);
    });

    expect(result.current.cartItems).toEqual([{ id: 1, name: 'Produit A', price: 10, quantity: 5 }]);
  });

  test('compterArticles retourne le nombre total d\'articles dans le panier', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.ajouterAuPanier({ id: 1, name: 'Produit A', price: 10 });
      result.current.ajouterAuPanier({ id: 2, name: 'Produit B', price: 20 });
    });

    expect(result.current.compterArticles()).toBe(2);
  });

  test('calculerTotal retourne le prix total des articles dans le panier', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.ajouterAuPanier({ id: 1, name: 'Produit A', price: 10 });
      result.current.ajouterAuPanier({ id: 2, name: 'Produit B', price: 20 });
      result.current.mettreAJourQuantité(1, 3); // 3 * 10 + 1 * 20 = 50
    });

    expect(result.current.calculerTotal()).toBe(50);
  });
});
