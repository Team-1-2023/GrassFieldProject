import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const UserSign = () => {

    const [inputs, setInputs] = useState(
        {
            username: "",
            adress: "",
            password: ""
        }
    )

    const navigate =useNavigate()



    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    console.log(inputs)


    const [err, setError] = useState(null);
    const handelSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:3000/api/users/signup", inputs)
            navigate("/userlog")
        } catch (err) {
            setError(err)
        }
    }


    return (
        <div className="auth" >
            <h1>Sign up</h1>
            <form >
                <input required type="text" placeholder="username" name="username" onChange={handleChange} />
                <input required type="adress" placeholder="adress" name="adress" onChange={handleChange} />
                <input required type="password" placeholder="password" name="password" onChange={handleChange} />
                <button onClick={handelSubmit}>Signup </button>
                {err && <p>{err}</p>}
                <span> Do you have an account? <Link to="/userlog">Login</Link></span>
            </form>
        </div>
    )
}



export default UserSign 