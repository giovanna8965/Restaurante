import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="main-title">Pizzaria Bella</h1>
        <div className="social-icons">
          <a href="https://wa.me/1234567890" target="_blank" className="social-icon" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
          <a href="https://instagram.com" target="_blank" className="social-icon" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://facebook.com" target="_blank" className="social-icon" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#menu">Cardápio</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
