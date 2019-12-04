import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/FirebaseUtils';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import { selectCartHidden } from '../../redux/selector/cartSelector';
import { selectCurrentUser } from '../../redux/selector/userSelector';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './HeaderContainer';


const Header = ({ currentUser, hidden }) => {

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>            
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {
                    currentUser ? (
                        <OptionLink to='#!' as='div' onClick={()=> auth.signOut()}>SIGN OUT</OptionLink>
                    ) : (
                        <OptionLink to='/auth'>SIGN IN</OptionLink>
                    )
                }
                <CartIcon/>
            </OptionsContainer>
                { !hidden && <CartDropdown/> }            
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});



export default connect(mapStateToProps)(Header);
