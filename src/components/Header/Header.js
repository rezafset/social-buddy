import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div class="header">
            <h1>Social Buddy</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/info">Post Info</a>
            </nav>
        </div>
    );
};

export default Header;