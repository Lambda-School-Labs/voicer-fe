import React from 'react';
import Login from '../components/Login/Login';
import Register from '../components/Register';

const OnboardingView = (props) => {
    return (
    <div>
        <Login />
        <Register />
    </div>
    );
}

export default OnboardingView;