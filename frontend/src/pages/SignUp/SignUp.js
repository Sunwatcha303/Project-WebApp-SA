import React, { useState } from 'react';

import './SignUp.css';

import Logo from '../../components/Logo/Logo'
import SignUpForm from '../../components/Form/SignUp/SignUpForm';

const SignUp = () => {

    return (
        <div className="sign-up-container">
            <Logo />
            <SignUpForm />
        </div>
    );
};

export default SignUp;
