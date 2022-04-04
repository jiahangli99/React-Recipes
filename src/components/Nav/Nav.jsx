import React from 'react';
import './Nav.css'

function Nav(props) {
    return (
        <div className='nav'>
            <li className='navButton'>Home</li>
            <li className='navButton'>Add New Recipe</li>
            <li className='navButton'>About</li>
            <li className='navButton'>Contact</li>
        </div>
    );
}

export default Nav;