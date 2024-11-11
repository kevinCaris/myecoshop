import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null); // État pour la notification

  // Fonction pour ajouter un produit au panier
  const ajouterAuPanier = (produit) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === produit.id);
      if (existingItem) {
        // Si le produit est déjà dans le panier, on augmente la quantité
        return prevItems.map((item) =>
          item.id === produit.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Sinon, on l'ajoute avec une quantité de 1
        return [...prevItems, { ...produit, quantity: 1 }];
      }
    });

    // Définir la notification pour le produit ajouté
    setNotification(`"${produit.title}" a été ajouté au panier !`);

    // Effacer la notification après 2 secondes
    setTimeout(() => setNotification(null), 2000);
  };

  // Fonction pour supprimer un produit du panier
  const supprimerDuPanier = (produitId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== produitId));
  };

  // Fonction pour mettre à jour la quantité d'un produit
  const mettreAJourQuantité = (produitId, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === produitId ? { ...item, quantity } : item
      )
    );
  };

  const compterArticles = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Calcul du total
  const calculerTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        ajouterAuPanier,
        supprimerDuPanier,
        mettreAJourQuantité,
        calculerTotal,
        compterArticles,
        notification, // Exposer l'état de notification
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
