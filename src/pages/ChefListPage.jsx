// src/pages/ChefsListPage.jsx
import React from 'react';
import ChefCard from '../components/ChefCard';

// Example chef data (you can replace this with real data from an API)
const chefs = [
    {
        id: 1,
        name: 'Chef Gordon Ramsay',
        image: '/images/gordon-ramsay.jpg',
    },
    {
        id: 2,
        name: 'Chef Jamie Oliver',
        image: '/images/jamie-oliver.jpg',
    },
    {
        id: 3,
        name: 'Chef Nigella Lawson',
        image: '/images/nigella-lawson.jpg',
    },
    // Add more chefs as needed...
];

const ChefsListPage = () => {
    return (
        <div className="bg-[#faf9fb] p-10">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-4xl font-bold mb-10 text-center">Famous Chefs</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {chefs.map(chef => (
                        <ChefCard key={chef.id} chef={chef} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChefsListPage;
