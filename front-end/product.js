// URL de l'api
const url = 'http://localhost:3000/api/teddies/';
// Recupere les paramètres de l'url
const params = new URLSearchParams(window.location.search)
const id = params.get("id")

// Récupère un teddy bear
const getOneTeddy = async (productUrl, productId) => {
    const response = await fetch(productUrl + productId);
    return await response.json();
}
// Fourni l'affichage selon les données du produit
const renderTeddy = (productData) => {
    article.innerHTML = `
    <div class="product">
        <img src="${productData.imageUrl}" alt="${productData.name}">
        <div class="product-information">
            <h2 class="product-title">${productData.name}</h2>
            <p class="price">${productData.price / 1000}</p>       
            <p class="description">${productData.description}</p>
        </div>
    </div>`;
}

