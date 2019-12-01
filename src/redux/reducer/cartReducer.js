import { SET_TOGGLE_HIDDEN, ADD_ITEM } from "../actions/types";


const initialState = {
    hidden: true,
    cartItems: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_TOGGLE_HIDDEN:
            return {   
                ...state,              
                hidden: !state.hidden
            };
        case ADD_ITEM:
            const existingCartItem = state.cartItems.find(cartItem => cartItem.id === action.payload.id);

            if(existingCartItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(cartItem => 
                    cartItem.id === action.payload.id ? {
                        ...cartItem,
                        quantity: cartItem.quantity + 1                        
                    } : cartItem)
                };
            } 

            return {
                ...state,
                cartItems: [ ...state.cartItems, {...action.payload, quantity: 1 } ]
            }    
        default:
            return state;
    }
}