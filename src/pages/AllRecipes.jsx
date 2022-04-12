import React from 'react';

function AllRecipes(props) {
    if(props.recipes){
    return (
        <div>
            {props.recipes.map((recipe, i) => (
                <div key={i}>
                    <h3>{recipe.Food}</h3>
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