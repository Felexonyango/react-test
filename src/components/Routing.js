import React from 'react'
import {
   Routes,
    Route,
  } from "react-router-dom";

import Dashboard from '../components/Dashboard'
import Login from './Login';
import Lorem from './Lorem'
import TodoList from './TodoList';

const Routing = () => {
  return (
    <div>
    
    <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route  path="/dashboard"element={<Dashboard/>}/>
    <Route path="/todo"element={<TodoList/>}/>
   <Route path="/lorem"element={<Lorem/>}/>
    </Routes>

    </div>
  )
}

export default Routing