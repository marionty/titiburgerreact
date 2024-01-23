import React, { useState, useEffect } from 'react';
import './style.css';

const NosAccompagnements = () => {
  const [accompagnements, setAccompagnements] = useState([]);
  const [selectedBurgerImage, setSelectedBurgerImage] = useState('');

  useEffect(() => {
    fetch("https://titi.startwin.fr/products/type/accompagnement")
      .then(result => result.json())
      .then(accompagnements => setAccompagnements(accompagnements))
      .catch(error => console.log(error));

    const burger = JSON.parse(localStorage.getItem('burger'));
    setSelectedBurgerImage(burger.image);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const input = document.querySelector('input:checked');
    const id = input.value;

    fetch('https://titi.startwin.fr/products/' + id)
      .then(result => result.json())
      .then(accompagnement => {
        localStorage.setItem('accompagnement', JSON.stringify(accompagnement));
        window.location.href = "/NosBoissons";
      });
  };

  return (
    <main className="optimal-width">
      <div className="main-grid">
        <div className="percent50 text-left">
          <h1 className="text-left">Nos Accompagnements</h1>
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
              <div className="slider-burger"></div>
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
        <form action="/action_page.php" id="accompagnement-form" onSubmit={handleFormSubmit}>
          {accompagnements.map(accompagnement => (
            <div key={accompagnement._id} className="choise-burger center grid-3 dashed">
              <div className="choise-burger">
                <input type="radio" id={`Hamburger-${accompagnement._id}`} name="accompagnement" value={accompagnement._id} />
                <label htmlFor={`Hamburger-${accompagnement._id}`} className="work-plan">
                  <img src={accompagnement.image} alt={accompagnement.name} />
                </label>
              </div>
              <p>{accompagnement.name} - {accompagnement.price.$numberDecimal} €</p>
              <p className="text-left">{accompagnement.description}</p>
            </div>
          ))}
        </form>
        <button className="call-to-action btn-form" form="accompagnement-form">Suivant</button>
      </div>
    </main>
  );
};

export default NosAccompagnements;
