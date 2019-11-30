import React, { useState } from 'react';

import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { signInWithGoogle } from '../../firebase/FirebaseUtils';


const SignIn = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = e => {
        e.preventDefault();

        setState({ email: '', password: '' });
    }

    const handleChange = e => {
        const { name, value } = e.target;

        setState(prevState => ({ ...prevState, [name]: value }));
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign with your email and password</span>

            <form onSubmit={handleSubmit}>

                <FormInput
                    onChange={handleChange}
                    type="email"
                    name="email"
                    value={state.email}
                    label="Email"
                    required />

                <FormInput
                    onChange={handleChange}
                    type="password"
                    name="password"
                    label="Password"
                    value={state.password}
                    required />

                <div className="buttons">
                    <CustomButton type="submit"> Submit Form </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
                </div>


            </form>
        </div>
    )
}

export default SignIn;
