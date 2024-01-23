import React, { useState, useEffect } from 'react';
import './style.css';

const NosBurgers = () => {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    fetch("https://titi.startwin.fr/products/type/burger")
      .then(result => result.json())
      .then(burgers => setBurgers(burgers))
      .catch(error => console.log(error));
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const input = document.querySelector('input:checked');
    const id = input.value;

    fetch("https://titi.startwin.fr/products/" + id)
      .then(result => result.json())
      .then(burger => {
        localStorage.setItem('burger', JSON.stringify(burger));
        window.location.href = '/nosaccompagnements';
      });
  };

  return (
    <main className="optimal-width">
      <div className="main-grid">
        <div className="percent50 text-left">
          <h1 className="text-left">Nos burgers</h1>
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
            <div className="slider-burger-block">
              <div className="slider-burger"></div>
            </div>
            <div className="slider-burger-block">
              <div className="slider-burger"></div>
            </div>
            <div className="slider-burger-block">
              <div className="slider-burger"></div>
            </div>
            <div className="slider-burger-block">
              <div className="slider-burger"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-grid" id="nos-burgers">
        <form action="" id="burger-form" onSubmit={handleFormSubmit}>
          {burgers.map(burger => (
            <div key={burger._id} className="choise-burger center grid-3 dashed">
              <div className="choise-burger">
                <input type="radio" id={`Hamburger-${burger._id}`} name="burger" value={burger._id} />
                <label htmlFor={`Hamburger-${burger._id}`} className="work-plan">
                  <img src={burger.image} alt={burger.name} />
                </label>
              </div>
              <p>{burger.name} - {burger.price.$numberDecimal}</p>
              <p className="text-left">{burger.description}</p>
            </div>
          ))}
        </form>
        <button className="call-to-action btn-form" form="burger-form" type="submit">Suivant</button>
      </div>
    </main>
  );
};

export default NosBurgers;