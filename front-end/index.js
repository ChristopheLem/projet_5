// URL de l'api
const url = 'http://localhost:3000/api/teddies'

// Récupère tous les ours en peluche
const getAllTeddies = async (url) => {
    const response = await fetch(url);
    return await response.json();
}

// Fourni l'affichage d'un produit 
function renderProduct (productName, productId, productImg, productPrice) {
    const products = document.querySelector('#products');  // Récupère la div qui contiendra les différents articles 
    const article = document.createElement('article');
    article.innerHTML = `<img alt="${productName}" src="${productImg}">
    <button class="product-link" type="button"><a href="product/index.html?id=${productId}">Voir</a></button>
    <p class="product-title">${productName}</p>
    <p class="price">${productPrice / 1000}</p>
    `
    products.appendChild(article);     
}

