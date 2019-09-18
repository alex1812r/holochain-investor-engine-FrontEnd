import React from 'react'
import './projectData.scss'

import IconVideo from '../../icons/iconVideoGrey.png'
import InputFIle from '../inputFIle/inputFile'

export default function ProjectData(props){
  return(
    <div id="project-data" className="box">
      <div>
        <input 
          type="text"
          name="name"
          value={props.name && props.name}
          placeholder="Project Name"
          onChange={props.handleOnChange && props.handleOnChange}
        />
          
        <input 
          type="text"
          name="type"
          value={props.type && props.type}
          placeholder="Project Type"
          onChange={props.handleOnChange && props.handleOnChange}
        />

        <div className="video-container">
          {
            props.idYoutubeVideo 
            ?
              <iframe 
                title="Project video"
                width="100%" height="100%"
                frameBorder="0" 
                src={'https://youtube.com/embed/' + props.idYoutubeVideo} >
              </iframe> 
            :
              <img src={IconVideo} alt='No Video'/>
          }
        </div>

        <input 
          type="text"
          name="urlvideo"
          value={props.idYoutubeVideo && `https://www.youtube.com/watch?v=${props.idYoutubeVideo}`}
          placeholder="URL Video"
          onChange={props.handleOnChangeUrlVideo && props.handleOnChangeUrlVideo}
        />

        <textarea 
          name="description"
          value={props.description && props.description}
          placeholder="Description"
          rows="6" 
          onChange={props.handleOnChange && props.handleOnChange}
        />

      </div>
      
      <div>
        <InputFIle 
          label="UPLOAD DOCUMENT"
          accept="application/pdf"
          file={props.document}
        />
        
        <InputFIle 
          label="UPLOAD IMAGE"
          accept="image/*"
          file={props.image}
        />
        
        <select 
          name="industry" 
          value={props.industry || ""} 
          onChange={props.handleOnChange && props.handleOnChange} 
        >  
          <option value="" disabled>Industry</option>
        </select>

        <input
          type="text"
          name="needed"
          value={props.needed && props.needed}
          placeholder="Needed $"
          onChange={props.handleOnChange && props.handleOnChange}
        />

        <input
          type="text"
          name="budget"
          value={props.budget && props.budget}
          placeholder="Budget $"
          onChange={props.handleOnChange && props.handleOnChange}
        />

        <input 
          type="text"
          name="funding"
          value={props.funding && props.funding}
          placeholder="Funding Campaing Start"
          onFocus={(e)=>(e.currentTarget.type = "date")}
          onBlur={(e)=>{if(props.funding === '' || e.currentTarget.value === ''){e.currentTarget.type = "text"} }}
          onChange={props.handleOnChange && props.handleOnChange}
        />
        
        <input 
          type="text"
          name="projectstart"
          value={props.projectstart && props.projectstart}
          placeholder="Project Start"
          onFocus={(e)=>(e.currentTarget.type = "date")}
          onBlur={(e)=>{if(props.funding === '' || e.currentTarget.value === ''){e.currentTarget.type = "text"} }}
          onChange={props.handleOnChange && props.handleOnChange}
        />

        <input 
          type="text"
          name="projectend"
          value={props.projectend && props.projectend}
          placeholder="Project End"
          onFocus={(e)=>(e.currentTarget.type = "date")}
          onBlur={(e)=>{if(props.funding === '' || e.currentTarget.value === ''){e.currentTarget.type = "text"} }}
          onChange={props.handleOnChange && props.handleOnChange}
        />

        <textarea 
          rows="6"
          name="expected"
          value={props.expected}
          placeholder="Expected Outcome"
          onChange={props.handleOnChange && props.handleOnChange}
        />
      </div>
    </div>
  )
}