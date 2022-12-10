import React,{useState,useEffect} from "react";
import './z.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";
import { loginRoute } from '../utils/APIRoutes'
import { Link, useNavigate } from 'react-router-dom'
const Login = ()=>{
    const navigate=useNavigate();
    const [values, setValues] = useState({
        username: "",
        password: "",
        
    })

    const toastOptions = {
        position: "bottom-left",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark"
    }
    useEffect(()=>{
        if(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)){
            navigate('/')
        }
    })
    const handleSubmit = async(event) => {
        event.preventDefault();
        if(handleValidation()){
            console.log("in validation", loginRoute)
            const { password, email } = values;
            const{data}=await axios.post(loginRoute,{
                email,password
            });
            if(data.status=== false){
                toast.error(data.msg,toastOptions)
            }
            if(data.status=== true){
                localStorage.setItem(process.env.REACT_APP_LOCALHOST_KEY,JSON.stringify(data.user))
            }
            navigate("/")
        };
    }

    const handleValidation = () => {
        const { password,  email } = values;
        if (password==="") {
            toast.error("Email and Password required",toastOptions);
            return false;
        }
        else if(email.length===""){
            toast.error("Email and Password required",toastOptions);
            return false;
        }
        return true;        
    }

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value })
    }
    return(
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
                <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque 
                     expedita atque eveniet <br /> quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad delectus 
                    <br /> a quae totam ipsa illum minus laudantium?</p>
    
                    <button className="cn"><a href="#">JOIN US</a></button>
    
                    <div className="form">
                        <form onSubmit={(event) => handleSubmit(event)}>
                        <h2>Login Here</h2>
                        <input type="email" name="email" placeholder="Enter Email Here" onChange={(e) => handleChange(e)}  />
                        <input type="password" name="" placeholder="Enter Password Here" onChange={(e) => handleChange(e)} />
                        <button type="submit" className="btnn"><a href="#">Login</a></button>
    
                        <p className="link">Don't have an account<br />
                        <Link to="/register">Sign up </Link> here</p>
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
export default Login;







// <!-- <!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>Webpage Design</title>
//     <link rel="stylesheet" href="z.css">
// </head>
// <body>

//     <div className="main">
//         <div className="navbar">
//             <div className="icon">
//                 <h2 className="logo">S3H</h2>
//             </div>

//             <div className="menu">
//                 <ul>
//                     <li><a href="#">HOME</a></li>
//                     <li><a href="#">ABOUT</a></li>
//                     <li><a href="#">CONTACTUS</a></li>
                   
//                     <li><a href="#">LOGIN</a></li>
//                 </ul>
//             </div>

//             <div className="search">
//                 <input className="srch" type="search" name="" placeholder="Type To text">
//                 <a href="#"> <button className="btn">Search</button></a>
//             </div>

//         </div> 
//         <div className="content">
//             <h1>S3H <br><span> Development</span> <br>Tool</h1>
//             <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt neque 
//                  expedita atque eveniet <br> quis nesciunt. Quos nulla vero consequuntur, fugit nemo ad delectus 
//                 <br> a quae totam ipsa illum minus laudantium?</p>

//                 <button className="cn"><a href="#">JOIN US</a></button>

//                 <div className="form">
//                     <h2>Login Here</h2>
//                     <input type="email" name="email" placeholder="Enter Email Here">
//                     <input type="password" name="" placeholder="Enter Password Here">
//                     <button className="btnn"><a href="#">Login</a></button>

//                     <p className="link">Don't have an account<br>
//                     <a href="#">Sign up </a> here</a></p>
//                     <p className="liw">Log in with</p>

//                     <div className="icons">
//                         <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
//                         <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
//                         <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
//                         <a href="#"><ion-icon name="logo-google"></ion-icon></a>
//                         <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
//                     </div>

//                 </div>
                   
                
//         </div>
//     </div>
//     <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
//     <style>
//         .footer {
//           position: relative;
//           left: 0;
//           bottom: 0;
//           height: 110px;
//           width: 100%;
//           background-color: crimson;
//           color: white;
          
//           text-align: center;

//         }
//         </style>
        
//         <div className="footer">
//           <p>Copyright S3H 2022</p>
//         </div> 
// </body>
// </html> -->
