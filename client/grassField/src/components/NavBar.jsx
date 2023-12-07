import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ handleView }) {
  return (
    <header id="myHeader">
      <div className="container">
        <ul className="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/basket">Basket</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <input type="text" placeholder="Search" />
          </li>
        </ul>
        <div className="user">
          <button>
            <Link to="/signup">SignUp</Link>
          </button>
          <button>
            <Link to="/login">LogIn</Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
