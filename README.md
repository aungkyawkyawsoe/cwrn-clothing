## Crown Clothing E-commerce
version 1.0.0

---

### `Reselect` for Redux store
Firstly we need to install npm package `reselect` by using this command 

- `npm i reselect --save`     

And then `createSelector` for select the redux storage

- `import { createSelector } from 'reselect';`

To Select the state

- `const selectCart = state => state.cart;`

Export structured data, You can destructure anything you like.
- `export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);`


