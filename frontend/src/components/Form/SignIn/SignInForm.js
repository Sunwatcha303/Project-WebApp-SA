import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInForm.css'

const SignInForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);

        navigate('/home')
    };

    const handleSignUp = (event) =>{
        event.preventDefault();
        
        
        navigate('/signup')
    } 

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
                        value={username}
                        placeholder='username or email'
                        onChange={(e) => setUsername(e.target.value)}
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
                        placeholder='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div id='sign-in-form-btn'>
                    <input id='sign-in-btn' type="submit" value="Sign In"/>
                    <div id='label-sign-up' onClick={handleSignUp}>Sign Up</div>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;