// ProductFetcher.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import ProductCarousel from './ProductCarousel';

const ProductFetcher = () => {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fonction asynchrone pour récupérer les produits depuis l'API
    const fetchProduits = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProduits(response.data); // Met à jour l'état avec les données reçues
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      } finally {
        setLoading(false); // Arrête l'affichage du chargement
      }
    };

    fetchProduits();
  }, []);

  // Filtrer les 4 premiers produits seulement
  const produitsFiltres = produits;

  return (
    <div>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Chargement...</span>
          </Spinner>
        </div>
      ) : (
        <ProductCarousel produitsFiltres={produitsFiltres} />
      )}
    </div>
  );
};

export default ProductFetcher;
