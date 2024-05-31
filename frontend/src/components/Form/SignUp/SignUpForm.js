import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpForm.css';

const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle sign-up logic here

        console.log('Username:', username);
        console.log('Fullname:', fullname);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('RePassword:', repassword);

        if(password !== repassword){
            setError('re-password not match')
            return;
        }

        const dataBody = JSON.stringify({username, fullname, email, password});

        try {
            const response = await fetch('http://backend:5001/user/signup/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'o4Eewa9thohSh4uch2EixeegahRee2ba9Veey3Oonai0mohfiequ4Ait1aew5ruth',
                },
                body: dataBody,
                credentials: 'include',
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);

                navigate('/');
            } else {
                setError('An error occurred. Please try again.'); // Generic error message
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An error occurred. Please try again.');
        }

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
                {error && <p className="error-message">{error}</p>}
                <div id='sign-up-form-btn'>
                    <div id='label-sign-in' onClick={handleSignIn}>Sign In</div>
                    <input id='sign-up-btn' type="submit" value="Sign Up"/>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
