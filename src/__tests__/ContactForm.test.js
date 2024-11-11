import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {

  test('affiche correctement le formulaire de contact', () => {
    render(<ContactForm />);

    // Vérifie que tous les champs sont présents
    expect(screen.getByLabelText(/Nom/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Sujet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Envoyer/i })).toBeInTheDocument();
  });

  test('met à jour les champs du formulaire lors de la saisie', () => {
    render(<ContactForm />);

    // Remplir le champ Nom
    const nomInput = screen.getByLabelText(/Nom/i);
    fireEvent.change(nomInput, { target: { value: 'Jean Dupont' } });
    expect(nomInput.value).toBe('Jean Dupont');

    // Remplir le champ Email
    const emailInput = screen.getByLabelText(/Email/i);
    fireEvent.change(emailInput, { target: { value: 'jean@example.com' } });
    expect(emailInput.value).toBe('jean@example.com');

    // Remplir le champ Sujet
    const sujetInput = screen.getByLabelText(/Sujet/i);
    fireEvent.change(sujetInput, { target: { value: 'Demande de renseignements' } });
    expect(sujetInput.value).toBe('Demande de renseignements');

    // Remplir le champ Message
    const messageInput = screen.getByLabelText(/Message/i);
    fireEvent.change(messageInput, { target: { value: 'Je souhaite obtenir plus d\'informations.' } });
    expect(messageInput.value).toBe('Je souhaite obtenir plus d\'informations.');
  });

  test('soumet le formulaire et affiche le message de confirmation', () => {
    render(<ContactForm />);

    // Remplir tous les champs
    fireEvent.change(screen.getByLabelText(/Nom/i), { target: { value: 'Jean Dupont' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'jean@example.com' } });
    fireEvent.change(screen.getByLabelText(/Sujet/i), { target: { value: 'Demande de renseignements' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Je souhaite obtenir plus d\'informations.' } });

    // Soumettre le formulaire
    fireEvent.click(screen.getByRole('button', { name: /Envoyer/i }));

    // Vérifier que le message de confirmation est affiché
    expect(screen.getByText(/Merci de nous avoir contactés, nous reviendrons vers vous sous peu/i)).toBeInTheDocument();
  });

  test('cache le formulaire après la soumission', () => {
    render(<ContactForm />);

    // Remplir tous les champs
    fireEvent.change(screen.getByLabelText(/Nom/i), { target: { value: 'Jean Dupont' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'jean@example.com' } });
    fireEvent.change(screen.getByLabelText(/Sujet/i), { target: { value: 'Demande de renseignements' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Je souhaite obtenir plus d\'informations.' } });

    // Soumettre le formulaire
    fireEvent.click(screen.getByRole('button', { name: /Envoyer/i }));

    // Vérifier que le formulaire n'est plus présent dans le DOM
    expect(screen.queryByRole('form')).not.toBeInTheDocument();
  });
});
