import React from 'react'
import SpinnerLoad from '../../components/spinnerLoad/spinnerLoad'

export default class Earning extends React.Component{

  state = {
    projects: []
  }

  componentDidMount(){
    fetch('/app/myProjects')
    .then(r => r.json())
    .then(data => {
      if(data.Ok){
        this.setState({
          projects: data.projects
        }) 
      }
    })
  }

  render(){
    if(!this.state.projects.length){
      return <SpinnerLoad fullScreen size="big" />
    }

    

    return(
      <div id="earning">
       

      </div>
    )
  }
}

const TableEarn = (props) => (

  <div className="box">

  </div>

)