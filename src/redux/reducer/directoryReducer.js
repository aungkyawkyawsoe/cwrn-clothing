import SECTIONS from '../data/SectionsData';

const initialState = {
    sections: SECTIONS
};

export default (state = initialState, action) => {
    switch(action.type) {            
        default:
            return state;
    }
}