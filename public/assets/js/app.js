let int = 1; // Integer = nombre entier (sans virgules)
let float = 25.3; // Float = nombre a virgule
let string = '25'; // String = chaine de caractere
let array = [
  'test',
  'test2'
]; // Array = tableau
let bool = true; // boolean = vrai ou faux

// La cle / index est la partie avant les : et la valeur est la partie a droite des :
let object = {
  nom: 'Couet',
  prenom: 'Robin',
  age: 25
};  // Object

let concat = object.prenom + ' ' + object.nom;
// console.log(concat);
// Je compare le type et la valeur de chaque variable donc c'est faux (string et int sont différents)
// console.log(string === object.age);

// Je transforme la string en Int et donc la comparaison est vrai
// console.log(parseInt(string) === object.age);

// Permet de modifier l'index de notre objet (l'index etant nom et la valeur Adil)
object.nom = 'Adil';

// console.log(object);

// Renvois vrai si la personne a 18 ans ou plus, sinon renvois faux
function estMajeur(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// Je stock le résultat de la fonction dans la variable majeur
let majeur = estMajeur(object.age);

if (majeur) { // si majeur est vrai
  // alert('Salut');
} else { // sinon
  // alert('degage');
}

// premiere partie, on declare la variable pour notre boucle
// 2eme partie, condition d'arret de la boucle
// 3eme partie, incrémentation de notre variable
// le code entre les accolades s'execute puis le i++
for (let i = 0; i < 10; i++) {
  // console.log(i);
}

// Le while contient uniquement la condition d'arret de la boucle, 
// il faut donc déclarer la variable avant et faire l'incrémentation dans la boucle
let j = 0;
while (j < 10) {
  // console.log(j);
  // On met toujours l'incrementation a la fin de la boucle pour ne pas avoir un décalage de la valeur de j
  j++;
}

// Le foreach est une boucle pour les tableaux uniquement qui permet de passer a travers tous les elements du tableau
array.forEach(function (element, index) {
  // console.log(element);
  // console.log(index);
});

// Permet de passer a travers un tableau en recuperant uniquement la valeur de chaque entrée
for (let element of array) {
  // console.log(element);
}

// En JS pur, pour faire un foreach sur un objet, on transforme l'objet en tableau avec uniquement les clés dedans (via Object.keys)
// Puis on foreach sur ce tableau pour récupérer individuellement les clés
// Puis on récupère la valeur associée via object[key] 
// C'est de la merde mais pas le choix
Object.keys(object).forEach((key, index) => {
  // console.log(key);
  let value = object[key];
  // console.log(value);
});

// Je récupère tous les H2 de ma page sous la forme d'un tableau d'element
// querySelectorAll renvois un tableau d'elements alors que querySelector renvois un seul element
let h2_array = document.querySelectorAll('h2');

// je passe a travers mon tableau d'element
h2_array.forEach(function (h2) {
  // je récup chaque element 1 par 1 et je change sa couleur en noir
  h2.style.color = "black";

  h2.addEventListener('click', function (event) {
    // event.target.innerText = event.target.innerText + ' clické';
    // Permet de concatener du text en le rajoutant a l'existant
    event.target.innerText += " clické";
  });
});

// Création d'un tableau avec des objets a l'intereur
// Cela permet de faire un forEach dessus sans soucis car c'est un tableau
// et on recupere chaque valeur sous forme d'objet
let names = [
  {
    firstName: 'Adil',
    lastName: 'test',
  },
  {
    firstName: 'Robin',
    lastName: 'Couet'
  }
];

names.forEach(function (valeur) {
  console.log(valeur);
})