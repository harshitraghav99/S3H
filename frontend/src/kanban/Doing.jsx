import React from "react";
import {doing} from './backlog';
const Doing =()=>{
    
    return(
        <React.Fragment>
            <div className="doing-container" style={{marginLeft:'20px',marginRight:'10px',marginTop:'10px'}}>
            {doing.map((data, key) => {
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
export default Doing;