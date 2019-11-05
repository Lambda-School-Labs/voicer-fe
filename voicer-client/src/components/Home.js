import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
        <h1 className="welcome-title">Welcome to Voicer</h1>

        <div className="choice">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
        </div>
        </div>
    )
}

export default Home;
