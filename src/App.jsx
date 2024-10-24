// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import RecipeDetails from './pages/RecipeDetails';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ChefListPage from './pages/ChefListPage'; 
import ChefDetailsPage from './pages/ChefDetailsPage'; 
import ChefRecipesPage from './pages/ChefRecipesPage'; // Import the new page

const App = () => {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                        <Route path="/recipe-details" element={<RecipeDetails />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/chefs" element={<ChefListPage />} />
                        <Route path="/chef/:id" element={<ChefDetailsPage />} />
                        <Route path="/chef/:id/recipes" element={<ChefRecipesPage />} /> {/* Add the route for chef recipes */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
