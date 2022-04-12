import {React, useState, useEffect} from 'react';
import './Main.css'
import AllRecipes from '../../pages/AllRecipes'
import { Switch, Route} from 'react-router-dom';

function Main(props) {
    const [recipes, setRecipes] = useState([])
    const URL = 'https://recipesjson.herokuapp.com/recipes'

    useEffect(() => {
        async function getRecipes() {
        const response = await fetch(URL)
        const data = await response.json()
        setRecipes(data)
        }
    
        getRecipes()
      }, [])

    return (
        <div className='main'>
            <Switch>
                <Route exact path='/'>
                    <AllRecipes recipes={recipes}/>
                </Route>
            </Switch>
        </div>
    );
}

export default Main;