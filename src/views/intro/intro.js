import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from '../../components/login/login'
import CreateAccount from '../../components/createAccount/createAccount'

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