import React from 'react';
import {useState, useEffect} from 'react'
// import {useEffect, useState} from 'react';
import { Route, BrowserRouter, Switch} from "react-router-dom";
import Login from './components/Login'
import Register from './components/Register'
import axios from 'axios';
import './App.css';

const App = () => {

  const [users,setUsers] = useState([]);
  const sibal = "sekki"
  useEffect(() => {
    fetch('/users')
    .then((res) => res.json())
    .then((user) => {
      setUsers(user)
    })
  },[])

return (
  <>
<BrowserRouter>
<Switch>
{/* <Route  path ="/register" render={() => <Register data ={users} sibal = {sibal}/>}/> */}
  {/* <Route  exact path ="/login" component ={Login} /> */}

</Switch>
</BrowserRouter>
  </>
  )
}

export default App;