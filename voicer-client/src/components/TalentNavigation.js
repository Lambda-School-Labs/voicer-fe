import React from 'react';
import { Link } from 'react-router-dom';

function TalentNavigation () {
    return(
        <div className='TalentNavigation'>
            <div className='TalentNavigationLogo'>
                <h1 className='logo'>Voicer</h1>
            </div>
            <div className='TalentNavigationLinks'>
                <Link to='/talent'>Browse Jobs</Link>
                <Link to='/talent/applications'>My Applications</Link>
                <Link to='/talent/messages'>Messages</Link>
                <Link to='/talent/profile'>My Profile</Link>
            </div>
        </div>
    )
}

export default TalentNavigation;