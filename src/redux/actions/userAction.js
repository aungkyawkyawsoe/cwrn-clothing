import { SET_CURRENT_USER } from "./types"


// Set Current User
export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
});


