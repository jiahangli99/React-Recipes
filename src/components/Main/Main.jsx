import {React, useState, useEffect} from 'react';
import './Main.css'
import AllRecipes from '../../pages/AllRecipes'
import { Switch, Route} from 'react-router-dom';

function Main(props) {
    const [notes, setNotes] = useState([])
    
    return (
        <div className='main'>
            <Switch>
                <Route exact path='/'>
                    <AllRecipes />
                </Route>
            </Switch>
        </div>
    );
}

export default Main;