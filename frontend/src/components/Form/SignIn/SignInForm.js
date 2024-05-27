import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import isTokenExpired from '../../../utils/utils';
import './SignInForm.css';

const SignInForm = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const dataBody = JSON.stringify({ usernameOrEmail, password });
        console.log(dataBody);

        try {
            const response = await fetch('http://localhost:5001/signin/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: dataBody,
                credentials: 'include',
            });

            const data = await response.json();

            if (response.ok) {
                // Store the token in localStorage or cookies
                localStorage.setItem('token', data.token);
                // Or store the token in cookies (example using js-cookie library)
                // import Cookies from 'js-cookie';
                // Cookies.set('token', data.token, { expires: 7 });

                navigate('/');
            } else {
                if (response.status === 401) {
                    setError('Invalid username or password'); // Display user-friendly message
                } else {
                    setError('An error occurred. Please try again.'); // Generic error message
                }
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again.');
        }
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        navigate('/signup');
    };

    return (
        <div className="sign-in-form-container">
            <h1>Sign-In</h1>
            <form onSubmit={handleSubmit} id='sign-in-form'>
                <div className='sign-in-form-field'>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className='sign-in-input-field'
                        value={usernameOrEmail}
                        placeholder='Username or email'
                        onChange={(e) => setUsernameOrEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='sign-in-form-field'>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className='sign-in-input-field'
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                <div id='sign-in-form-btn'>
                    <input id='sign-in-btn' type="submit" value="Sign In" />
                    <div id='label-sign-up' onClick={handleSignUp}>Sign Up</div>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;