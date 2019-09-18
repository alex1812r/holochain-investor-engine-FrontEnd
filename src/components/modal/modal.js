import React from 'react'
import './modal.scss'

export default function Modal(props){
  const size = props.size ? props.size : ''
  return(
    <div className={'modal ' + (props.active ? 'active' : '')}>
      <button onClick={props.hide} className="btn-close-modal">X</button>
      <div className={`window-modal ${size}`}>
        {props.children}
      </div>
    </div>
  )
}
