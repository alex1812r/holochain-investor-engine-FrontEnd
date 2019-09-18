import React from 'react';
import './spinnerLoad.scss'

export default function SpinnerLoad(props){

  return(
    <>
    {
      props.fullScreen 
      ? 
      <div className="spinner-page">
        <div className={`spinner-load ${props.size ? props.size : ''}`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> 
      :
      <div className={`spinner-load ${props.size ? props.size : ''}`}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    }
    </>
  )
}