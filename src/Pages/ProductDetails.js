import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';  // To obtain the product ID from the URL
import axios from 'axios';
import { Spinner, Tab, Tabs } from 'react-bootstrap';// Using the spinner for loading
import { useCart } from '../Components/CartContext';

const ProductDetail = () => {
   const { ajouterAuPanier } = useCart();
   const { id } = useParams(); // Retrieve product ID from URL
   const [produit, setProduit] = useState(null); // État pour stocker les détails du produit
   const [loading, setLoading] = useState(true);
   const navigate = useNavigate();
   const handleAddToCartAndRedirect = (produit) => {
      ajouterAuPanier(produit); // Appel de la fonction pour ajouter le produit au panier
      navigate('/cart'); // Redirection vers la page panier
   };

 useEffect(() => {
    // Fonction asynchrone pour récupérer les détails du produit
    const fetchProduit = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduit(response.data); // Met à jour l'état avec les données reçues
      } catch (error) {
        console.error("Erreur lors de la récupération du produit :", error);
      } finally {
        setLoading(false); // Arrête l'affichage du chargement
      }
    };

    fetchProduit(); // Appel initial de la fonction
  }, [id]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="sr-only">Chargement...</span>
        </Spinner>
        <p>Chargement des détails du produit...</p>
      </div>
    );
  }

  if (!produit) {
    return <p>Produit non trouvé</p>;
  }

  return (
    <div className="container product-detail mt-8">
      <div className="row">
        {/* Section for product image */}
        <div className="col-md-6">
          <img
            src={produit.image}
            alt={produit.title}
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>

        {/* Section for product information */}
        <div className="col-md-6 text-start">
          <h2>{produit.title}</h2>
          <p className="product-price"><strong>Prix : </strong>{produit.price} €</p>
          <div className="product-rating my-3">
            <span>⭐⭐⭐⭐☆</span> <span>({produit.rating.count} avis)</span>
          </div>
          <p className="product-category fw-bold fs-5">Cartégorie :{produit.category}</p>
          <p className="product-description">{produit.description}</p>

          {/* Boutons d'action */}
          <div className="product-actions gap-5">
            <button className="btn1  btn-lg me-3" onClick={() => handleAddToCartAndRedirect(produit)}>Acheter maintenant</button>
            <button className="btn2  btn-lg me-3" onClick={() => ajouterAuPanier(produit)}>Ajouter au panier</button>
          </div>
        </div>
      </div>

      {/* Tabs for more information */}      <div className=" onglet row mt-5">
        <div className="col-md-12">
          <Tabs defaultActiveKey="details" id="product-tabs" className="custom-tabs">
            {/* Tabs Détails */}
            <Tab eventKey="details" title="Détails"  className="custom-tab-content">
              <div className="mt-3">
                <h4>Détails du produit</h4>
                <p>{produit.description}</p>
                <ul>
                  <li><strong>Catégorie : </strong>{produit.category}</li>
                </ul>
              </div>
            </Tab>

            {/* Tabs Spécifications */}
            <Tab eventKey="specifications" title="Spécifications"  className="custom-tab-content">
              <div className="mt-3">
                <h4 className='text-black'>Spécifications techniques</h4>
                <ul>
                  <li><strong>Prix : </strong>{produit.price} €</li>
                  <li><strong>Catégorie : </strong>{produit.category}</li>
                </ul>
              </div>
            </Tab>

            {/* Tabs Avis */}
            <Tab eventKey="reviews" title="Avis"  className="custom-tab-content">
              <div className="mt-3">
                <h4>Avis des utilisateurs</h4>
                <p>Ce produit n'a pas encore d'avis. Sois le premier à en laisser un !</p>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
