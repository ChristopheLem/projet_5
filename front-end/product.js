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

// Personnalise le produit
const customizeYourTeddy = (parentElt, productColors) => {
    // Crée liste déroulante
    const label = document.createElement('label');
    const select = document.createElement('select');

    label.setAttribute('for', 'color-list');
    label.textContent = 'Couleurs disponibles : '
    select.id = "color-list";

    parentElt.appendChild(label);
    parentElt.appendChild(select);
    // Crée une balise option pour chaque couleur
    productColors.forEach(productColor => {
        const option = document.createElement('option');
        option.value = productColor;
        option.textContent = productColor.toUpperCase();
        select.appendChild(option);
    })
    // Récupère la couleur choisie dans la console
    select.addEventListener('change', (e) => {
        colorChosen = e.target.value.toLowerCase();
        console.log(colorChosen);        
    });
}
