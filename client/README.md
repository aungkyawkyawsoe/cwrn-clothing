## Crown Clothing E-commerce
### version 1.0.0
#### E-commerce application for clothing 
---

### `Reselect` for Redux store
Firstly we need to install npm package `reselect` by using this command 

- ```
    npm i reselect --save
  ```     

And then `createSelector` for select the redux storage

- ```
    import { createSelector } from 'reselect';
  ```  

To Select the state

- ```
    const selectCart = state => state.cart;
  ```  

Export structured data, You can destructure anything you like.
- ```
    export const selectCartHidden = createSelector(
        [selectCart],
        cart => cart.hidden
    );
  ```          

When we using `connect` from `react-redux` npm package to get app redux state, If you want to use multiple selector in child component. You can use with `createStructuredSelector`

You Need to import

```
    import { createStructuredSelector } from 'reselect';
```

- From
    ```
        const mapStateToProps = state => ({
            currentUser: selectCurrentUser(state),
            hidden: selectCartHidden(state)
        });
        ```
- To
    ```
        const mapStateToProps = createStructuredSelector({
            currentUser: selectCurrentUser,
            hidden: selectCartHidden
        });
    ```

    - Here we don't need to pass any state to the selector function, only method reference.

### Redux persist store
To store data from redux storage permanently.

#### Installing dependency
- ```
    npm i redux-persist
    ```

#### Configuration
And then `import` in `store.js` 
- ```
    import { persistStore } from 'redux-persist';
    ```

In store.js you can export what you want to store permanently by wrappig `persistStore`, for eg:
- ```
    export const store = createStore(root, 
        composeWithDevTools(
            applyMiddleware(...middlewares)
        )
    );
  ```

-  ```
    export const persistor = persistStore(store);
    ```

#### In root reducer
Import module in root reducer
- ```
    import { persistReducer } from 'redux-persist';
    import storage from 'redux-persist/lib/storage';
    ```

#### Config for Redux-Persist
JSON Object Config 
- ```
    const persistConfig = {
        key: 'root',
        storage,
        whitelist: ['cart']
    }
    ```

And then export like that

- ```
    const rootReducer = combineReducers({
        user: userReducer,
        cart: cartReducer
    });
  ```

- ```
    export default persistReducer(persistConfig, rootReducer);
    ```

#### Calling `store` and `persistor` in index.js root component

- ```
    import { store, persistor } from './redux/store';
    import { PersistGate } from 'redux-persist/integration/react';
    ```
And wrap component like this

- ```
    <Provider store={store}>
        <BrowserRouter>
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
        </BrowserRouter>
    </Provider>
    ```

## Redux Saga
```
import { call, put } from 'redux-saga/effects';
```
- `call` is caller function 
- `put` is a saga effect to create an action
```
import { take } from 'redux-saga/effects';
```
- `take` if we don't use any payload.
- root saga file တစ်ဖိုင်လောက်ဆောက်ဖို့လို
```
import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from '../saga/ShopSagas';

export default function* rootSaga() {
    yield all([
        call(fetchCollectionsStart)
    ])
}
```

တစ်နေရာထဲမှာ ပဲခေါ်ရတော့တယ်