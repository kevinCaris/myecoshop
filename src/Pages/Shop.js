import React from 'react';
import Products from './Products';

const Shop = () => {

  return (
    <div className="shop-container container-fluide mt-4">
      <div className="features ">
        <div className="feature">
          <i className="feature-icon fas fa-truck"></i>
          <h3>Expédition fiable</h3>
        </div>
        <div className="feature">
          <i className="feature-icon fas fa-shield-alt"></i>
          <div className="module1">
            <h3>Sécurité garantie</h3>
          </div>
        </div>
        <div className="feature">
          <i className="feature-icon fas fa-dollar-sign"></i>
          <h3>Meilleure qualité et prix</h3>
        </div>
      </div>

      <div className="shop-hero">
        <h1>Shop</h1>
      </div>

      <Products></Products>

      {/* Pagination component can be added here */}
    </div>
  );
};

export default Shop;
