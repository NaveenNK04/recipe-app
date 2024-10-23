import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import RecipeDetails from './pages/RecipeDetails';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ChefsListPage from './pages/ChefListPage'; 
import ChefDetailsPage from './pages/ChefDetailsPage'; 

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
                        <Route path="/chefs" element={<ChefsListPage />} />
                        <Route path="/chef/:id" element={<ChefDetailsPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
