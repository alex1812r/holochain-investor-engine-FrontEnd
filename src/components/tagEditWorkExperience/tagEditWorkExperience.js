import React from 'react'
import './tagEditWorkExperience.scss'

export default function TagEditWorkExperience(props){
  const date = new Date()
    let optionsMonth = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ]
    let optionYears = []
    for(let i =1950; i <= date.getFullYear();i++){
      optionYears.push(i)
    }
  return(
    <div id="tag-edit-workExperience">
      <input
        name="role" 
        value={props.role && props.role}
        type="text"
        placeholder="Profesional Role"
        onChange={props.handleOnChange &&  props.handleOnChange}
      />

      <input
        name="company"
        value={props.company && props.company}
        type="text"
        placeholder="Company"
        onChange={props.handleOnChange &&  props.handleOnChange}
      />

      <div className="control-select">
        <select
          name="month"
          value={props.month || ""}
          onChange={props.handleOnChange &&  props.handleOnChange}
        >
        <option value="" disabled>Month</option>
        {
          optionsMonth.map((m,i)=>(
            <option key={i} value={i+1}>{m}</option>
          ))
        }
        </select>

        <select
          name="year"
          value={props.year || ""}
          onChange={props.handleOnChange &&  props.handleOnChange}
        >
        <option value="" disabled>year</option>
        {
          optionYears.reverse().map((y,i) => (
            <option key={i} value={y}>{y}</option>
          ))
        }
        </select>
      </div>

      <input 
        name="industry"
        value={props.industry && props.industry }
        type="text"
        placeholder="Industries"
        onChange={props.handleOnChange &&  props.handleOnChange}
      />

      <input 
        name="description"
        value={props.description && props.description}
        type="text"
        placeholder="Description"
        onChange={props.handleOnChange &&  props.handleOnChange}
      />
    </div>
  )
}