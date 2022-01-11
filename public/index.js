const main = document.querySelector('main')
const iconShopping = document.querySelector('i')
const shoppingCart = document.querySelector('.shopping-cart')
const btnClose = document.querySelector('.close-cart')

fetch("http://localhost:3000/api?")
    .then(response => response.json())
    .then(json => {
        for (const elem of json) {
            var product = document.createElement('section')

            var productTitle = document.createElement('p')
            productTitle.innerHTML = elem.title
            product.appendChild(productTitle)

            var productImage = document.createElement('img')
            productImage.src = elem.imageurl
            product.appendChild(productImage)

            var productPrice = document.createElement('p')
            productPrice.innerHTML = elem.price + '$'
            product.appendChild(productPrice)

            var btnBuy = document.createElement('button')
            btnBuy.textContent = "buy"
            product.appendChild(btnBuy)

            btnBuy.onclick = (e) => {
                console.log(btnBuy.parentNode)
                var productCart = document.createElement('p')
                productCart.innerHTML = e.target.previousSibling.textContent
                shoppingCart.appendChild(productCart)
            }

            var productDescription = document.createElement('p')
            productDescription.innerHTML = elem.description
            product.appendChild(productDescription)

            main.appendChild(product)
        }
    })

iconShopping.addEventListener('click', openCart)
function openCart() {
    if (shoppingCart.style.display = "none") {
        shoppingCart.style.display = "block"
    }
}
btnClose.addEventListener('click', closeCart)
function closeCart() {
    shoppingCart.style.display = "none"
}
