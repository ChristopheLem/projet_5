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
/* Supprime élément du panier sur un clique*/
const deleteCart = (removeElt, container, productName) => {
    removeElt.addEventListener('click', async () => {/* Gestionnaire d'évènement sur clique */
        await localStorage.removeItem(productName);/* Supprime item du localStorage */
        container.remove(); /* Supprime item du DOM */
        location.reload(true); /* Actualise la page dynamiquement */
    })
}