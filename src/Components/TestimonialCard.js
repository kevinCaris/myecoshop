// TestimonialCard.js
import React from 'react';
import { Card } from 'react-bootstrap';

const TestimonialCard = ({ name, date, rating, text }) => {
  return (
    <Card className="testimonial-card mb-4">
      <Card.Body>
        <Card.Title className="testimonial-title">{name}</Card.Title>
          <hr></hr>
        <div className="testimonial-rating">{rating}</div>
        <Card.Text>{text}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
};

export default TestimonialCard;
