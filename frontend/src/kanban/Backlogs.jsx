import React, { useEffect, useState } from "react";
// import {backlogs} from './backlogs';
import { useNavigate } from "react-router-dom";
import { getBacklog } from "../utils/APIRoutes";
import axios from "axios";
const Backlogs =()=>{
    const navigate=useNavigate();
    const [currentUser,setCurrentUser]=useState();
    const [ backlogs,setBacklogs]=useState([]);
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
           
              const data = await axios.get(`${getBacklog}/${currentUser.email}`);
              console.log(data.data.backlog);
              setBacklogs(data.data.backlog);
              console.log(backlogs);
            // let val = data.data.todo[1];
            // setBacklogs(val);
            // console.log(backlogs);
            

            }
        }
        temp();
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currentUser,backlogs]);
    console.log(backlogs)
    return(
        <React.Fragment>
            <div className="backlogs-container" style={{marginLeft:'20px',marginRight:'10px',marginTop:'10px'}}>
            {backlogs.map((data, key) => {
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
export default Backlogs;