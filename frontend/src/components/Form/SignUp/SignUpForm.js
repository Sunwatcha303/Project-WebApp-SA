import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.css';

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle sign-up logic here

        console.log('Username:', username);
        console.log('Fullname:', fullname);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('RePassword:', repassword);

        navigate('/');
    };

    const handleSignIn = () =>{
        navigate('/signin');
    }

    return (
        <div className="sign-up-form-container">
            <h1>Sign-Up</h1>
            <form onSubmit={handleSubmit} id='sign-up-form'>
                <div className='sign-up-form-field'>
                    <input
                        type="text"
                        id="username"
                        className='input-field'
                        name="username"
                        placeholder="User Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className='sign-up-form-field'>
                    <input
                        type="text"
                        id="fullname"
                        className='input-field'
                        name="fullname"
                        placeholder="Full Name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        required
                    />
                </div>
                <div className='sign-up-form-field'>
                    <input
                        type="email"
                        id="email"
                        className='input-field'
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='sign-up-form-field'>
                    <input
                        type="password"
                        id="password"
                        className='input-field'
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className='sign-up-form-field'>
                    <input
                        type="password"
                        id="repassword"
                        className='input-field'
                        name="repassword"
                        placeholder="Retype Password"
                        value={repassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        required
                    />
                </div>
                <div id='sign-up-form-btn'>
                    <div id='label-sign-in' onClick={handleSignIn}>Sign In</div>
                    <input id='sign-up-btn' type="submit" value="Sign Up"/>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
