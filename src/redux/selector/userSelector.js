import { createSelector } from 'reselect';

/** Select State for User **/ 
const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.selectCurrentUser    
)