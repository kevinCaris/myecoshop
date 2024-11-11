import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

    <footer className="footer">
      <div class="coupon-section">
        <h2 class="coupon-title">DÉBLOQUEZ 20 % DE RÉDUCTION SUR VOTRE PREMIÈRE COMMANDE</h2>
        <p class="coupon-subtitle">Révélez le code du coupon en entrant votre email</p>
        <hr></hr>
        <form class="coupon-form">
          <input type="email" placeholder="Adresse email" class="email-input" required></input>
          <button type="submit" class="reveal-button ">Révéler le coupon</button>
        </form>
      </div>

      <Row className='footer-top'>
        <div className="footer-section logo">
        <h1 className="footer-logo"><span>Eco</span>Shop</h1>
        <p>EcoShop est une boutique en ligne dédiée aux produits écologiques et durables. Elle propose une large gamme d'articles respectueux de l'environnement pour un mode de vie plus sain et responsable.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      <div className="footer-section shop">
        <h2>Shop</h2>
        <ul>
          <li><a href="#">Suivez votre commande</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="#">Comestibles</a></li>
          <li><Link href="#">About us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="footer-section contact">
        <h2>Contact</h2>
        <ul>
          <li>+229 62 59 07 75</li>
          <li>ecoshop@gmail.com</li>
          <li>123 Benin, Agbomey-Calavi</li>
          </ul>

        <p className="designer-credit">Designed by @Kévin ADOSSOU</p>
      </div>
      </Row>
      <hr></hr>
      <Row className='footer-bottom'>
        <Col>
            © 2024 EcoShop. Tous droits réservés
        </Col>
        <Col className="footer-section legal">
           <ul  className='d-flex justify-content-around'>
              <li><a href="#">Mentions légales</a></li>
              <li><a href="#">Police de confidentialité</a></li>
              <li><a href="#">Termes et conditions</a></li>
           </ul>
        </Col>
      </Row>


    </footer>
  );
}

export default Footer;
