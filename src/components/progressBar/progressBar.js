import React from 'react'
import './progressBar.scss'

export default function ProgressBar(props){
  const progress = props.progress || 0
  return(
    <div className="progress-bar shine">
      <div className="progress" style={{width:progress > 100 ? 100 : progress+`%`}}>
          <div>{progress}%</div>
      </div>
    </div>
  )
}