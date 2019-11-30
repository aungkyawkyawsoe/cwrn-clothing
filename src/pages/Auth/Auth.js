import React from 'react';

import './Auth.scss';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';


const Auth = () => {
    return (
        <div className='auth'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default Auth;
