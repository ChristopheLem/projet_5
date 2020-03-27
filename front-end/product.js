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
