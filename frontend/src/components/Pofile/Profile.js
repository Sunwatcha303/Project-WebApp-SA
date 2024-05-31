import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Profile.css';

import Logo from "../Logo/Logo";

const Profile = () => {
    const navigate = useNavigate();

    const handleSignOut = (event) => {
        event.preventDefault();

        localStorage.removeItem('token');

        navigate('/signin');
    }

    const handleLogoClicked = (event) => {
        event.preventDefault();

        navigate('/');
    }

    return (
        <div id='profile-container'>
            <div id='menu-side'>

            </div>
            <div id='box-info-container'>
                <div id='box-info-logo'>
                    <Logo handleClick={handleLogoClicked} w="200px" h="72px" />
                </div>
                <div id='box-info'>
                    <div id='box-info-detail'>

                    </div>
                    <div id='sign-out'>
                        <div id='sign-out-icon' onClick={handleSignOut}></div>
                        <p>Sign-Out</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;