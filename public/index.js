const main = document.querySelector('main')

fetch("http://localhost:3000/api?")
    .then(response => response.json())
    .then(json => {
        for (const elem of json) {
            var product = document.createElement('p')
            product.innerHTML = elem.title
            main.appendChild(product)
            console.log(elem.title)
        }
    })




