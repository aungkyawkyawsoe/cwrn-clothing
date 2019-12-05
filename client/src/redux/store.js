import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import root from './reducer';
import rootSaga from './saga';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];


if(process.env.NODE_ENV==='development') {
    middlewares.push(logger); 
} 

const config = process.env.NODE_ENV === 'development' ? composeWithDevTools(
    applyMiddleware(...middlewares)    
) : applyMiddleware(...middlewares);


export const store = createStore(root, config);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);




 