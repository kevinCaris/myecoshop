import React from 'react';
import { useCart } from '../Components/CartContext';

const Cart = () => {
  const { cartItems, mettreAJourQuantité, supprimerDuPanier, calculerTotal } = useCart();

  return (
      <div className="container py-5">
         <div className='shop-hero'>
            <h2 className="mb-4 fw-bold">Shopping Cart Items</h2>
         </div>

      <div className="row">
        {/* Liste des articles */}
       <div className="col-md-8">
          {cartItems.length === 0 ? (
            <p className="text-center fs-5 mx-auto my-auto">Votre panier est vide</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="row align-items-center mb-3 border-bottom pb-3">
                {/* Image du produit - Prend toute la largeur en mobile */}
                <div className="col-3 col-md-2 mb-3 mb-md-0">
                  <img src={item.image} alt={item.title} className="img-fluid" />
                </div>

                {/* Détails du produit */}
                <div className="col-9 col-md-3 mb-2 mb-md-0">
                  <h5 className="fs-6">{item.title}</h5>
                  <p className="text-muted mb-1">Color: {item.color}</p>
                  <p className="text-muted">Size: {item.size}</p>
                </div>

                {/* Boutons de quantité - Centré en mobile */}
                <div className="col-6 col-md-3 d-flex align-items-center justify-content-center mb-2 mb-md-0">
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => mettreAJourQuantité(item.id, item.quantity - 1)}>-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="btn btn-outline-secondary btn-sm" onClick={() => mettreAJourQuantité(item.id, item.quantity + 1)}>+</button>
                </div>

                {/* Prix du produit */}
                <div className="col-3 col-md-2 text-center text-md-left mb-2 mb-md-0">
                  <p className="fw-bold">{item.price} €</p>
                </div>

                {/* Bouton Supprimer - Aligner à droite en bureau, centré en mobile */}
                <div className="col-3 col-md-2 text-end">
                  <button className="btn btn-danger btn-sm" onClick={() => supprimerDuPanier(item.id)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>


        {/* Résumé */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title fw-bold">Summary</h5>
              <div className="d-flex justify-content-between">
                <span>Total products:</span>
                <span>{calculerTotal()} €</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span>Shipping costs:</span>
                <span>Free</span>
              </div>
              <div className="my-3">
                <input type="text" className="form-control" placeholder="Promo code" />
              </div>
              <div className="d-flex justify-content-between fw-bold mt-3">
                <span>Total:</span>
                <span>{calculerTotal()} €</span>
              </div>
              <button className="btn btn-primary w-100 mt-3" >Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
