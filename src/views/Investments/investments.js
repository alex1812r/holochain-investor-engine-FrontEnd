import React from 'react'
import './investments.scss'
import SpinnerLoad from '../../components/spinnerLoad/spinnerLoad'
import { Link } from 'react-router-dom'

export default class Investments extends React.Component{

  state = {
    loading: true,
    projects: []
  }

  componentDidMount(){
    fetch('/app/myInvestments')
    .then( r => {
      if(r.status !== 200 ){ 
        console.log(r)
        alert(r.statusText)
        return { Ok: false }
      }
      return r.json()
    })
    .then( data => {
      console.log('data :', data)
      if(data.Ok){
        const { projects } = data
        this.setState({
          loading: false,
          projects
        })
      }
    })
  }

  render(){
    if(this.state.loading){
      return <SpinnerLoad fullScreen size="big" />
    }
    if(!this.state.projects.length){
      return <>you have no invesment activities</>
    }

    return(
      <div id="investments">
        {
          this.state.projects.map((p,i)=>(
            <div className="box project-investments-list" key={i}>
              <h4><Link to={`/project/${p._id}`}>{p.name}</Link></h4>
              <table>
                <thead>
                  <tr>
                    <th>Coin</th>
                    <th>Unmount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    p.myTransfers &&
                    p.myTransfers.map((t,i)=>(
                      <tr key={i}>
                        <td>{t.coin}</td>
                        <td>{t.amount}</td>
                        <td>{t.date}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          ))
        }
      </div>
    )
  }
}