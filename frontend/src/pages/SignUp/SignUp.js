import React, { useState, useEffect } from 'react';
import isTokenExpired from '../../utils/utils';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

import Logo from '../../components/Logo/Logo'
import SignUpForm from '../../components/Form/SignUp/SignUpForm';

const SignUp = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && !isTokenExpired(token)) {
            navigate('/');
        }
    });

    return (
        <div className="sign-up-container">
            <Logo />
            <SignUpForm />
        </div>
    );
};

export default SignUp;
