import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../../chat/components/Logout'
// import Logout from '../../chat/components/Logout'

export default class Header extends Component {
  render() {
    return (
        <div className="header" style={{display:"flex"}}>
        <div className="col-12" style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
         
         <h5 className="header-text" style={{}}><Link to="/">S3H</Link></h5>
         <h5 className="header-text" style={{}}><Link to="/body">Kanban Board </Link></h5>

         <Logout />
        </div>
        </div>
    )
  }
}

