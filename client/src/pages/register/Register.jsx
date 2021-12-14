import './register.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { axiosInstance } from '../../config';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post("/auth/register", {
                username,
                email,
                password,
            })
            if (res.status === 200) {
                window.location.replace("/login")
            } else {

            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <div className="container">
                <form className="registerForm" onSubmit={handleSubmit}>
                    <label htmlFor="">Username</label>
                    <input type="text" className="registerInput" placeholder="Enter your username" onChange={e => setUsername(e.target.value)} />
                    <label htmlFor="">E-mail</label>
                    <input type="text" className="registerInput" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="">Password</label>
                    <input type="password" className="registerInput" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} />
                    <button className="registerButton" type="submit">register</button>
                </form>
                <div className="loginAccount">
                    <p className="registerLoginTitle">Have an account?</p>
                <p><Link to="/login" className='loginLink'>Login</Link></p>
                </div>
            </div>
        </div>
    )
}
