import React, { useState } from 'react';

import FormInput from '../FormInput/FormInput';

import { auth, createUserProfileDocument } from '../../firebase/FirebaseUtils';

import './SignUp.scss';
import CustomButton from '../CustomButton/CustomButton';

const SignUp = () => {
    const [state, setState] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });


    const handleChange = e => {
        const { name, value } = e.target;

        setState(prevState => ({ ...prevState, [name]: value }));

    };

    const handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = state;

        if(password !== confirmPassword) {
            alert("Password don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            setState({ 
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
             });
        } catch(e) {
            console.error(e);
            
        }
        
    };


    return (
        <div className='sign-up'>
            <h2 className='title'>I no not have an account</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                
                <FormInput
                    type='text'
                    name='displayName'
                    value={state.displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required />

                <FormInput
                    type='email'
                    name='email'
                    value={state.email}
                    onChange={handleChange}
                    label='Email'
                    required />

                <FormInput
                    type='password'
                    name='password'
                    value={state.password}
                    onChange={handleChange}
                    label='Password'
                    required />
                    
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={state.confirmPassword}
                    onChange={handleChange}
                    label='Confirm Password'
                    required />

                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default SignUp;
