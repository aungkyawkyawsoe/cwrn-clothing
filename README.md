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

When we using `connect` from `react-redux` npm package to get app redux state, If you want to use multiple selector in child component. You can use with `createStructuredSelector`

You Need to import

`import { createStructuredSelector } from 'reselect';`

- From
    - `const mapStateToProps = state => ({
            currentUser: selectCurrentUser(state),
            hidden: selectCartHidden(state)
    });`

- To
    - `const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});`

    - Here we don't need to pass any state to the selector function, only method reference.


