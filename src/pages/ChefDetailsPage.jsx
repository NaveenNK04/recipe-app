import React from 'react';
import { useParams } from 'react-router-dom';

const chefs = {
    'sanjeev-kapoor': {
        name: 'Sanjeev Kapoor',
        image: '/images/sanjeev_kapoor.jpg',
        bio: 'Sanjeev Kapoor is one of India’s most famous chefs and television hosts, known for his innovative and simple recipes.',
        dishes: [
            {
                name: 'Paneer Butter Masala',
                ingredients: [
                    '250g Paneer (cottage cheese)',
                    '2 cups tomato puree',
                    '1 tbsp ginger-garlic paste',
                    '1/2 cup cream',
                    '2 tbsp butter',
                ],
                instructions: [
                    'Heat butter in a pan, add ginger-garlic paste and sauté for a minute.',
                    'Add tomato puree and cook for 5 minutes.',
                    'Add cream, salt, and garam masala. Cook for 2 minutes.',
                    'Add paneer cubes and simmer for 5 minutes.',
                    'Serve hot with naan or rice.',
                ],
            },
        ],
    },
    'vikas-khanna': {
        name: 'Vikas Khanna',
        image: '/images/vikas_khanna.jpg',
        bio: 'Vikas Khanna is an award-winning Michelin-starred chef, restaurateur, and filmmaker from India.',
        dishes: [
            {
                name: 'Dal Makhani',
                ingredients: [
                    '1 cup whole black lentils (urad dal)',
                    '1/4 cup kidney beans (rajma)',
                    '2 tbsp butter',
                    '1/2 cup cream',
                    '2 tbsp tomato puree',
                ],
                instructions: [
                    'Soak lentils and kidney beans overnight.',
                    'Pressure cook them until soft.',
                    'Heat butter in a pan, add tomato puree and cook for a minute.',
                    'Add cooked lentils and simmer for 20 minutes.',
                    'Stir in cream and serve hot with naan or rice.',
                ],
            },
        ],
    },
    'ranveer-brar': {
        name: 'Ranveer Brar',
        image: '/images/ranveer_brar.jpg',
        bio: 'Ranveer Brar is a popular chef, TV show host, and food stylist, known for his traditional and modern Indian recipes.',
        dishes: [
            {
                name: 'Chicken Korma',
                ingredients: [
                    '500g chicken',
                    '2 onions, finely sliced',
                    '1/2 cup yogurt',
                    '1 tbsp ginger-garlic paste',
                    '2 tbsp ghee (clarified butter)',
                ],
                instructions: [
                    'Heat ghee in a pan, add onions and sauté until golden brown.',
                    'Add ginger-garlic paste and cook for a minute.',
                    'Add chicken pieces and cook until browned.',
                    'Add yogurt and simmer for 20 minutes.',
                    'Serve hot with rice or roti.',
                ],
            },
        ],
    },
};

const ChefDetailPage = () => {
    const { chefId } = useParams();
    const chef = chefs[chefId];

    if (!chef) {
        return <h2>No Chef Found</h2>;
    }

    return (
        <div className="p-10 bg-[#faf9fb] flex-1">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold mb-6">{chef.name}</h1>
                <img src={chef.image} alt={chef.name} className="w-full h-64 object-cover mb-4" />
                <p className="text-lg text-gray-600 mb-6">{chef.bio}</p>

                <h2 className="text-2xl font-bold mb-4">Famous Dishes</h2>
                {chef.dishes.map((dish, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="text-xl font-bold">{dish.name}</h3>
                        <h4 className="text-lg font-bold mt-2">Ingredients:</h4>
                        <ul className="list-disc ml-5 mt-2 text-gray-600 leading-7">
                            {dish.ingredients.map((ingredient, idx) => (
                                <li key={idx}>{ingredient}</li>
                            ))}
                        </ul>
                        <h4 className="text-lg font-bold mt-4">Cooking Instructions:</h4>
                        <ul className="list-decimal ml-5 mt-2 text-gray-600 leading-7">
                            {dish.instructions.map((instruction, idx) => (
                                <li key={idx}>{instruction}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChefDetailPage;
