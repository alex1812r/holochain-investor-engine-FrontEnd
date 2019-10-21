import React from 'react'
import './tableMember.scss'
import Avatar from '../avatar/avatar'
export default function TableMember(props){
  
  const follow = (id) => {
   fetch('/app/follow?id='+id)
   .then(res => ( res.json() )) 
   .then(data => {
      if(data.Ok){
        props.members.forEach(m => {
          if(m._id  === id){
            m.follow = true
          }
        })
      }
   })
  } 

  return(
    <div className="table-members">
      <h4>Members</h4>
      {
        props.members && 
        props.members.map((m,i)=>(
          <Member 
            key={i}
            id={m._id}
            name={m.name}
            type={m.type}
            following={m.follow}
            follow={follow}
          />
        ))
      }
    </div>
    )
}

const Member = props => (
  <div className="table-members-member">
    <Avatar 
      width="70px"
      active
    />
    <div>
      <div>
        <span>{props.name}</span>
        <p>{props.type}</p>
      </div>
      <div>
        {
          !props.following ? 
          <button onClick={()=>{props.follow(props.id)}} className="btn-secondary">Follow</button>
          : <span>Following</span>
        }
      </div>
    </div>
  </div>
)