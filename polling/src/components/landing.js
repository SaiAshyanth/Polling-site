import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const Home = () => {
    return (
        <div>
            <h1>Welcome to LIVE POLLING</h1>
            <p>
            "Experience real-time interaction: Join the conversation with live, interactive polling."
            </p>
            <div className="button-container">
                <Link to="/login" className="button-link">Login</Link>
                <span className="button-space"></span>
                <Link to="/signup" className="button-link">Signup</Link>
            </div>
        </div>
    );
};

export default Home;