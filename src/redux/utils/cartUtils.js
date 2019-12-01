/** Add Item to the Cart **/ 
export const addItemToCart = (cartItems, addItemToCart) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === addItemToCart.id);

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === addItemToCart.id ? {
                ...cartItem,
                quantity: cartItem.quantity + 1                        
            } : cartItem);
    } 

    return  [ ...cartItems, {...addItemToCart, quantity: 1 }];
};

/** Remove Item from the same item list **/ 
export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? (
        {...cartItem, quantity: cartItem.quantity -1 }
    ): cartItem);
};