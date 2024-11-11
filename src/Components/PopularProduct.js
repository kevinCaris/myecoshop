import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=8')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des produits :", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement des produits...</p>;
  }

  return (
    <section className="popular-products">
      <h2>Produits Populaires</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.price} €</p>
            <button className="btn btn-primary">Voir Détails</button>
          </div>
        ))}
      </div>
      <button className="btn btn-secondary">Charger Plus</button>
    </section>
  );
};

export default PopularProducts;
