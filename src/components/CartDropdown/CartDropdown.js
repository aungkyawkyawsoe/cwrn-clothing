import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './CartDropdown.scss';
import CartItem from '../CartItem/CartItem';
import CustomButton from '../CustomButton/CustomButton';
import { selectCartItems } from '../../redux/selector/cartSelector';
import { toggleCartHidden } from '../../redux/actions/cartAction';


const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length ? (
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    ) : (
                        <span className='empty-message'>Your cart is empty</span>
                    )                    
                }            
            </div>
            <CustomButton onClick={()=> {
                history.push('/checkout');
                toggleCartHidden();
            }}>GO TO CHECKOUT</CustomButton>            
        </div>
    )
}

const mapStateToProps = state => ({
   cartItems: selectCartItems(state)
});

export default withRouter(
    connect(
        mapStateToProps,
        { toggleCartHidden }
    )(CartDropdown)
);
