import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home';
import Login from './signuplogin/Login';
import Register from './signuplogin/Register';
import SetAvatar from "./chat/components/SetAvatar"
import Body from './kanban/component/Body';
import ContactUs from './HomePage/contact-us-page--master/contactus';
import AboutUs from './HomePage/about-us-master/about-us-master/AboutUs';


const App = () => {
  return (
    <React.Fragment>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
          <Route path="/body" element={<Body />} />
          <Route path="/contactus" element={<ContactUs/>}/>
          <Route path="/about" element={<AboutUs/>}/>
        </Routes>
      </BrowserRouter>



    </React.Fragment>
  );
}

export default App;
