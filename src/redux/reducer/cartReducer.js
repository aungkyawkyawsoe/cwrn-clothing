import { SET_TOGGLE_HIDDEN } from "../actions/types";

const initialState = {
    hidden: true
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_TOGGLE_HIDDEN:
            return {                 
                hidden: !state.hidden
            };
        default:
            return state;
    }
}