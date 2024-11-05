// src/pages/LogoPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoPage = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#faf9fb]">
            <img
                src="/Screenshot 2024-10-23 204937.png" // Ensure the path is correct for your image
                alt="Logo"
                className="w-50 h-68 mb-2"
            />
            <button
                onClick={handleGoHome}
                className="bg-blue-600 text-white px-8 py-3 rounded"
            >
                Go Here
            </button>
        </div>
    );
};

export default LogoPage;
