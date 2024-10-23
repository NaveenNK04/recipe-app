// src/pages/ChefDetailsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

// Example data (replace this with actual data fetching from an API)
const chefData = {
    1: {
        name: 'Chef Gordon Ramsay',
        dishes: [
            {
                name: 'Beef Wellington',
                ingredients: ['Beef fillet', 'Puff pastry', 'Mushrooms', 'Egg yolk', 'Parma ham'],
                instructions: 'Prepare the beef, wrap in puff pastry, and bake in the oven...',
            },
            {
                name: 'Scrambled Eggs',
                ingredients: ['Eggs', 'Butter', 'Salt'],
                instructions: 'Whisk eggs, cook gently over low heat with butter...',
            },
        ],
    },
    2: {
        name: 'Chef Jamie Oliver',
        dishes: [
            {
                name: 'Chicken Tikka Masala',
                ingredients: ['Chicken', 'Yogurt', 'Spices', 'Tomatoes'],
                instructions: 'Marinate chicken, cook with spices, and serve with naan...',
            },
            // Add more dishes...
        ],
    },
    // Add more chefs and their dishes as needed...
};

const ChefDetailsPage = () => {
    const { id } = useParams(); // Get chef's ID from the URL
    const chef = chefData[id]; // Fetch chef's data based on ID

    if (!chef) {
        return <div>Chef not found!</div>;
    }

    return (
        <div className="bg-[#faf9fb] p-10">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">{chef.name}</h1>

                {chef.dishes.map((dish, index) => (
                    <div key={index} className="mb-10 border p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-2">{dish.name}</h2>
                        <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
                        <ul className="list-disc list-inside mb-4">
                            {dish.ingredients.map((ingredient, idx) => (
                                <li key={idx}>{ingredient}</li>
                            ))}
                        </ul>
                        <h3 className="text-xl font-semibold mb-2">Cooking Instructions:</h3>
                        <p>{dish.instructions}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChefDetailsPage;
