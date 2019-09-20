import React from 'react'
import './modal.scss'

export default function Modal(props){
  return(
    <div className={'modal ' + (props.active ? 'active' : '')}>
      <button onClick={props.hide} className="btn-close-modal">X</button>
      <div className={`window-modal ${props.size || ''}`}>
        {props.children}
      </div>
    </div>
  )
}
