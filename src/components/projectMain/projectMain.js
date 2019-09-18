import React from 'react'
import './projectMain.scss'
import IconVideo from  '../../icons/iconVideoGrey.png'

export default function ProjectMain(props){
  return(
    <div className="box" id="project-main" >
        
      <div className="project-name-document">
        
        <div className="project-name-type">
          <h4>{props.name || "NO NAME"}</h4>
          <span>{props.type || "NO TYPE"}</span>
        </div>

        <button
          type="button"
          onClick={()=>{
            if(props.idDocument && props.handleDownloadDocument){
              props.handleDownloadDocument(props.idDocument)
            }
          }}
          className="btn-secondary">DOWNLOAD DOCUMENT</button>
      </div>

      <div className="video-container">

        {
          props.idYoutubeVideo ?
          
          <iframe 
            title="Project video"
            width="100%" height="100%"
            frameBorder="0" 
            src={'https://www.youtube.com/embed/'+props.idYoutubeVideo} >
          </iframe>  

          : <img src={IconVideo} alt="No Video"/> 
        }

      </div>
      { 
        props.idImage && 
        <img src={`/app/readFile/image/${props.idImage}`} alt="" width="100%"/>
      }

      <p>{props.description}</p>

    </div>
  )
}