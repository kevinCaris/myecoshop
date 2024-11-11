import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import ProductDetail from './Pages/ProductDetails';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Layout from './Components/Layout';
const AppRouter = () => {
    return (

        <Router>
            <Layout>
                    <Routes>
                    <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
                    <Route path="/shop" element={<Shop />} /> {/* Route pour la page des produits */}
                    <Route path="/productDetail/:id" element={<ProductDetail />} /> {/* Détails du produit */}
                    <Route path="/contact" element={<Contact />} /> {/* Route pour la page de contact */}
                    <Route path="/cart" element={<Cart />} /> {/* Route pour la page de panier */}
                </Routes>
            </Layout>
        </Router>
  );
};

export default AppRouter;
