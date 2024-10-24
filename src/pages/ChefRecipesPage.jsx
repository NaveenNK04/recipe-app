// src/pages/ChefRecipesPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const recipesData = {
    'chef-damu': [
        { id: 1, title: 'Chettinad Chicken Curry', image: 'https://example.com/chettinad-chicken-curry.jpg', description: 'A spicy and aromatic chicken curry.' },
        { id: 2, title: 'Vegetable Biryani', image: 'https://example.com/vegetable-biryani.jpg', description: 'A fragrant rice dish with mixed vegetables.' },
    ],
    'venkatesh-bhat': [
        { id: 3, title: 'Sambar', image: 'https://example.com/sambar.jpg', description: 'A lentil-based vegetable stew.' },
        { id: 4, title: 'Masala Dosa', image: 'https://example.com/masala-dosa.jpg', description: 'Crispy rice crepes filled with spiced potatoes.' },
    ],
    // Add more recipes for other chefs similarly...
};

const ChefRecipesPage = () => {
    const { id } = useParams();
    const recipes = recipesData[id] || [];

    return (
        <div className="p-10 bg-[#faf9fb] flex-1">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold mb-6">Famous Recipes by {id.replace('-', ' ')}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {recipes.map((recipe) => (
                        <div key={recipe.id} className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
                            <img src={recipe.image} alt={recipe.title} className="h-48 w-full object-cover rounded-md" />
                            <h2 className="text-xl font-bold mt-4">{recipe.title}</h2>
                            <p className="text-gray-600 mt-2">{recipe.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChefRecipesPage;
