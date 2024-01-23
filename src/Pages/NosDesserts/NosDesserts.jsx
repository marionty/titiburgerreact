import React, { useState, useEffect } from 'react';
import './style.css';

const NosDesserts = () => {
  const [desserts, setDesserts] = useState([]);
  const [selectedBurgerImage, setSelectedBurgerImage] = useState('');
  const [selectedAccompagnementImage, setSelectedAccompagnementImage] = useState('');
  const [selectedBoissonImage, setSelectedBoissonImage] = useState('');

  useEffect(() => {
    fetchDesserts();
    setSelectedBurgerImage(JSON.parse(localStorage.getItem('burger')).image);
    setSelectedAccompagnementImage(JSON.parse(localStorage.getItem('accompagnement')).image);
    setSelectedBoissonImage(JSON.parse(localStorage.getItem('boisson')).image);
  }, []);

  const fetchDesserts = () => {
    fetch('https://titi.startwin.fr/products/type/dessert')
      .then(response => response.json())
      .then(data => setDesserts(data))
      .catch(error => console.log(error));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const input = document.querySelector('input:checked');
    const id = input.value;

    fetch(`https://titi.startwin.fr/products/${id}`)
      .then(response => response.json())
      .then(dessert => {
        localStorage.setItem('dessert', JSON.stringify(dessert));
        window.location.href = "/Recapitulatif";
      });
  };

  return (
    <main className="optimal-width">
      <div className="main-grid">
        <div className="percent50 text-left">
          <h1 className="text-left">Nos Desserts</h1>
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
              <img className="slider-burger" src={selectedBoissonImage} alt="Limonade" id="image-boisson" />
            </div>
            <div className="slider-burger-block ">
              <div className="slider-burger"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-grid" id="nos-burgers">
        <form action="/action_page.php" id="desserts-form" onSubmit={handleFormSubmit}>
          {desserts.map(dessert => (
            <div key={dessert._id} className="choise-burger center grid-3 dashed">
              <div className="choise-burger">
                <input type="radio" id={`Dessert-${dessert._id}`} name="dessert" value={dessert._id} />
                <label htmlFor={`Dessert-${dessert._id}`} className="work-plan">
                  <img src={dessert.image} alt={dessert.name} />
                </label>
              </div>
              <p>{dessert.name}</p>
              <p className="text-left">{dessert.price.$numberDecimal} €</p>
            </div>
          ))}
          <button className="call-to-action btn-form" type="submit">Suivant</button>
        </form>
      </div>
    </main>
  );
};

export default NosDesserts;
