import React from 'react'
import './projectCard.scss'
import {Link} from 'react-router-dom'
import IconVideo from '../../icons/iconVideoGrey.png'
import RoundedIcon from '../roundedIcon/roundeIcon'
import ProgressBar from '../progressBar/progressBar'

export default function ProjectCard(props){
  const progress = ((props.raised / props.goal * 100) || 0 ).toFixed(2) || 0 
  return(
    <div className="box project-card">

      <div className="project-video">
      {
          props.idYoutubeVideo ? 
            <iframe 
              title="Project video"
              width="100%" height="100%"
              frameBorder="0" 
              src={'https://www.youtube.com/embed/'+props.idYoutubeVideo} >
            </iframe> 
          : <img src={IconVideo} alt=''/>
        }
      </div>
      
      <div className="project-wrap">

        <div className="project-identification">

          <div className="project-name">
            <h4>
              {
                props.id ?
                <Link to={`/project/${props.id}`}>{props.name || "NO NAME"}</Link>
                : (props.name || 'NO NAME')
              }
            </h4>
            <span>{props.type || "No Type"}</span>
          </div>
          {
            (props.edit || props.delete) &&
            
            <div className="project-controls">
              {
                props.edit && (
                  props.id 
                  ?
                  <Link to={`/editProject/${props.id}`}>
                    <RoundedIcon
                      icon={<i className="far fa-edit"></i>}
                    />
                  </Link>
                  : 
                  <button type="button">
                    <RoundedIcon
                      icon={<i className="far fa-edit"></i>}
                    />
                  </button>
                )
              }
              
              {
                props.delete && 
                <button type="button">
                  <RoundedIcon
                    icon={<i className="far fa-trash-alt"></i>}
                  />
                </button>
              }
            </div>
          }
        </div>

        <p> { props.description } </p>

        <ProgressBar 
          progress={progress}
        />

        <div className="raised-and-goal">
          <div>
            <span>$ {props.raised || 0}</span>
            <span>Raised</span>
          </div>
          <div>
            <span>$ {props.goal || 0}</span>
            <span>Goal</span>
          </div>
        </div>

      </div>
      
    </div>
  )
}