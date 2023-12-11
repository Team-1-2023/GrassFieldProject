import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";
import "../style.scss";

const UserLog = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(inputs);

  const [err, setError] = useState(null);
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="auth min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <button
            className="w-full px-4 py-2 font-bold text-white bg-darkRed rounded-full hover:bg-black focus:outline-none focus:shadow-outline"
            onClick={handelSubmit}
          >
            Login
          </button>
          {err && <p className="text-red-500 mt-2">{err}</p>}
          <span className="block text-center mt-4">
            Don't have an account? <Link to="/usersign">Signup</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default UserLog;