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
        <div className="name-addres">
          <p>Prefered Name - <a href="/">{props.username}</a></p>
          <p><i className="fas fa-map-marker-alt"></i> {props.address}</p>
        </div>
        
        <div className="follows">
          <div>
            <span>0</span>
            <p>Following</p>
          </div>
          <div>
            <span>0</span>
            <p>Followers</p>
          </div>
          <div>
            <button className="btn-secondary">FOLLOW</button>
          </div>
        </div>
      </div>
      <p>
        {props.description}
      </p>
    </div>
  )
}