import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const handleAdminClick = () => {
        navigate("/admin");
    };
    return (
        <footer className="bg-white border-t border-gray-300 py-6">
            <div className="container mx-auto flex flex-wrap justify-between">
                <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                    <Link to="/" className="text-xl font-bold mb-2">GlamAura</Link>
                    <h2>Contact</h2>
                    <h2 onClick={handleAdminClick} className="cursor-pointer">Admin</h2>
                    <address className="text-gray-600">
                        RBK sousse<br />
                        <a className="text-blue-500" href="mailto:">Email Us</a>
                    </address>
                </div>

                <ul className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                    <li className="mb-2">
                        <h2 className="text-lg font-bold mb-1">Media</h2>
                        <ul className="text-gray-600">
                            <li><a href="#">Online</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </li>

                    <li className="mb-2">
                        <h2 className="text-lg font-bold mb-1">Technology</h2>
                        <ul className="text-gray-600">
                            <li><a href="#">Hardware Design</a></li>
                            <li><a href="#">Software Design</a></li>
                            <li><a href="#">Artificial Intelligence</a></li>
                        </ul>
                    </li>

                    <li>
                        <h2 className="text-lg font-bold mb-1">Legal</h2>
                        <ul className="text-gray-600">
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </li>
                </ul>

                <div className="w-full lg:w-1/4 text-gray-600">
                    <p>&copy; 2023 All rights reserved.</p>
                    <div className="mt-2">
                        <p>Made by <span className="text-red-500">♥</span> Wael Meryem Khalil and Wided</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
