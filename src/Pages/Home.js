import React from 'react';
import {  Col, Container, Nav, Row } from 'react-bootstrap';
import ProductFetcher from '../Components/ProductFetcher';
import TestimonialsSection from '../Components/TestimonialsSection';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: 'Vikki Starr',
    date: '15 janvier, 2024',
    rating: '★★★★★',
    text: 'Quem num gosta di mim que vai caçá sua turmis!Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!'
    },
    {
  name: 'Jean Dupont',
  date: '22 février, 2024',
  rating: '★★★★☆',
  text: 'Service exceptionnel et livraison rapide. Les produits sont de qualité et le service client est toujours réactif. Je recommande fortement!'
},
{
  name: 'Marie Curie',
  date: '5 mars, 2024',
  rating: '★★★★★',
  text: 'Très satisfaite de mes achats. Les articles correspondent parfaitement à la description et la livraison a été plus rapide que prévu!'
}
];
const Home = () => {

    return (
         <Container fluid  className="home">
            <div className="hero-content">
              <h2 className="hero-subtitle">MEILLEUR BOUTIQUE</h2>
              <h1 className="hero-title">MEILLEUR DISPENSAIRE POUR ACHETER ECO EN LIGNE</h1>
              <p className="hero-description">Eco & Bio</p>
              <div className="hero-actions">
                  <span>Obtenir 25% réduc.</span> <span className="separator">|</span> <span>Livraison GRATUITE</span>
              </div>
              <Link  to="/shop" ><button className="hero-button"> ACHETER </button></Link>

            </div>

            <div className="features">
                <div className="feature">
                    <i className="feature-icon fas fa-truck"></i>
                    <h3>Expédition fiable</h3>
                    <p> Nous vous garantissons une livraison dans les délais pour une satisfaction optimale.</p>
                </div>
                <div className="feature">
                    <i className="feature-icon fas fa-shield-alt"></i>
                    <div className='module1'>
                        <h3>Sécurité garantie</h3>
                    <p> vos paiements et informations personnelles sont protégés à chaque étape de l’achat.</p>
                    </div>
                </div>
                <div className="feature">
                    <i className="feature-icon fas fa-dollar-sign"></i>
                    <h3>Meilleure qualité et prix</h3>
                    <p>Nous proposons des produits de qualité supérieure à des prix compétitifs.</p>
                </div>
            </div>
           <div className="Section3 container-fluid">
      <h1 className="title">CHOISISSEZ VOTRE PRODUIT</h1>

      {/* Menu de navigation */}
      <Nav className=" navig justify-content-center my-4">
        <Nav.Item>
          <Nav.Link className='item' href="#best-sellers">Meilleurs vendeurs</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='item' href="#bundles-promotions">Paquets & Promotions</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='item' href="#on-sale">En vente</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Section Produits */}
      <div className="section-product d-flex ">
        <Col md={12} lg={3}     className="first-card">
          <img src="/images/produit-image.png" alt="Produit" className="img-fluid" />
          <h4>Magasinez nos meilleures ventes</h4>
          <p>Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius lorem blandit lectus magnis feugiat.</p>
          <Link to="/shop">Voir tout</Link>
        </Col>

        <Col md={12} lg={9} className="list-product">
          <ProductFetcher />
        </Col>
      </div>
    </div>


    <div>
    <div class="refer-section">
        <Row>
            <Col>
                <h3>REFEREZ UN AMI</h3>
                <p>Et Gagnez <span class="highlight">FCFA30 !</span></p>
            </Col>
            <Col>
                 <button class="cta-button">Référence ici</button>
            </Col>
        </Row>
    </div>

    <div class="order-section">
    <h2 class="main-title">COMMANDER DES PRODUITS ECO EN LIGNE CHEZ EcoShop</h2>
    <p class="order-description">
        Musum Ipsum, cacilds vidis litro abertis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non
        tellus tristique interdum. Mãe faz elemento girariz, nisi eros vermeio.
    </p>

    <div class="steps">
        <div class="step">
        <div class="icon">1</div>
        <h4>S'ENREGISTRER</h4>
        <p>Procédez à l’enregistrement pour accéder aux meilleurs produits éco en ligne.</p>
        </div>
        <div class="step">
        <div class="icon">2</div>
        <h4>ACHETER</h4>
        <p>Parcourez et sélectionnez vos produits préférés, éco-responsables et de qualité.</p>
        </div>
        <div class="step">
        <div class="icon">3</div>
        <h4>Effectuer le paiement</h4>
        <p>Finalisez votre achat en procédant au paiement sécurisé pour recevoir votre commande.</p>
        </div>
    </div>
    <Link to='/shop'> <button class="product-button">Choisir votre produit</button></Link>

    </div>
    </div>
   <TestimonialsSection testimonials={testimonials}></TestimonialsSection>
 </Container>
    );

};

export default Home;
