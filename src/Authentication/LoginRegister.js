import React, { useState } from 'react'
import './LoginRegister.css'
import Validation from './Validation';
export default function LoginRegister() {

    const [action, setAction] = useState("Sign up");

    const [values, setValues] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({});

    function handlechange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setErrors(Validation(values));
    }

    return (
        <div className='container' onSubmit={handleSubmit}>

            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>

                {action === "Login" ? <div></div> : <div className='input'>
                    <input type='text' placeholder=' Username' name='username' />
                </div>}


                <div className='input'>
                    <input type='email' placeholder=' Email' name='email' value={values.email} onChange={handlechange} />
                    {errors.email && <p style={{ color: "red", fontSize: "13px" }}>{errors.email}</p>}
                </div>

                <div className='input'>
                    <input type='text' placeholder=' Password' name='password' value={values.password} onChange={handlechange} />
                    {errors.password && <p style={{ color: "red", fontSize: "13px" }}>{errors.password}</p>}
                </div>

            </div>
            <div className='submit-btn'>
                <button type='submit'>Submit</button>
            </div>
            <div className='submit-container'>
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign up") }}>Sign up</div>
                <div className={action === "Sign up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
            </div>
        </div>
    )
}
