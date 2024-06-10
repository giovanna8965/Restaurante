import React from 'react';
import './MenuSection.css';

function MenuSection() {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2>Nosso Cardápio</h2>
        <div className="menu-items">
          <div className="menu-item">
            <h3>Margherita</h3>
            <p>Molho de tomate, mussarela, manjericão fresco.</p>
          </div>
          <div className="menu-item">
            <h3>Pepperoni</h3>
            <p>Molho de tomate, mussarela, pepperoni.</p>
          </div>
          <div className="menu-item">
            <h3>Quatro Queijos</h3>
            <p>Molho de tomate, mussarela, parmesão, gorgonzola, provolone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
