import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './login/login'
import CreateAccount from './createAccount/createAccount'

export default function Intro(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/createAccount" >{<CreateAccount />}</Route>  
        <Route>{<Login />}</Route>
      </Switch>
    </BrowserRouter>
  )
}