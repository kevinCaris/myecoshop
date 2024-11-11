// ProductCarousel.js
import React from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductCarousel = ({ produitsFiltres }) => {
  // Diviser les produits en groupes de 3
  const groupedProduits = [];
  for (let i = 0; i < produitsFiltres.length; i += 3) {
    groupedProduits.push(produitsFiltres.slice(i, i + 3));
  }

  return (
    <Container>
      <Carousel
        indicators={false}
        nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
        prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
      >
        {groupedProduits.map((group, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {group.map((produit) => (
                <Col key={produit.id} xs={12} md={4} className="d-flex justify-content-center">
                  <ProductCard produit={produit} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default ProductCarousel;
