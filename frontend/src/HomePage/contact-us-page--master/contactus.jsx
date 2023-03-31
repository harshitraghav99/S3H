import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";
import "../contact-us-page--master/style.css"
import contactPng from "../contact-us-page--master/image/contact-png.png";
import { setContactUsRoute } from '../../utils/APIRoutes';
import {useNavigate} from "react-router-dom"

const ContactUs = () => {
    const navigate=useNavigate();
    const [values, setValues] = useState({
        firstname: "",
        email: "",
        secondname: "",
        phone: "",
        message:""
    })

    const toastOptions = {
        position: "bottom-left",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    }
    const handleValidation = () => {
        const { firstname,secondname, email,phone,message } = values;
        if (firstname.length<3) {
            toast.error("First Name should be greater than 3 letters", toastOptions);
            return false;
        }
        else if (secondname.length < 3) {
            toast.error("Last Name should be greater than 3 letters", toastOptions);
            return false;
        }
        else if (phone.length < 10) {
            toast.error("Mobile number  should be greater than 9 characters", toastOptions);
            return false;
        }
        else if (email === "") {
            toast.error("email is required", toastOptions);
            return false;
        }
        return true;
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            console.log("in validation", setContactUsRoute)
            const { firstname, secondname, email,phone,message } = values;
            const { data } = await axios.post(setContactUsRoute, {
                firstname,secondname, email, phone,message
            });
            if (data.status === false) {
                toast.error(data.msg, toastOptions)
                navigate("/")
            }
            navigate("/")
            
            
        };
    }
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }
    return (
        <React.Fragment>
            <section class="contact-section">
                <div class="contact-bg">
                    <h3>Get in Touch with Us</h3>
                    <h2>contact us</h2>
                    <div class="line">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p class="text">
                        Our teams are here to help....
                        Questions, bug reports, feedback — we’re here for it all.
                    </p>
                </div>
                <div class="contact-body">
                    <div class="contact-info">
                        <div>
                            <span><i class="fas fa-mobile-alt"></i></span>
                            <span>Phone No.</span>
                            <span class="text">1-2392-23928-2</span>
                        </div>
                        <div>
                            <span><i class="fas fa-envelope-open"></i></span>
                            <span>E-mail</span>
                            <span class="text">mail@company.com</span>
                        </div>
                        <div>
                            <span><i class="fas fa-map-marker-alt"></i></span>
                            <span>Address</span>
                            <span class="text">GLA University 17km Stone, NH-2, Mathura-Delhi Road Mathura, Chaumuhan, Uttar Pradesh 281406</span>
                        </div>
                        <div>
                            <span><i class="fas fa-clock"></i></span>
                            <span>Opening Hours</span>
                            <span class="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
                        </div>
                    </div>

                    <div class="contact-form">
                        <form onSubmit={(event)=>handleSubmit(event)}>
                            <div>
                                <input type="text" class="form-control" name="firstname" placeholder="FirstName" onChange={(e)=>handleChange(e)} />
                                <input type="text" class="form-control" name = "secondname" placeholder="SecondName" onChange={(e)=>handleChange(e)} />
                            </div>
                            <div>
                                <input type="email" class="form-control" name="email" placeholder="E-mail" onChange={(e)=>handleChange(e)} />
                                <input type="text" class="form-control" name="phone" placeholder="Phone" onChange={(e)=>handleChange(e)} />
                            </div>
                            <textarea rows="5" placeholder="Message" name="message" class="form-control" onChange={(e)=>handleChange(e)} />
                            <input type="submit" class="send-btn" value="send message" />
                        </form>

                        <div>
                            <img src={contactPng} alt="" />
                        </div>
                    </div>
                </div>
                <div class="contact-footer">
                    <h3>Follow Us</h3>
                    <div class="social-links">
                        <a href="#" class="fab fa-facebook-f"></a>
                        <a href="#" class="fab fa-twitter"></a>
                        <a href="#" class="fab fa-instagram"></a>
                        <a href="#" class="fab fa-linkedin"></a>
                        <a href="#" class="fab fa-youtube"></a>
                    </div>
                </div>
            </section>
        </React.Fragment>


    );
}

export default ContactUs;