import React, { useEffect, useState } from "react";
// import {done} from './done';
import { useNavigate } from "react-router-dom";
import { getDone } from "../utils/APIRoutes";
import axios from "axios";
// import {doing} from './backlog';
const Doing =()=>{
    const navigate=useNavigate();
    const [currentUser,setCurrentUser]=useState();
    const [ done,setDone]=useState([]);
    useEffect( () => {
        const temp=async()=>{
          if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
            navigate("/login");
          } else {
            setCurrentUser(
              await JSON.parse(
                localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
              )
            );
          }
        }
        temp();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      useEffect(() => {
        const temp=async()=>{
          if (currentUser) {
            console.log(currentUser.email);
           
              const data = await axios.get(`${getDone}/${currentUser.email}`);
              console.log(data.data.done);
              setDone(data.data.done);
              console.log(done);
            // let val = data.data.todo[1];
            // setDone(val);
            // console.log(done);
            

            }
        }
        temp();
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currentUser,done]);
    console.log(done)
    
    return(
        <React.Fragment>
            <div className="doing-container" style={{marginLeft:'20px',marginRight:'10px',marginTop:'10px'}}>
            {done.map((data, key) => {
          return (
            <div key={key}>
                <ul>
                    
                    <li>
              {data.Description}
              </li>
              </ul>
            </div>
          );
        })}
            </div>
        </React.Fragment>
    )
}
export default Doing;