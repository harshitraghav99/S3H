import React from "react";
import {backlog} from './backlog';
const Backlog =()=>{
    console.log(backlog)
    return(
        <React.Fragment>
            <div className="backlog-container" style={{marginLeft:'20px',marginRight:'10px',marginTop:'10px'}}>
            {backlog.map((data, key) => {
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
export default Backlog;