import React from 'react'
import './editProject.scss'

import ProjectData from '../../../components/projectData/projectData'
import ReaControllersGroup from '../../../components/reaControllersGroup/reaControllersGroup'
import TeamMembersControls from '../../../components/teamMembersControls/teamMembersControls'
import TasksControl from '../../../components/taksControl/tasksControl'
import SpinnerLoad from '../../../components/spinnerLoad/spinnerLoad'

export default class EditProject extends React.Component{

  state = { }

  document = React.createRef()
  image = React.createRef()


  componentDidMount() {
    
    fetch('/app/getEditProject/'+this.props.id)
    .then(response => (response.json()))
    .then(data => {
      //console.log(data)
      data.Ok ?
        this.setState({
          ...data.project
        })
      : console.log(data)
    })

  }

  handleOnChange = ({target}) => {
    const {name,value} = target
    this.setState({
      [name]: value
    })
  }

  handleOnChangeUrlVideo = ({target}) => {
    try{
      const video = new URL(target.value)
      let idYoutubeVideo
      switch (video.hostname){
        case 'youtu.be':
          idYoutubeVideo = video.pathname.split('/')[1]
          break  
        case 'www.youtube.com':
          idYoutubeVideo = video.search.split('?v=')[1]
          break
        default :
        console.log(video) 
      }
      this.setState({idYoutubeVideo})
    }catch{
      this.setState({idYoutubeVideo:''})
    }
  }

/*---------------- HANDLERS REAS ------------*/

  handleAddRea = () => {
    let reas = this.state.reas
    reas.push({})

    this.setState({
      reas
    })
  }

  handleOnChangeRea = (id,{target}) => {
    const {name, value} = target
    let reas = this.state.reas
    reas.forEach((rea,i) => {
      if(i === id){rea[name] = value}
    })
    this.setState({
      reas
    })
  }
  
  handleDeleteRea = idToDelete =>{
    this.setState({
      reas: this.state.reas.filter((r,i)=>( idToDelete !== i  ) )
    })
  }
  
/*---------------- HANDLERS MEMBERS ------------*/

  handleAddMember = () =>{
    let teamMembers = this.state.teamMembers
    teamMembers.push({})
    
    this.setState({
      teamMembers
    })
  }
  
  handleOnChangeMember = (id,{target}) => {
    const {name, value} = target
    let teamMembers = this.state.teamMembers
    console.log('teamMembers :', teamMembers);
    teamMembers.forEach((member,i) => {
      if(i === id){member[name] = value}
    })
    this.setState({
      teamMembers
    })
  }

  handleDeleteMember= idToDelete =>{
    this.setState({
      teamMembers: this.state.teamMembers.filter((r,i)=>( idToDelete !== i  ) )
    })
  }


  /*---------------- HANDLERS TAKS ------------*/

  handleAddTask = value =>{
    let tasks = this.state.tasks
    tasks.push({
      name: value,
      finished:false
    })
    this.setState({
      tasks
    })
  }

  handleFinishTask = idToFinish => {
    let tasks = this.state.tasks
    //console.log(tasks[id])
    tasks[idToFinish].finished = !tasks[idToFinish].finished
    this.setState({
      tasks
    })
  }


  encodeObject = o => Object.keys(o).map(
    k=>`${encodeURIComponent(k)}=${encodeURIComponent(o[k])}`
  ).join('&')

  handleEditProject = e => {
    e.preventDefault()
    let toSend = {...this.state}
    
    toSend.teamMembers = JSON.stringify(toSend.teamMembers)
    toSend.tasks = JSON.stringify(toSend.tasks)
    toSend.reas = JSON.stringify(toSend.reas)

    const url = '/app/editProject?' + this.encodeObject(toSend)
    //console.log('url :', url);
    let fileData = new FormData()
    if(this.document.current.files[0]){
      fileData.append('document',this.document.current.files[0])
    }
    if(this.image.current.files[0]){
      fileData.append('image',this.image.current.files[0])
    }

    fetch(url,{
      method: 'POST',
      body: fileData
    }).then(response => response.json())
    .then(data => {
      console.log(data)
    })

  }
  

  render(){

    if(!Object.keys(this.state).length){
      return <SpinnerLoad fullScreen size="big" />
    }

    return(
      <form id="edit-project" onSubmit={this.handleEditProject}>
        <ProjectData
          name={this.state.name}
          type={this.state.type}
          idYoutubeVideo={this.state.idYoutubeVideo}
          description={this.state.description}
          industry={this.state.industry}
          needed={this.state.needed}
          budget={this.state.budget}
          funding={this.state.funding}
          projectstart={this.state.projectstart}
          projectend={this.state.projectend}
          expected={this.state.expected}
          document={this.document}
          image={this.image}
          handleOnChange={this.handleOnChange}
          handleOnChangeUrlVideo={this.handleOnChangeUrlVideo}
        />

        <ReaControllersGroup 
          reas={this.state.reas}
          handleAddRea={this.handleAddRea}
          handleDeleteRea={this.handleDeleteRea}
          handleOnChange={this.handleOnChangeRea}
        />
        
        <TeamMembersControls 
          members={this.state.teamMembers}
          handleAddMember={this.handleAddMember}
          handleDeleteMember={this.handleDeleteMember}
          handleOnChange={this.handleOnChangeMember}
        />

        <TasksControl
          tasks={this.state.tasks}
          handleAddTask={this.handleAddTask}
          handleFinishTask={this.handleFinishTask}
        />

        <button type="submit" className="btn-primary">Save</button>

      </form>
    )
  }
}