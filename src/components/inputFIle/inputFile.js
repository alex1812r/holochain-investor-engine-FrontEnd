import React from 'react'
import './inputFile.scss'

export default function InputFile(props){
  return(
    <div className="input-file">
      <label>{props.label || "NO LABEL"}</label>
      <input 
        type="file" 
        name={props.name && props.name} 
        accept={props.accept && props.accept}
        ref={props.file && props.file}
      />
    </div>
  )
}