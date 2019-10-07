import React from 'react'
import './teamMembersControls.scss'
import RoundedIcon from '../roundedIcon/roundeIcon'

export default function TeamMemberControls(props){
  
  return(
    <div className={`team-members-controls ${props.className || ''}`}>
      <h4>Team Members</h4>
      
      {
        props.members &&
        props.members.map((m,i) => (
          <MemberControl 
            key={i}
            id={i}
            name={m.name}
            profession={m.profession}
            linkedinUrl={m.linkedinUrl}
            handleOnChange={props.handleOnChange}
            handleDeleteMember={props.handleDeleteMember}
          />
        ))
      }

      <div className="member-add-control">
        <button type="button" onClick={props.handleAddMember && props.handleAddMember}>
          <RoundedIcon 
            icon={<i className="fas fa-plus"></i>}
          /> Add Member
        </button>
      </div>

    </div>
  )
}

const MemberControl = (props) => (

  <div className="member-control">
    
    <div className="member-inputs">
      <input 
        name="name"
        type="text"
        value={props.name && props.name}
        placeholder="First name and last name"
        onChange={ (e) => { props.handleOnChange && props.handleOnChange(props.id,e) } }
      />
      
      <input 
        name="profession"
        type="text"
        value={props.profession && props.profession}
        placeholder="Profession"
        onChange={ (e) => { props.handleOnChange && props.handleOnChange(props.id,e) } }
      />

      <input 
        name="linkedinUrl"
        type="text"
        value={props.linkedinUrl && props.linkedinUrl}
        placeholder="URL Linkedin"
        onChange={ (e) => { props.handleOnChange && props.handleOnChange(props.id,e) } }
      />
    </div>

    <div className="member-delete-control">
      <button type="button" onClick={()=>{props.handleDeleteMember && props.handleDeleteMember(props.id)}}>
        <RoundedIcon
          icon={<i className="far fa-trash-alt"></i>}
        />
      </button>
    </div>

  </div>

)