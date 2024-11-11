import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import _ from 'lodash';

const truncateText = (text, wordLimit) => _.truncate(text, {
  'length': wordLimit * 10,
  'separator': ' '
});

const ProductCard = ({ produit}) => {

  const { ajouterAuPanier } = useCart();

   const {
    id = "",
    image = "",
    title = "Titre non disponible",
    category = "Catégorie non disponible",
    rating = { rate: 0, count: 0 },
    price = "Prix non disponible"
  } = produit;

  return (
    <div className="card h-100 d-flex flex-column">
      <Link to={`/productDetail/${id}`} className="card-link">

        <img src={image} alt={`img ${title} dans la catégorie ${category}`} className="card-img-top" />
        <p className="cad-category py-2">{category}</p>
        <h3 className="cad-title">{truncateText(title, 5)}</h3>
        <h3 className="cad-rate">⭐ <span>{rating.rate} </span> | <span>({rating.count} avis)</span></h3>

          <p className="cad-price"> {price} € </p>

      </Link>

      <button className="btn-panier" onClick={() => ajouterAuPanier(produit)}>
        Ajouter au panier
      </button>
    </div>
  );
};

export default ProductCard;
