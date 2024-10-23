// src/pages/LogoPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const LogoPage = () => {
    const navigate = useNavigate(); // Initialize the navigate function

    const handleGoHome = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#faf9fb]">
            <img
                src="/path/to/your/logo.png" // Replace with the path to your logo
                alt="Logo"
                className="w-48 h-48 mb-4"
            />
            <button
                onClick={handleGoHome}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Go Here
            </button>
        </div>
    );
};

export default LogoPage;
