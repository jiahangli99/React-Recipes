

function Recipe(props) {
    const id = props.match.params.id
    const recipe = props.recipes.find(p => p._id === id)
    return (
        <div>
            <h3>{recipe.Food}</h3>
        </div>
    );
}

export default Recipe;