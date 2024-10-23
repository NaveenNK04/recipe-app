import React from 'react';
import { useLocation } from 'react-router-dom';

const RecipeDetails = () => {
    const location = useLocation();
    const { recipe } = location.state || {}; // Retrieve the recipe passed from the RecipeCard

    if (!recipe) {
        return <h2>No Recipe Found</h2>;
    }

    return (
        <div className="p-4 flex-1">
            <h1 className="text-2xl font-bold">{recipe.label}</h1>
            <img src={recipe.image} alt={recipe.label} className="w-full h-64 object-cover" />

            <h2 className="mt-4">Nutritional Information:</h2>
            <ul>
                <li>Calories: {recipe.calories}</li>
                <li>Servings: {recipe.yield}</li>
                {/* Add more nutritional info as needed */}
            </ul>

            <h2 className="mt-4">Ingredients:</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li> // Assuming ingredient has a 'text' property
                ))}
            </ul>

            <h2 className="mt-4">Cooking Instructions:</h2>
            <p>{recipe.instructions}</p> {/* Ensure this field is available in the recipe object */}
        </div>
    );
};

export default RecipeDetails;
