import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import Logout from '../../chat/components/Logout'

export default class Header extends Component {
  render() {
    return (
        <div className="header">
        <div className="col-12">
         <h5 className="header-text">Kanban Board</h5>
         <h5 className="header-text"><Link to="/chat">chat </Link></h5>
         {/* <Logout /> */}
        </div>
        </div>
    )
  }
}

