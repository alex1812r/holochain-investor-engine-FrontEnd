import React from 'react'
import './reaControllersGroup.scss'
import RoundedIcon from '../roundedIcon/roundeIcon'

export default function ReaControllersGroup(props){
  
  return(
    <div id="rea-controllers-group" className={props.className || ''}>
      <h4>Resource Event Agent</h4>
      {
        props.reas &&
        props.reas.map((r,i) => (
          <ReaControls
            key={i} 
            id={i}
            type={r.typeofrea}
            provider={r.provider}
            time={r.time}
            date={r.date}
            note={r.note}
            location={r.location}
            moredata={r.moredata}
            handleOnChange={props.handleOnChange}
            handleDeleteRea={props.handleDeleteRea}
          />
        ))
      }
      <div className="add-control">
        <button type="button" onClick={props.handleAddRea && props.handleAddRea}>
          <RoundedIcon 
            icon={<i className="fas fa-plus"></i>}
          /> Add REA        
        </button>
      </div>
    </div>
  )
}

const ReaControls = (props) =>{
  return(
    <div className="rea-controls">
      <div className="rea-inputs">
        <input 
          name="typeofrea"
          type="text"
          placeholder="Type"
          value={props.type && props.type}
          onChange={ (e) => { props.handleOnChange && props.handleOnChange(props.id,e) } }
        />

        <input 
          name="provider"
          type="text"
          placeholder="Provider"
          value={props.provider && props.provider}
          onChange={ (e) => { props.handleOnChange && props.handleOnChange(props.id,e) } }
        />
        
        <input 
          name="time"
          type="text"
          placeholder="Time"
          value={props.time && props.time}
          onChange={ (e) => { props.handleOnChange && props.handleOnChange(props.id,e) } }
        />

        <input 
          name="date"
          type="text"
          placeholder="Date"
          value={props.date && props.date}
          onChange={ (e) => { props.handleOnChange && props.handleOnChange(props.id,e) } }
        />

        <input 
          name="note"
          type="text"
          placeholder="Note"
          value={props.note && props.note}
          onChange={ (e) => { props.handleOnChange && props.handleOnChange(props.id,e) } }
        />

        <input 
          name="location"
          type="text"
          placeholder="At Location"
          value={props.location && props.location}
          onChange={ (e) => { props.handleOnChange && props.handleOnChange(props.id,e) } }
        />

        <textarea 
          name="moredata"
          placeholder="More Data"
          value={props.moredata && props.moredata}
          onChange={ (e) => { props.handleOnChange && props.handleOnChange(props.id,e) } }
          rows="5" />

      </div>
      <div className="delete-control">
        <button type="button" onClick={()=>{props.handleDeleteRea && props.handleDeleteRea(props.id) }}> 
          <RoundedIcon 
            icon={<i className="far fa-trash-alt"></i>}
          />
        </button>
      </div>
    </div>
  )
}