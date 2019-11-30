import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import root from './reducer' ;

const middlewares = [ thunk];

const store = createStore(root, 
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);


export default store;