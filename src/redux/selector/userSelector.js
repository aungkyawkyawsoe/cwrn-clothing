import { createSelector } from 'reselect';

/** Select State for User **/ 
const selectUser = state => state.user;

/** Select State for Cart **/ 
const selectCart = state => state.cart;


export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.selectCurrentUser    
)