import React from 'react'
import './avatar.scss'

import AvatarDefault from '../../images/avatar.jpg'

export default function Avatar(props){
  const width = props.width || 0
  const active = props.active ? 'active' : ''
  return(
    <div className="avatar">
      <div className="img-avatar">
        {
          props.image ?
          <img 
            className={active}
            src={props.image}  
            alt="" 
            style={{width:`${width}`,height:`${width}`}}
          />
          :
          <img 
            className={active}
            src={AvatarDefault}  
            alt="" 
            style={{width:`${width}`,height:`${width}`}}
          />
        }
        {/* <span style={{width:`${width}`,height:`${width}`}}></span> */}
      </div>
      {/* { props.user && <span>{props.user}</span> } */}
    </div>
  )
}