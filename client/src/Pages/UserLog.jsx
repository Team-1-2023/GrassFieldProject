import React, { useState,useContext  } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {usersContext}  from "../../context/userContext.jsx";


const UserLog= () => {
const [inputs, setInputs] = useState(
    {
        username: "",
        password: ""
    }
)

const navigate =useNavigate()
const {currentuser} = useContext(usersContext)

console.log(currentuser);



const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
}
console.log(inputs)


const [err, setError] = useState(null);
const handelSubmit = async (e) => {
    e.preventDefault()
    try {
        await axios.post("http://localhost:3000/api/users/login", inputs)
        navigate("/")
    } catch (err) {
        setError(err.response.data)
    }
}



    return(
        <div className="auth">
            <h1>Login</h1>
            <form >
                <input type="text" placeholder="username" name="username" onChange={handleChange} />
                <input type="password" placeholder="password" name="password" onChange={handleChange}/>
                <button onClick={handelSubmit}>Login </button>
                {err && <p>{err}</p>}
                <span> don't you have an account? <Link to="/signup">Signup</Link></span>
            </form>
        </div>
    )
}



export default UserLog