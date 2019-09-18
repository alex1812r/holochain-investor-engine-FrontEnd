import React from 'react'
import './teamMembers.scss'

export default function TeamMembers(props){
  
  return(
    <div className="team-members box">
      <h4>Team Members</h4>
      <table>
        <tbody>
          {
            props.members &&
            props.members.map((m,i)=>(

              <tr key={i}>
                <td>{m.name}</td>
                <td>{m.profession}</td>
                <td>{m.linkedinUrl && 
                  <a href={m.linkedinUrl}>{m.linkedinUrl}</a>
                }</td>
              </tr>

            ))
          }
        </tbody>
      </table>
    </div>
  )
}