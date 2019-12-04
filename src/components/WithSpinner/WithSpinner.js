import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './WithSpinnerContainer';



const WithSpinner = WrappedComponent => ({ isLoading,  ...props }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ) : (
        <WrappedComponent { ...props }/>
    )
}

export default WithSpinner;
