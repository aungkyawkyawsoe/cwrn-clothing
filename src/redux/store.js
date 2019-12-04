import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import root from './reducer';

const middlewares = [thunk];

const config = process.env.NODE_ENV === 'development' ? composeWithDevTools(
    applyMiddleware(...middlewares)
) : applyMiddleware(...middlewares);

export const store = createStore(root, config);

export const persistor = persistStore(store);

 