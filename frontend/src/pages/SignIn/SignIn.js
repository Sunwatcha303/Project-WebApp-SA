import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import isTokenExpired from '../../utils/utils';
import './SignIn.css'

import SignInForm from '../../components/Form/SignIn/SignInForm';
import Logo from '../../components/Logo/Logo';

const SignIn = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && !isTokenExpired(token)) {
            navigate('/');
        }
    });

    return (
        <div className="sign-in-container">
            <Logo />
            <SignInForm />
        </div>
    );
};

export default SignIn;