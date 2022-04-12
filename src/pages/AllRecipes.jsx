import React from 'react';
import { Link } from 'react-router-dom';

function AllRecipes(props) {
    if(props.recipes){
    return (
        <div>
            {props.recipes.map((recipe) => (
                <div key={recipe._id}>
                    <Link to={`/${recipe._id}`}>
                    <h3>{recipe.Food}</h3>
                    </Link>
                </div>
            ))}
        </div>
    )} else {
        return(
            <div>
                <h1>Loading</h1>
            </div>
        )
    }
}

export default AllRecipes;