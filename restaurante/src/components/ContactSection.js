import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contato</h2>
        <form id="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Formulário enviado!'); }}>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
