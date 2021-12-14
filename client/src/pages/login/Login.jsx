import './login.css'
import { Link } from 'react-router-dom'
import { useRef, useContext } from 'react';
import { Context } from '../../context/Context';
import { axiosInstance } from '../../config';
export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context)
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            var res = await axiosInstance.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            if (res.status === 200) {
                dispatch({ type: "LOGIN_SUCCESS", payload: res.data });

            } else {
                dispatch({ type: "LOGIN_FAILUR" });
            }

        } catch (err) {
            dispatch({ type: "LOGIN_FAILUR" });
        }
    }
    return (
        <div className="login">
            <div className="loginUserIcon"><p className='loginTitle'>Login</p></div>
            <div className="container">
                <form className="loginForm" onSubmit={handleSubmit}>
                    <label htmlFor="">Username</label>
                    <input type="text" className="loginInput" placeholder="Enter your email" ref={userRef} />
                    <label htmlFor="">Password</label>
                    <input type="password" className="loginInput" placeholder="Enter your password" ref={passwordRef} />
                    <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
                </form>
                <div className="createAccount">
                    <p className='loginRegisterTitle'>Don't have an account?</p>
                    <p className="loginRegisterLink"><Link to="/register" className="registerLink">Register</Link></p>
                </div>
            </div>
        </div>
    )
}
