import React from 'react'
import {
   Routes,
    Route,
  } from "react-router-dom";

import Dashboard from '../components/Dashboard'
import Login from './Login';

const Routing = () => {
  return (
    <div>
    
    <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route  path="/dashboard"element={<Dashboard/>}
   />
    </Routes>

    </div>
  )
}

export default Routing