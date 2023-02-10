/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from "react";
import Body from "./kanban/component/Body";
// import Header from "./kanban/component/Header";
import { useNavigate } from "react-router-dom";
import Homepage from "../src/HomePage/Homepage"
const Home =()=>{
    const navigate = useNavigate();
    const [isLoaded,setIsLoaded]=useState(false);
    const [currentUser, setCurrentUser] = useState(undefined); 
    useEffect(() => {
      console.log("in home")
        const temp = async()=>{
        if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
          console.log("login")
          navigate("/login");
          
        }
      
      }
      temp();
    
      });
    return(
        <React.Fragment>
            
            {/* <Body /> */}
            <Homepage />
        </React.Fragment>
    )
}
export default Home;