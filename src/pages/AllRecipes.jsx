import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

function AllRecipes(props) {
    if (props.recipes) {
        return (
            <div>
                {props.recipes.map((recipe) => (
                    <div key={recipe._id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{recipe.Food}</Card.Title>
                                <Card.Text>
                                    Description
                                </Card.Text>
                                <Link to={`/${recipe._id}`}>
                                    <Button variant="primary">View</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        )
    } else {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        )
    }
}


export default AllRecipes;