import { Carousel, Col, Row, Container } from 'react-bootstrap';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = ({ testimonials }) => {
  // Grouper les témoignages par trois
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 3) {
    groupedTestimonials.push(testimonials.slice(i, i + 3));
  }

  return (
    <Container fluid className="testimonials">
      <h2 className="section-title my-5 ">Témoignages Clients</h2>

      <Row>
        {/* Colonne fixe avec image et texte */}
        <Col md={12} lg={3} className="first-card">
          <h3>ÉLU MEILLEUR DISPENSAIRE EN LIGNE AU BENIN</h3>
         <hr></hr>
          <p>Google</p>
        <h4> EXELLENCE</h4>
        <span>⭐⭐⭐⭐</span> | <span>Avec 135 Avis</span>

        </Col>

        {/* Carrousel des témoignages */}
        <Col md={12} lg={8}>
          <Carousel indicators={false} controls={true} interval={3000}>
            {groupedTestimonials.map((group, index) => (
              <Carousel.Item key={index}>
                <Row>
                  {group.map((testimonial, idx) => (
                    <Col key={idx} md={4} className="d-flex justify-content-center">
                      <TestimonialCard {...testimonial} />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default TestimonialsSection;
