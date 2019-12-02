import SHOP_DATA from '../data/ShopData';

const initialState = {
    collections: SHOP_DATA
};

export default (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}