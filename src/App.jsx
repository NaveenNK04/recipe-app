// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import RecipeDetails from './pages/RecipeDetails';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ChefListPage from './pages/ChefListPage'; 
import ChefDetailsPage from './pages/ChefDetailsPage'; 
import ChefRecipesPage from './pages/ChefRecipesPage';
import IndianFestivalRecipes from './pages/IndianFestivalRecipes';
import Footer from './components/Footer'; // Import the Footer component
import LogoPage from './pages/LogoPage'; // Import LogoPage

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen"> {/* Change to flex-col and min-h-screen */}
                <div className="flex flex-1">
                    <Sidebar />
                    <div className="flex-1">
                        <Routes>
                            <Route path="/logo" element={<LogoPage />} /> {/* LogoPage route */}
                            <Route path="/" element={<HomePage />} /> {/* Home page route */}
                            <Route path="/favorites" element={<FavoritesPage />} />
                            <Route path="/recipe-details" element={<RecipeDetails />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/chefs" element={<ChefListPage />} />
                            <Route path="/chef/:id" element={<ChefDetailsPage />} />
                            <Route path="/chef/:id/recipes" element={<ChefRecipesPage />} />
                            <Route path="/festival-recipes" element={<IndianFestivalRecipes />} />
                        </Routes>
                    </div>
                </div>
                <Footer /> {/* Add Footer here */}
            </div>
        </Router>
    );
};

export default App;
