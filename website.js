fetch('https://fakestoreapi.com/products')
    .then((data) => data.json())
    .then(result => {
        console.log("result", result)
        renderUI(result)
    })
    .catch(error => {
        console.log("error", error)
    })


const renderUI = (items) => {
    const CardsCollection = document.getElementById("cards")
    console.log("parent",CardsCollection)
    for (var product of items) {
        console.log(product, "product")
        
        CardsCollection.innerHTML += `
                <div class="card col-6 col-md-4 col-sm-8" style="width: 20rem;">
            <img src=${product.image} class="card-img-top" alt="..." >
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <hr>
                <p class="category"><b>Category: </b><i>${product.category}</i></p>
                <p class="rating"><b>Ratings: </b><i>${product.rating.rate}</i></p>
                <p class="card-text">${product.description.slice(0,170)}
                <br>
                <p class="price" style="font-weight: 600;">Price: <span>$${product.price}</span></p></p>
                <a href="#" class="btn btn-danger">View item</a>
                <a href="#" class="btn btn-danger">Add to Cart</a>
            </div>
        </div>`
    }
}


   const product =  {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    }

  