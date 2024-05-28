import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Profile from "../../components/Pofile/Profile";

import isTokenExpired from '../../utils/utils';

const Setting = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token || isTokenExpired(token)) {
            localStorage.removeItem('token');
            navigate('/signin');
        }
    });

    return (
        <div id="setting-container">
            <Profile />
        </div>
    );
}

export default Setting;