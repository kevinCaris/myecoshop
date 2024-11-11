import React from 'react';
import Navigation from './Navigation';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from './CartContext';

const Header = () => {
    const { compterArticles } = useCart();
    return (
        <header className='header'>
            <nav-top nav>
                <p className='fs-5'>OFFRE LIMITEE : 30% REDUCT. Utilise le code RABBIT30 au Paiement. <span fw-bold>     23 : 15 : 00 </span></p>
             </nav-top>
           <nav className="navbar navbar-expand-lg d-flex align-items-center px-3 py-3 justify-content-between">
            <NavLink className="navbar-brand fw-bold fs-2 ms-3 md-5" to="/">
                <img src='../images/Logo.png' alt='logo' />
            </NavLink>

            <div className="icone ms-5 search-container justify-content-center ">
                <input type="search" className="form-control search-input" placeholder="Recherche..." />
                <a href="#" className="search-button">
                    <i className="fas fa-search" style={{ fontSize: '1.1em' }}></i>
                </a>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon navbar-toggler-icon-white"></span>
            </button>

             <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarNav">
                 <div className="d-lg-none d-block">
                      <Navigation />
                  </div>
                {/* Ajout du séparateur */}
                <div className="separator mx-3"></div>

                <div className="icone me-4">
                    <Link to="/cart" className="panier">
                        {/* Utilisez ici une icône de type "contour" */}
                            <i className="fas fa-shopping-cart" style={{ fontSize: '1.1em' }}></i>
                                    {compterArticles() > 0 && (
                            <span className="position-absolute top-10 start-12 translate-middle badge rounded-pill bg-danger">
                                {compterArticles()}
                            </span>
                        )}
                        </Link>
                </div>
            </div>
        </nav>
        <div className="d-none d-md-block">
             <Navigation />
        </div>


    </header>
    );
};

export default Header;
