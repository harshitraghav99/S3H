import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react'
import Home from './Home';
import Login from './signuplogin/Login';
import Register from './signuplogin/Register';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      
      {/* <Header />
      <Body /> */}
    </React.Fragment>
  );
}

export default App;
