import React from 'react'
import Stars from '../stars/stars'
import './userStats.scss'

export default function UserStats(props){
  return(
    <div className="user-stats">
      <div>
        <span className="stat-counter">{props.followers || 0}</span>
        <span>Followers</span>
      </div>
      <div>
        <span className="stat-counter">{props.following || 0}</span>
        <span>Following</span>
      </div>
      <div style={{width:`100%`}}>
        <span className="stat-counter">{props.projects || 0}</span>
        <span>Projects Active</span>
      </div>
      <div className="stat-rating">
        <Stars 
          rating={props.rating}
        />
        <span>Owner Rating</span>
      </div>
    </div>
  )
}