// Récupère élément dans localStorage
const getCart = async (index) => {
    return await JSON.parse(localStorage.getItem(localStorage.key(index)))
}
// Fourni l'affichage du/des produits du panier
const renderCart = (productName, productPrice, imgUrl) => {
    /* Affiche article(s) du panier */
    const article = document.createElement('article');
    article.innerHTML = `
    <img src="${imgUrl}">
    <div class="product-information>
        <p class="product-title">${productName}</p>
        <p class="price">${productPrice}</p>
    </div>
    <p class="remove ">supprimer</p>`
    cart.insertBefore(article, cartTotal); // Insère article avant cartTotal
    
    totalPrice += productPrice; /* Implémente prix */ 
    cartTotal.textContent = `Total : ${totalPrice}€`; /* Affiche le prix total */
}