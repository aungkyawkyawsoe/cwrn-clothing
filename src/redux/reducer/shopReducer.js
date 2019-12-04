import SHOP_DATA from '../data/ShopData';
import { UPDATE_COLLECTIONS } from '../actions/types';

const initialState = {
    collections: SHOP_DATA
};

export default (state = initialState, action) => {
switch(action.type) {
        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
        default:
            return state;
    }
}