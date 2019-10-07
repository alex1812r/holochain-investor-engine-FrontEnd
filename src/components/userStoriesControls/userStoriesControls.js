import React from 'react'
import './userStoriesControls.scss'
import RedoundedIcon from '../roundedIcon/roundeIcon' 

export default function UserStoriesControls(props){
  return(
    <div className={`user-stories-controls ${ props.className || '' }`}>
        <h4>User Stories</h4>
        {
          props.users && 
          props.users.map((u,i) => (
            <UserStories 
              key={i}
              id={i}
              title={u.title}
              description={u.description}
              handleDeleteUserStories={props.handleDeleteUserStories}
            />
          ))
        }

      <div className="user-stories-add-control">
        <button type="button" onClick={props.handleAddUserStories}>
          <RedoundedIcon 
            icon={<i className="fas fa-plus"></i>}
          /> Add User Stories
        </button>
      </div>
    </div>
  )
}

const UserStories = (props) => 
  <div className="user-stories">
    <div className="user-stories-inputs">
      <input 
        type="text"
        placeholder="Lorem"
        value={props.title && props.title}
        onChange={e => { props.onChange && props.onChange(props.id,e)  } }
      />
      <input 
        type="text"
        placeholder="Lorem"
        value={props.description && props.description}
        onChange={e => { props.onChange && props.onChange(props.id,e)  } }
      />
    </div>

    <div className="user-stories-delete-control">
      <button onClick={e => { props.handleDeleteUserStories && props.handleDeleteUserStories(props.id) }} type="button">
        <RedoundedIcon
          icon={<i className="far fa-trash-alt"></i>}
        />
      </button>
    </div> 
  </div>