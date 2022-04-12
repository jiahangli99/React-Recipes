import React from 'react';
import './Main.css'
import AllRecipes from '../../pages/AllRecipes'
import { Switch } from 'react-router-dom';

function Main(props) {
    return (
        <div className='main'>
            <Switch>
            <AllRecipes />
            </Switch>
        </div>
    );
}

export default Main;