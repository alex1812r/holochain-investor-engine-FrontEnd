import React from 'react'
import './teamRea.scss'

export default function TeamRea(props){
  //console.log('props :', props);
  return(
    <div id="project-team-rea">
      <h4>Resource Event Agent Log ( REA )</h4>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Provider</th>
            <th>Time</th>
            <th>date</th>
            <th>Note</th>
            <th>atLocation</th>
            <th>More Data</th>
          </tr>
        </thead>
        <tbody>
          {
            props.team &&
            props.team.map((r,i)=>(
              <tr key={i}>
                <td>{r.typeofrea}</td>
                <td>{r.provider}</td>
                <td>{r.time}</td>
                <td>{r.date}</td>
                <td>{r.note}</td>
                <td><i className="fas fa-map-marker-alt"></i> {r.location}</td>
                <td>
                  <button>view details</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}