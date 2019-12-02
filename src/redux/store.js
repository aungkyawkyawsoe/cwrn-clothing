import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import root from './reducer';


const middlewares = [thunk];

export const store = createStore(root, 
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
);

export const persistor = persistStore(store);

