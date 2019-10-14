import React from 'react'
import './userStoriesControls.scss'
import RedoundedIcon from '../roundedIcon/roundeIcon' 

export default function UserStoriesControls(props){
  return(
    <div className={`user-stories-controls ${ props.className || '' }`}>
      <div className="user-stories-controls-header">
        <h4>User Stories</h4>
        <div>
          <button onClick={getTraining} type="button">
            Get training to submit my user stories
          </button>
        </div>
      </div>
        {
          props.stories && 
          props.stories.map((u,i) => (
            <UserStories 
              key={i}
              id={i}
              title={u.title}
              description={u.description}
              handleOnChange={props.handleOnChange}
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
        name="title"
        placeholder="Lorem"
        value={props.title && props.title}
        onChange={e => { props.handleOnChange && props.handleOnChange(props.id,e)  } }
      />
      <input 
        type="text"
        name="description"
        placeholder="Lorem"
        value={props.description && props.description}
        onChange={e => { props.handleOnChange && props.handleOnChange(props.id,e)  } }
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

function getTraining() {
  fetch('/app/storiesHelp/')
  .then(response => response.json())
  .then(data => {
    console.log('data :', data)
  })
}