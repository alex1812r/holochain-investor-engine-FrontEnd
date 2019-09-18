import React from 'react'
import './myProfile.scss'
import {connect} from 'react-redux'

import TagUser from '../../../components/tagUser/tagUser'
import UserStats from '../../../components/userStats/userStats';
import ProjectsGroup from '../../../components/projectsGroup/projectsGroup'

function myProfile(props){
  
  return(
    <div id="my-profile">

      <section id="user-data" className="box">
        
        <div className="data">
          <TagUser 
            username={props.name}
            address={props.address}
            description={props.description}
          />
        </div>

        <div className="stats">
          <UserStats />
        </div>

      </section>

      <section className="box" id="work-experience">
        <h4>Work Expience</h4>
        {
          props.workExperience &&
          <>
          <p>{props.workExperience.role}</p>
          <p>{props.workExperience.company}</p>
          <p className="experience-date">{'Since ' + props.workExperience.year}</p>
          <p>{props.workExperience.industry}</p>
          <p>{props.workExperience.description}</p>
          </>
        }
      </section>

      <section id="user-projects">
        <ProjectsGroup 
          projects={ props.projects }
          toAdd
          edit
          delete
        />
      </section>
    </div>
  )
}

export default connect(state => (state.user), dispatch => ({}) )(myProfile)

