// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Import Sidebar
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import RecipeDetails from './pages/RecipeDetails';
import AboutPage from './pages/AboutPage'; // Import About Page
import ContactPage from './pages/ContactPage'; // Import Contact Page

const App = () => {
    return (
        <Router>
            <div className="flex">
                <Sidebar /> {/* Sidebar is now on all pages */}
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/favorites" element={<FavoritesPage />} />
                        <Route path="/recipe-details" element={<RecipeDetails />} />
                        <Route path="/about" element={<AboutPage />} /> {/* Route for About Page */}
                        <Route path="/contact" element={<ContactPage />} /> {/* Route for Contact Page */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
