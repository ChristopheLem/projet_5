// URL de l'api
const url = 'http://localhost:3000/api/teddies'

// Affiche tous les produits
const displayProducts = async () => {
    const products = await getAllTeddies(url)
    products.forEach(product => {
    renderProduct(product.name, product._id, product.imageUrl, product.price);
    });
}
// Récupère tous les ours en peluche
const getAllTeddies = async (url) => {
    const response = await fetch(url);
    return await response.json();
}

const convertPrice = (number) => {
    return (number / 1000).toString().replace('.', ',');
}
// Fourni l'affichage d'un produit 
function renderProduct (productName, productId, productImg, productPrice) {
    const products = document.querySelector('#products');   
    const article = document.createElement('article');
    article.innerHTML = `<img alt="${productName}" src="${productImg}">
    <button class="product-link" type="button"><a href="product/index.html?id=${productId}">Voir</a></button>
    <p class="product-title">${productName}</p>
    <p class="price">${convertPrice(productPrice)}</p>
    `
    products.appendChild(article);     
}

displayProducts();