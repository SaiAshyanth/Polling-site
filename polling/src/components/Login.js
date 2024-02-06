import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
        setErrorMessage('');
    };

    const validateLogin = () => {
        if (username.trim() === '' || password.trim() === '') {
            alert('Credentials Required!');
        } else if (username.trim() === 'ashyanth' && password.trim() === '434') {
            alert("Login Successful");
            setIsLoggedIn(true);
        } else {
            alert('Username or Password is wrong');
        }
    };

    if (isLoggedIn) {   
        return <Navigate to="/poll" />;
    }

    return (
        <div className="container1">
            <form id="loginForm">
                <h2>LOGIN</h2>
                <label htmlFor="username">USERNAME</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="password">PASSWORD</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    required
                />
                <button type="button" onClick={validateLogin}>
                    Login
                </button>
                <p id="error-message">{errorMessage}</p>
                <p>
                    Don't have an account? <Link to="/signup" className="signup-link">Sign up</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;