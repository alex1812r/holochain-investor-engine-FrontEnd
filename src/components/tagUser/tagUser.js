import React from 'react'
import './tagUser.scss'
import Avatar from '../avatar/avatar'

export default function TagUser(props){
  return(
    <div className="tag-user">
      <Avatar 
        width="110px"
        active
      />
      <div className="name-follow">
        <div>
          <span>Prefered Name - <a href="/">{props.username}</a></span>
            
            {/* <button className="btn-secondary">Follow</button> */}
          
        </div>
        <span><i className="fas fa-map-marker-alt"></i> {props.address}</span>
      </div>
      <p>
        {props.description}
      </p>
    </div>
  )
}