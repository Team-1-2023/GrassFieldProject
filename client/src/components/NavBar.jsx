import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    const handleNameClick = () => {
        navigate("/");
    };

    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <div className="flex items-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    My Card
                </button>
                <button className="bg-red-800 text-white ml-4 px-4 py-2 rounded">
                    Logout
                </button>
            </div>
            <div className="flex items-center justify-center">
                <Link to="/" className="text-white text-lg font-bold" onClick={handleNameClick}>
                     maryem mraw7a Gasrin
                </Link>
            </div>
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-gray-700 text-white px-3 py-1 rounded"
                />
                <button className="bg-gray-600 text-white px-3 py-1 rounded ml-2">
                    Search
                </button>
            </div>
        </nav>
    );
};

export default NavBar;
