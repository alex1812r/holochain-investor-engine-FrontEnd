import React from 'react'
import ProjectsGroup from '../../components/projectsGroup/projectsGroup'
import SpinnerLoad from '../../components/spinnerLoad/spinnerLoad'

export default class AllProjects extends React.Component{
  
  state ={
    projects: []
  }

  componentDidMount(){
    fetch('/app/allProjects')
    .then(response => (response.json()))
    .then(data => {
      //console.log(data)
      this.setState({
        projects: data
      })
    })
  }

  render(){
    if(!this.state.projects.length){
      return <SpinnerLoad fullScreen size="big" />
    }
    
    return <ProjectsGroup projects={this.state.projects} />
  }
}