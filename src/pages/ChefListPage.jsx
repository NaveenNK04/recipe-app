// src/pages/ChefListPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const chefs = [
    {
        name: 'Chef Damu',
        image: '/images/Chef Damu.jpg', // Use a local path
        bio: 'Chef Damu is known for his expertise in South Indian cuisine and his engaging cooking shows.',
        id: 'chef-damu',
    },
    {
        name: 'Venkatesh Bhat',
        image: '/images/Venkatesh_bhat.jpg', // Use a local path
        bio: 'Venkatesh Bhat is a celebrity chef and host of the popular Tamil show "Samayal Samayal."',
        id: 'venkatesh-bhat',
    },
    {
        name: 'Mallika Badrinath',
        image: '/images/mallika_badrinath.jpg', // Use a local path
        bio: 'Mallika Badrinath is renowned for her cookbooks and television shows focusing on traditional Tamil recipes.',
        id: 'mallika-badrinath',
    },
    {
        name: 'Damodharan',
        image: '/images/chef_damodharan.jpg', // Use a local path
        bio: 'Chef Damodharan specializes in traditional Tamil cuisine and has a passion for teaching cooking.',
        id: 'damodharan',
    },
    {
        name: 'Jacob Aruni',
        image: '/images/chef_jacob.jpg', // Use a local path
        bio: 'Jacob Aruni promotes healthy Tamil cuisine and is known for reviving forgotten recipes.',
        id: 'jacob-aruni',
    },
    {
        name: 'Koushik',
        image: '/images/chef_koushik.jpg', // Use a local path
        bio: 'Koushik, known as "MadChef," is popular for his modern take on traditional Tamil dishes.',
        id: 'koushik',
    },
];

const ChefListPage = () => {
    return (
        <div className="p-10 bg-[#faf9fb] flex-1">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-bold mb-6">Famous Tamil Chefs</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {chefs.map((chef) => (
                        <Link to={`/chef/${chef.id}`} key={chef.id}>
                            <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
                                <img src={chef.image} alt={chef.name} className="h-48 w-full object-cover rounded-md" />
                                <h2 className="text-xl font-bold mt-4">{chef.name}</h2>
                                <p className="text-gray-600 mt-2">{chef.bio}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChefListPage;
