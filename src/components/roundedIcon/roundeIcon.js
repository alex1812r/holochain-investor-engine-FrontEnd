import React from 'react'
import './roundedIcon.scss'

export default function RoundedIcon(props){
  return(
    <span className="container-rounded-icon">
      <span className="rounded-icon">
        {props.icon}
      </span>
    </span>
  )
}