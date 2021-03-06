import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/actions/cartAction';
import { selectCartItemsCount } from '../../redux/selector/cartSelector';





const CartIcon = ({ itemCount, toggleCartHidden }) => {
    return (
        <div className='cart-icon' onClick={ toggleCartHidden }>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{ itemCount }</span>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
