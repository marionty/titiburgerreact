let form = document.getElementById('boissons-form')

fetch("https://titi.startwin.fr/products/type/boisson")
    .then(result => result.json())
    .then(function (boissons) {
        let HTML = ''
        // Le foreach est une boucle pour les tableaux uniquement qui permet de passer a travers tous les elements du tableau
        boissons.forEach(function (boisson, index) {
            HTML += `
            <div class="choise-burger center grid-3 dashed">
                <div class="choise-burger">
                    <input type="radio" id="Hamburger-${boisson._id}" name="boisson" value="${boisson._id}">
                    <label for="Hamburger-${boisson._id}" class="work-plan">
                        <img src="${boisson.image}" alt="${boisson.name}">
                    </label>
                </div>
                <p>${boisson.name}</p>
                <p class="text-left">${boisson.price.$numberDecimal} €</p>
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

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let input = form.querySelector('input:checked')
    let id = input.value
    fetch('https://titi.startwin.fr/products/' + id)
        .then(result => result.json())
        .then((boisson) => {
            localStorage.setItem('boisson', JSON.stringify(boisson))
            window.location.href = "/nos-desserts.html"
        })
})