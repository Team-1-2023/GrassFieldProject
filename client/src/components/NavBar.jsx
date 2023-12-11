import React,{useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";

const NavBar = () => {
  const navigate = useNavigate();

  const {currentUser, logout} = useContext(UserContext)
    

  return (
    <nav className="bg-867978 p-4 flex justify-between items-center">
      <div className="flex items-center">
        {currentUser && <Link to={`basket/${currentUser.idusers}`} className="text-black hover:text-gray-300 px-4 py-2 rounded">
          My Basket
        </Link>}

        {currentUser? <button onClick= {logout} className="bg-8D0A0A text-black hover:text-gray-300 ml-4 px-4 py-2 rounded">
          Logout
          </button> : <Link  to="/userlog">Login</Link>}
      </div>
      <div className="flex items-center justify-center">
        <button className="text-black text-2xl font-bold" onClick={() => navigate("/")}>
          GlamAura
        </button>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-3F3F3F text-white px-3 py-1 rounded"
        />
        <button className="bg-000000 text-white px-4 py-1 rounded ml-2 hover:bg-gray-800">
          Search
        </button>
      </div>
    </nav>
  );
};

export default NavBar;