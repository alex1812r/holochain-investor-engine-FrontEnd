import React from 'react'
import './tagUserMin.scss'
import { Link } from 'react-router-dom'
import Avatar from '../../components/avatar/avatar'

export default function TagUserMin(props){
  const timestamp = new Date(props.timestamp)
  const time = timestamp.getHours() + ':' + timestamp.getMinutes()
  const date = timestamp.getDate() + '/' + (timestamp.getMonth() + 1) + '/' + timestamp.getFullYear()
  return(
    <div className="tag-user-min">
      <Avatar 
        width="80px"
        active
      />
      <div>
        <Link to={ props.link }>@{ props.username }</Link>
        <p>{ props.message } <span> - { date } - { time } </span></p>
      </div>
    </div>
  )
}