// Récupère élément dans localStorage
const getCart = async (index) => {
    return await JSON.parse(localStorage.getItem(localStorage.key(index)))
}