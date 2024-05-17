import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'

const SignIn = () => {
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
        <div className="login-container">
            <h2>Sign-In</h2>
            <form onSubmit={handleSubmit} id='login-form'>
                <div className='login-form-field'>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        placeholder='username or email'
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className='login-form-field'>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div id='login-form-btn'>
                    <input type="submit" value="Sign In"/>
                    <div id='label-register' onClick={handleSignUp}>Sign Up</div>
                </div>
            </form>
        </div>
    );
};

export default SignIn;