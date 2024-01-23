let form = document.getElementById('accompagnement-form')

fetch("https://titi.startwin.fr/products/type/accompagnement")
    .then(result => result.json())
    .then(function (accompagnements) {
        let HTML = ''
        // Le foreach est une boucle pour les tableaux uniquement qui permet de passer a travers tous les elements du tableau
        accompagnements.forEach(function (accompagnement, index) {
            HTML += `
            <div class="choise-burger center grid-3 dashed">
                <div class="choise-burger">
                    <input type="radio" id="Hamburger-${accompagnement._id}" name="accompagnement" value="${accompagnement._id}">
                    <label for="Hamburger-${accompagnement._id}" class="work-plan">
                        <img src="${accompagnement.image}" alt="${accompagnement.name}">
                    </label>
                </div>
                <p>${accompagnement.name} - ${accompagnement.price.$numberDecimal} €</p>
                <p class="text-left">${accompagnement.description}</p>
            </div>
        `
        })

        form.innerHTML = HTML
    })
    .catch(error => console.log(error))


let burger = JSON.parse(localStorage.getItem('burger'))
let imageBurger = document.getElementById('image-burger')
imageBurger.src = burger.image

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let input = form.querySelector('input:checked')
    let id = input.value
    fetch('https://titi.startwin.fr/products/' + id)
        .then(result => result.json())
        .then((accompagnement) => {
            localStorage.setItem('accompagnement', JSON.stringify(accompagnement))
            window.location.href = "/nos-boissons.html"
        })
})