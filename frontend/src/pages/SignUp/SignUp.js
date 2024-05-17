import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
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

        navigate('/home');
    };

    return (
        <div className="sign-up-container">
            <h2>Sign-Up</h2>
            <form onSubmit={handleSubmit} id='sign-up-form'>
                <div className='sign-up-form-field'>
                    <input
                        type="text"
                        id="username"
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
                        name="repassword"
                        placeholder="Retype Password"
                        value={repassword}
                        onChange={(e) => setRePassword(e.target.value)}
                        required
                    />
                </div>
                <div id='sign-up-form-btn'>
                    <input type="submit" value="Sign Up"/>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
