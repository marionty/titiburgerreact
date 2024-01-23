import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Recapitulatif = () => {
  useEffect(() => {
    const burger = JSON.parse(localStorage.getItem('burger'));
    const accompagnement = JSON.parse(localStorage.getItem('accompagnement'));
    const boisson = JSON.parse(localStorage.getItem('boisson'));
    const dessert = JSON.parse(localStorage.getItem('dessert'));

    const form = document.getElementById('recap');
    const products = [burger, accompagnement, boisson, dessert];
    let price = 0;
    let HTML = '';

    products.forEach(function (product) {
      price += parseFloat(product.price.$numberDecimal);
      HTML += `
        <div class="choise-burger center grid-3 dashed">
          <div class="choise-burger">
            <div class="picture">
              <img src="${product.image}" alt="${product.name}" />
            </div>
          </div>
          <p>${product.name}</p>
          <p class="text-left">${product.price.$numberDecimal} €</p>
        </div>
      `;
    });

    localStorage.setItem('price', price);
    form.innerHTML = HTML;

    const imageBurger = document.getElementById('image-burger');
    imageBurger.src = burger.image;

    const imageAccompagnement = document.getElementById('image-accompagnement');
    imageAccompagnement.src = accompagnement.image;

    const imageBoisson = document.getElementById('image-boisson');
    imageBoisson.src = boisson.image;

    const imageDessert = document.getElementById('image-dessert');
    imageDessert.src = dessert.image;

    const pPrice = document.getElementById('price');
    pPrice.innerText = price + ' €';
  }, []);

  return (
    <main className="optimal-width">
      <div className="main-grid">
        <div className="percent50 text-left">
          <h1 className="text-left">Récapitulatif</h1>
          <div className="number">
            <p>commande TITI03FTP092201</p>
          </div>
        </div>
        <div className="percent50">
          <h2>Click & Collect</h2>
          <h3>commander et déguster</h3>
          <div className="grid-4 bar-slider-burger">
            <div className="bar-slider-burger-after"></div>
            <div className="slider-burger-block">
              <img className="slider-burger" src="./assets/images/hamburger-double.jpg" alt="Hamburger Double" id="image-burger" />
            </div>
            <div className="slider-burger-block">
              <img className="slider-burger" src="./assets/images/frites-sel.jpg" alt="Frites sel" id="image-accompagnement" />
            </div>
            <div className="slider-burger-block">
              <img className="slider-burger" src="./assets/images/coca-cola.jpg" alt="coca-cola" id="image-boisson" />
            </div>
            <div className="slider-burger-block">
              <img className="slider-burger" src="./assets/images/pancakes.jpg" alt="pancake" id="image-dessert" />
            </div>
          </div>
        </div>
      </div>
      <div className="main-grid" id="nos-burgers">
        <form action="/action_page.php" id="recap"></form>
        <div className="price">
          <p id="price">37€</p>
          <Link to="/Final" className="call-to-action btn-form">
            Suivant
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Recapitulatif;