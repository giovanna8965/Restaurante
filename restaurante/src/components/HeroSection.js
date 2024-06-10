import React from 'react';
import './HeroSection.css';
import pizzaImage from '../assets/pizza.jpg';

function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <img src={pizzaImage} alt="Deliciosa pizza" className="hero-image" />
        <h2>Bem-vindo à Pizzaria Bella</h2>
        <p>As melhores pizzas da cidade, feitas com os ingredientes mais frescos e saborosos.</p>
        <button className="order-now" onClick={() => alert('Pedido realizado!')}>Peça Agora</button>
      </div>
    </section>
  );
}

export default HeroSection;
