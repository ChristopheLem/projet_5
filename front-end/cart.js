const cart = document.querySelector('#cart'); // Récupère la section du panier
const cartTotal = document.getElementById('cart-total'); //Récupère le h3 pour le prix total
const form = document.querySelector('form'); // Récupère le formulaire

const cartInformation = {
    contact: {},
    products: []
}
/* Stock le prix total */
let totalPrice = 0;

// Affiche le/les produit(s) du panier.
const displayCart = async () => {
    if(localStorage.length > 0) { 
        for (let i = 0; i < localStorage.length; i++) { // Pour chaque article du panier
        const product = await getCart(i) // Récupère les informations du produit
        const teddyId = product[0]; // Stocke l'id du produit
        const teddyName = product[1]; // Stocke le nom du produit
        const teddyPrice = product[2] / 1000; // Stocke le prix du produit
        const teddyImg = product[3]; // Stocke l'image du produit
        cartInformation.products.push(teddyId); // Envoie l'id du produit au tableau products de cartInformation

        renderCart(teddyName, teddyPrice, teddyImg) // Fourni l'affichage du/des produits du panier

        const remove = document.querySelectorAll('.remove')[i]; 
        const article = document.querySelectorAll('article')[i];

        deleteCart(remove, article, teddyName) 
        }
    } else {
        cart.textContent = 'Votre panier est vide.';
        form.classList.add('invisible')
    }   
}
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
displayCart();