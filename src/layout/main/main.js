import React from 'react'
import {Switch,Route} from 'react-router-dom'
import './main.scss'
import Sidebar from '../sidebar/sidebar'

import MyProfile from '../../views/profile/myProfile/myProfile'
import EditProfile from '../../views/profile/editProfile/editProfile'
import AllProjects from '../../views/projects/allProjects'
import AddProject from '../../views/projects/addProject/addProject'
import EditProject from '../../views/projects/editProject/editProject'
import Project from '../../views/projects/project/project'
import Earning from '../../views/earning/earning'
import Wallet from '../../views/wallet/wallet'

export default function Main(){
  return(
    <div id="main">
      <Sidebar />
      <section id="section-main">
        <Switch>
          <Route exact path="/profile/my">{<MyProfile />}</Route>
          <Route exact path="/profile/edit" >{<EditProfile />}</Route>
          <Route exact path="/projects" >{<AllProjects />}</Route>
          <Route exact path="/addProject">{<AddProject />}</Route>
          <Route exact path="/project/:id" render={({match})=>(<Project id={match.params.id} />)}/>
          <Route exact path="/editProject/:id" render={({match})=>(<EditProject id={match.params.id} />)}/>
          <Route exact path="/earning" >{<Earning />}</Route>
          <Route exact path="/wallet" >{<Wallet />}</Route>
        </Switch>
      </section>
    </div>
  )
}