const addCart = (product) => {
    // Insert Product to Cart(localstorage), and remove duplicate product
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    let productID = product.id;

    //object hasOwnProperty() method
    if (cart.hasOwnProperty(productID)) {
        return false;
    }else{
        cart[productID] = product;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    return true;
}

const getCart = () => {
    return JSON.parse(localStorage.getItem('cart')) || {};
}

const removeCart = (productID) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || {};
    delete cart[productID];
    localStorage.setItem('cart', JSON.stringify(cart));
}

const addOrder = (order) => {
    // Insert Order to Order(localstorage)
    sessionStorage.setItem('order', JSON.stringify(order));
}

const getOrder = () => {
    return JSON.parse(sessionStorage.getItem('order')) || [];
}

const setCar = (car) => {
    sessionStorage.setItem('car', JSON.stringify(car));
}

export default {
    addCart,
    getCart,
    removeCart,
    addOrder,
    getOrder,
    setCar
};
