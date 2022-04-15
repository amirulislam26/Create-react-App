import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1 className='text-color'><i><span>Tech-Amirul-Islam-websize-Naw</span></i></h1>
            <nav className='manu'>
                <a href="/Home">Home</a>
                <a href="/Countries">Countries</a>
                <a href="/About">About</a>
            </nav>
        </div>
    );
};

export default Header;