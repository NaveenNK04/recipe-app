// src/components/Footer.jsx
import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaMedium, FaTiktok } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-screen-lg mx-auto text-center">
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-white hover:text-blue-400" size={20} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-white hover:text-pink-400" size={20} />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube className="text-white hover:text-red-400" size={20} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white hover:text-blue-400" size={20} />
                    </a>
                </div>
                <p className="text-sm mt-4">
                    © {new Date().getFullYear()} All Rights Are Reserved <br />by
                    <br />
                    Semmaiya Samaikurom Bayangarama Rusikurom!
                </p>
                <div className="flex justify-center space-x-4 text-sm mt-2">
                    <a href="/legal" className="hover:underline">Legal Stuff</a>
                    <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                    <a href="/security" className="hover:underline">Security</a>
                    <a href="/accessibility" className="hover:underline">Website Accessibility</a>
                    <a href="/cookies" className="hover:underline">Manage Cookies</a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;