import './style.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="home">
      <nav className="optimal-width">
        <Link to="/"><img loading="lazy" src="./images/logo.svg" alt="Logo - Titi Burger" /></Link>
        <div id="links">
          <svg id="burger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 64H448v64H0V64zM0 224H448v64H0V224zM448 384v64H0V384H448z" />
          </svg>
          <div id="top">
            <Link to="/clickandcollect" className="call-to-action">Click & Collect</Link>
            <Link to="#" className="call-to-action">Livraison</Link>
          </div>
          <div id="bottom">
            <Link to="#">La carte</Link>
            <Link to="#">Titi Story</Link>
            <Link to="#">Le Resto</Link>
            <Link to="#">Actus</Link>
            <Link to="#">Réserver</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;