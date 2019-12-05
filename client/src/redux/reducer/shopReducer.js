import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from '../actions/types';

const initialState = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
};

export default (state = initialState, action) => {
switch(action.type) {
        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            };        
        case FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }         
        default:
            return state;
    }
}