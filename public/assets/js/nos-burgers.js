let form = document.getElementById('burger-form')

fetch("https://titi.startwin.fr/products/type/burger")
    .then(result => result.json())
    .then(function (burgers) {
        let HTML = ''
        // Le foreach est une boucle pour les tableaux uniquement qui permet de passer a travers tous les elements du tableau
        burgers.forEach(function (burger, index) {
            HTML += `
            <div class="choise-burger center grid-3 dashed">
                <div class="choise-burger">
                    <input type="radio" id="Hamburger-${burger._id}" name="burger" value="${burger._id}">
                    <label for="Hamburger-${burger._id}" class="work-plan">
                        <img src="${burger.image}" alt="${burger.name}">
                    </label>
                </div>
                <p>${burger.name} - ${burger.price.$numberDecimal}</p>
                <p class="text-left">${burger.description}</p>
            </div>
        `
        })

        form.innerHTML = HTML
    })
    .catch(error => console.log(error))

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let input = document.querySelector('input:checked')
    let id = input.value
    fetch("https://titi.startwin.fr/products/" + id)
        .then(result => result.json())
        .then(function (burger) {
            localStorage.setItem('burger', JSON.stringify(burger))
            window.location.href = '/nos-accompagnements.html'
        })
})