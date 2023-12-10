import React, { useState,useContext  } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";
import "../style.scss"

const UserLog= () => {
const [inputs, setInputs] = useState(
    {
        username: "",
        password: ""
    }
)

const navigate =useNavigate()
const {login} = useContext(UserContext)





const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
}
console.log(inputs)


const [err, setError] = useState(null);
const handelSubmit = async (e) => {
    e.preventDefault()
    try {
        await login( inputs)
        navigate("/")
    } catch (err) {
        setError(err)
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
                <span> don't you have an account? <Link to="/usersign">Signup</Link></span>
            </form>
        </div>
    )
}



export default UserLog