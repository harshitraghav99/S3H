import React from "react";
import {todo} from './backlog';
const Todo =()=>{
    
    return(
        <React.Fragment>
            <div className="todo-container" style={{marginLeft:'20px',marginRight:'10px',marginTop:'10px'}}>
            {todo.map((data, key) => {
          return (
            <div key={key}>
                <ul>
                    <li>
                        {key+1}
                    </li>
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
export default Todo;