import React from 'react'
import {Link} from 'react-router-dom'
import './projectsGroup.scss'
import ProjectCard from '../projectCard/projectCard'
import RoundedIcon from '../roundedIcon/roundeIcon'


export default function ProjectsGroup(props){
  return(
    <div className="projects-group">
      {
        props.toAdd &&
        <div>
          <div className="box to-add-project">
            <Link to="/addProject" >
              <RoundedIcon 
                icon={<i className="fas fa-plus"></i>}
              /> Add Project
            </Link>
          </div>
        </div>
      }
      {
        props.projects &&
        props.projects.map((p,i)=>(
          <div key={i}>
            <ProjectCard
              id={p._id}
              idYoutubeVideo={p.idYoutubeVideo} 
              name={p.name}
              type={p.type}
              budget={p.budget}
              description={p.description}
              raised={p.budget}
              goal={p.needed}
              edit={props.edit}
              delete={props.delete}
            />
          </div>
        ))
      }
    </div>
  )
}