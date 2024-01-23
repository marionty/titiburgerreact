import React, { useState, useEffect } from 'react';
import './style.css';

const NosBoissons = () => {
  const [boissons, setBoissons] = useState([]);
  const [selectedBurgerImage, setSelectedBurgerImage] = useState('');
  const [selectedAccompagnementImage, setSelectedAccompagnementImage] = useState('');

  useEffect(() => {
    fetchBoissons();
    setSelectedBurgerImage(JSON.parse(localStorage.getItem('burger')).image);
    setSelectedAccompagnementImage(JSON.parse(localStorage.getItem('accompagnement')).image);
  }, []);

  const fetchBoissons = () => {
    fetch('https://titi.startwin.fr/products/type/boisson')
      .then(response => response.json())
      .then(data => setBoissons(data))
      .catch(error => console.log(error));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const input = document.querySelector('input:checked');
    const id = input.value;

    fetch(`https://titi.startwin.fr/products/${id}`)
      .then(response => response.json())
      .then(boisson => {
        localStorage.setItem('boisson', JSON.stringify(boisson));
        window.location.href = "/NosDesserts";
      });
  };

  return (
    <main className="optimal-width">
      <div className="main-grid">
        <div className="percent50 text-left">
          <h1 className="text-left">Nos Boissons</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim mi at ultrices praesent posuere sit.
            Pulvinar est sagittis in ultrices. Mauris est sed id orci, massa in. Leo duis sed eu lacinia bibendum fermentum
            ac cras.Lorem ipsum
          </p>
        </div>
        <div className="percent50">
          <h2>Click & Collect</h2>
          <h3>commandez et dégustez</h3>
          <div className="grid-4 bar-slider-burger">
            <div className="bar-slider-burger-after"></div>
            <div className="slider-burger-block ">
              <img className="slider-burger" src={selectedBurgerImage} alt="Hamburger Double" id="image-burger" />
            </div>
            <div className="slider-burger-block">
              <img className="slider-burger" src={selectedAccompagnementImage} alt="Frites torsadés" id="image-accompagnement" />
            </div>
            <div className="slider-burger-block">
              <div className="slider-burger"></div>
            </div>
            <div className="slider-burger-block ">
              <div className="slider-burger"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-grid" id="nos-burgers">
        <form action="/action_page.php" className="grid-2" id="boissons-form" onSubmit={handleFormSubmit}>
          {boissons.map(boisson => (
            <div key={boisson._id} className="choise-burger center grid-3 dashed">
              <div className="choise-burger">
                <input type="radio" id={`Hamburger-${boisson._id}`} name="boisson" value={boisson._id} />
                <label htmlFor={`Hamburger-${boisson._id}`} className="work-plan">
                  <img src={boisson.image} alt={boisson.name} />
                </label>
              </div>
              <p>{boisson.name}</p>
              <p className="text-left">{boisson.price.$numberDecimal} €</p>
            </div>
          ))}
        </form>
        <button className="call-to-action btn-form" form="boissons-form">Suivant</button>
      </div>
    </main>
  );
};

export default NosBoissons;
