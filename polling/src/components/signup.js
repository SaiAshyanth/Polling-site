// Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importing useNavigate hook
import './signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reenterPassword, setReenterPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'reenterPassword') {
            setReenterPassword(value);
        }
        setErrorMessage('');
    };

    const validateSignup = () => {
        if (username.trim() === '' || email.trim() === '' || password.trim() === '' || reenterPassword.trim() === '') {
            alert('All fields are required!');
        } else if (password !== reenterPassword) {
            alert('Passwords do not match!');
        } else {
            // Perform signup logic here
            alert('Signup successful!');
            // Navigate to /tracker upon successful signup
            navigate('/poll');
        }
    };

    return (
        <div className="container">
            <form id="signupForm">
                <h2>Sign Up</h2>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="reenterPassword">Re-enter Password</label>
                <input
                    type="password"
                    id="reenterPassword"
                    name="reenterPassword"
                    value={reenterPassword}
                    onChange={handleInputChange}
                    required
                />
                <button type="button" onClick={validateSignup}>
                    Sign Up
                </button>
                <p id="error-message">{errorMessage}</p>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Signup;
