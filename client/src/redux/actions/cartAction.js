import { SET_TOGGLE_HIDDEN, ADD_ITEM, CLEAR_ITEM_FROM_CART, REMOVE_ITEM } from "./types";

/** Set Hidden **/
export const toggleCartHidden = () => ({
    type: SET_TOGGLE_HIDDEN
});

/** Add item to cart **/
export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
});

/** Remove Item from same item list **/
export const removeItem = item => ({
    type: REMOVE_ITEM,
    payload: item
})

/** Clear cart items from list **/
export const clearItemFromCart = item => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
});
