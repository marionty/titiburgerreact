const orderId = localStorage.getItem('order')
const orderIdSpan = document.getElementById('orderId')
const orderListUl = document.getElementById('order-list')

fetch('http://localhost:3000/orders/' + orderId)
    .then(data => data.json())
    .then((order) => {
        orderIdSpan.innerText = order._id
        let html = ''
        order.purchasedProducts.forEach(purchasedProduct => {
            html += `<li>${purchasedProduct.product.name} - ${purchasedProduct.unitPrice.$numberDecimal} €</li>`
        })

        orderListUl.innerHTML = html
    })
    .catch(error => console.log(error))