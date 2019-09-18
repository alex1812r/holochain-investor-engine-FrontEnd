import React from 'react'
import './tagEditUser.scss'
import Avatar from '../avatar/avatar'
import UserStats from '../userStats/userStats'

export default function tagEditUser(props){
  return(
    <div id="tag-edit-user">
      <div className="user-data">
        <Avatar 
          width="110px"
          active
        />
        <div className="name-address">
          <input
            name="name" 
            type="text"
            value={props.name && props.name}
            placeholder="Prefered Name"
            onChange={props.handleOnchange && props.handleOnchange} 
          />
          
          <input
            name="address"
            type="text"
            value={props.address && props.address}
            placeholder="Address"
            onChange={props.handleOnchange && props.handleOnchange} 
          />

        </div>
        <textarea
          name="description"
          value={props.description && props.description}
          placeholder="Description"
          rows="6"
          onChange={props.handleOnchange && props.handleOnchange}
        />

      </div>
      <div className="stats">
        <UserStats 

        />
      </div>
    </div>
  )
}