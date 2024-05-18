import React, { useState, useEffect } from 'react';

import './SignIn.css'

import SignInForm from '../../components/Form/SignIn/SignInForm';
import Logo from '../../components/Logo/Logo';

const SignIn = () => {
    
    return (
        <div className="sign-in-container">
            <Logo />
            <SignInForm />
        </div>
    );
};

export default SignIn;