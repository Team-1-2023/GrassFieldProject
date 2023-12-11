import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style.scss";

const UserSign = () => {
  const [inputs, setInputs] = useState({
    username: "",
    address: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const [err, setError] = useState(null);
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/users/signup", inputs);
      navigate("/userlog");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="auth min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold mb-4">Sign up</h1>
        <form>
          <input
            required
            type="text"
            placeholder="Username"
            name="username"
            onChange={handleChange}
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded focus:outline-none focus:shadow-outline"
          />
          <input
            required
            type="text"
            placeholder="Address"
            name="address"
            onChange={handleChange}
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded focus:outline-none focus:shadow-outline"
          />
          <input
            required
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded focus:outline-none focus:shadow-outline"
          />
          <button
            onClick={handelSubmit}
            className="w-full px-4 py-2 font-bold text-white bg-darkRed rounded-full hover:bg-black focus:outline-none focus:shadow-outline"
          >
            Signup
          </button>
          {err && <p className="text-red-500 mt-2">{err}</p>}
          <span className="block text-center mt-4">
            Already have an account? <Link to="/userlog">Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default UserSign;