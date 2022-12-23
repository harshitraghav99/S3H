/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import './z.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";
import { registerRoute } from '../utils/APIRoutes'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const toastOptions = {
        position: "bottom-left",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    }
    useEffect(() => {
        if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
            navigate('/')
        }
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            console.log("in validation", registerRoute)
            const { password, username, email } = values;
            const { data } = await axios.post(registerRoute, {
                username, email, password
            });
            if (data.status === false) {
                toast.error(data.msg, toastOptions)
            }
            if (data.status === true) {
                localStorage.setItem(process.env.REACT_APP_LOCALHOST_KEY, JSON.stringify(data.user))
            }
            navigate("/")
        };
    }

    const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
        if (password !== confirmPassword) {
            toast.error("password,confirmPassword should be same", toastOptions);
            return false;
        }
        else if (username.length < 3) {
            toast.error("Username should be greater than 3 letters", toastOptions);
            return false;
        }
        else if (password.length < 8) {
            toast.error("Password should be greater than 8 characters", toastOptions);
            return false;
        }
        else if (email === "") {
            toast.error("email is required", toastOptions);
            return false;
        }
        return true;
    }

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }
    return (
        <React.Fragment>
            <div className="main">
                <div className="navbar">
                    <div className="icon">
                        <h2 className="logo">S3H</h2>
                    </div>

                    <div className="menu">
                        <ul>
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">CONTACTUS</a></li>

                            <li><a href="#">LOGIN</a></li>
                        </ul>
                    </div>

                    <div className="search">
                        <input className="srch" type="search" name="" placeholder="Type To text" />
                        <a href="#"> <button className="btn">Search</button></a>
                    </div>

                </div>
                <div className="content">
                    <h1>S3H <br /><span> Development</span> <br />Tool</h1>
                    <p className="par">S3H helps teams plan, assign, track, report, and manage work and brings teams together for everything from agile software development.
                        Helpful in project management, task tracking and requirement management.
                        It helps the employee to be active because of Kanban bord which shows the complete, incomplete work</p>

                    <button className="cn"><a href="#">JOIN US</a></button>

                    <div className="form">
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <h2>Register Here</h2>
                            <input type="text" name="username" placeholder="Enter Name Here" onChange={(e) => handleChange(e)} />
                            <input type="email" name="email" placeholder="Enter Email Here" onChange={(e) => handleChange(e)} />
                            <input type="password" name="password" placeholder="Enter Password Here" onChange={(e) => handleChange(e)} />
                            <input type="password" name="confirmPassword" placeholder="Confirm Password " onChange={(e) => handleChange(e)} />
                            <button type="submit" className="btnn" > register</button>

                            <p className="link">Don't have an account<br />
                                <Link to="/login">Login </Link> here</p>
                            <p className="liw">Log in with</p>

                            <div className="icons">
                                <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                                <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                                <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                                <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                                <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
                            </div>
                        </form>
                    </div>



                </div>
            </div>
            <div className="footer">
                <p>Copyright S3H 2022</p>
            </div>
            <ToastContainer />
        </React.Fragment>
    )
}
export default Register;