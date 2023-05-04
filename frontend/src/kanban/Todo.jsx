import React, { useEffect, useState } from "react";
// import {todo} from './backlog';
import { useNavigate } from "react-router-dom";
import { getTodo } from "../utils/APIRoutes";
import axios from "axios";
const Todo =()=>{
    const navigate=useNavigate();
    const [currentUser,setCurrentUser]=useState();
    const [ todos,setTodos]=useState([]);
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
           
              const data = await axios.get(`${getTodo}/${currentUser.email}`);
              console.log(data.data.todo);
              setTodos(data.data.todo);
              console.log(todos);
            // let val = data.data.todo[1];
            // setTodos(val);
            // console.log(todos);
            

            }
        }
        temp();
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currentUser,todos]);
    
    return(
        <React.Fragment>
            <div className="todo-container" style={{marginLeft:'20px',marginRight:'10px',marginTop:'10px'}}>
            {todos.map((data, key) => {
          return (
            <div key={key}>
                <ul>
                    {/* <li>
                        {key+1}
                    </li> */}
                    <li>
              {data.description}
              </li>
              </ul>
            </div>
          );
        })}
        
        
            </div>
        </React.Fragment>
    )
}
export default Todo;