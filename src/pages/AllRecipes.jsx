import React from 'react';

function AllRecipes(props) {
    return (
        <div>
            {props.recipes.map((recipe, i) => (
                <div key={i}>
                    <h3>{recipe.Food}</h3>
                </div>
            ))}
        </div>
    );
}

export default AllRecipes;