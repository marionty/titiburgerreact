let form = document.getElementById('desserts-form')

fetch("https://titi.startwin.fr/products/type/dessert")
    .then(result => result.json())
    .then(function (desserts) {
        let HTML = ''
        // Le foreach est une boucle pour les tableaux uniquement qui permet de passer a travers tous les elements du tableau
        desserts.forEach(function (dessert, index) {
            HTML += `
            <div class="choise-burger center grid-3 dashed">
                <div class="choise-burger">
                    <input type="radio" id="Hamburger-${dessert._id}" name="dessert" value="${dessert._id}">
                    <label for="Hamburger-${dessert._id}" class="work-plan">
                        <img src="${dessert.image}" alt="${dessert.name}">
                    </label>
                </div>
                <p>${dessert.name}</p>
                <p class="text-left">${dessert.price.$numberDecimal} €</p>
            </div>
        `
        })

        form.innerHTML = HTML
    })
    .catch(error => console.log(error))

let burger = JSON.parse(localStorage.getItem('burger'))
let imageBurger = document.getElementById('image-burger')
imageBurger.src = burger.image

let accompagnement = JSON.parse(localStorage.getItem('accompagnement'))
let imageAccompagnement = document.getElementById('image-accompagnement')
imageAccompagnement.src = accompagnement.image

let boisson = JSON.parse(localStorage.getItem('boisson'))
let imageBoisson = document.getElementById('image-boisson')
imageBoisson.src = boisson.image

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let input = form.querySelector('input:checked')
    let id = input.value
    fetch('https://titi.startwin.fr/products/' + id)
        .then(result => result.json())
        .then((dessert) => {
            localStorage.setItem('dessert', JSON.stringify(dessert))
            window.location.href = "/recapitulatif.html"
        })
})