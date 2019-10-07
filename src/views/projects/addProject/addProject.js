import React from 'react'
import './addProject.scss'

import ProjectData from '../../../components/projectData/projectData'
import ReaControllersGroup from '../../../components/reaControllersGroup/reaControllersGroup'
import TeamMembersControls from '../../../components/teamMembersControls/teamMembersControls'
import TasksControl from '../../../components/taksControl/tasksControl'
import UserStoriesControls from '../../../components/userStoriesControls/userStoriesControls'

export default class AddProject extends React.Component{

  state = {
    name: '',
    type:'',
    idYoutubeVideo:'',
    description: '',
    industry:'',
    needed:'',
    budget: '',
    funding: '',
    projectstart:'',
    projectend:'',
    expected:'',
    reas: [{}],
    teamMembers: [{}],
    tasks: [],
    userStories:[{}]
  }

  document = React.createRef()
  image = React.createRef()

  handleResetForm = e => {
    e.currentTarget.reset()

    this.setState({
      reas: [{}],
      teamMembers: [{}],
      tasks: []
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
    //console.log('teamMembers :', teamMembers);
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


 /*---------------- HANDLERS USER STORIES ------------*/

  handleAddUserStories = () =>{
    let userStories = this.state.userStories
    userStories.push({})
    this.setState({
      userStories
    }) 
  }

  handleOnChangeUserStories = (id,{target}) => {
    const {name, value} = target
    let userStories = this.state.userStories
    userStories.forEach((user,i) => {
      if(i === id){user[name] = value}
    })
    this.setState({
      userStories
    })
  }


  handleDeleteUserStories = (idToDelete) => {
    console.log('idToDelete :', idToDelete)
    this.setState({
      userStories: this.state.userStories.filter((u,i)=>( idToDelete !== i  ) )
    })    
  }


  encodeObject = o => Object.keys(o).map(
    k=>`${encodeURIComponent(k)}=${encodeURIComponent(o[k])}`
  ).join('&')

  handleCreateProject = e => {
    e.preventDefault()
    let toSend = {...this.state}
    
    toSend.teamMembers = JSON.stringify(toSend.teamMembers)
    toSend.tasks = JSON.stringify(toSend.tasks)
    toSend.reas = JSON.stringify(toSend.reas)

    const url = '/app/newProject?' + this.encodeObject(toSend)
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
      data.Ok ? window.alert('project registered')
      : console.log('data :', data);
    })
    
   this.handleResetForm(e)

  }
  

  render(){
    return(
      <form id="add-project" onSubmit={this.handleCreateProject}>
        <ProjectData
          document={this.document}
          image={this.image}
          idYoutubeVideo={this.state.idYoutubeVideo}
          handleOnChange={this.handleOnChange}
          handleOnChangeUrlVideo={this.handleOnChangeUrlVideo}
        />

        <ReaControllersGroup
          className="box"
          reas={this.state.reas}
          handleAddRea={this.handleAddRea}
          handleDeleteRea={this.handleDeleteRea}
          handleOnChange={this.handleOnChangeRea}
        />
        
        <TeamMembersControls
          className="box"
          members={this.state.teamMembers}
          handleAddMember={this.handleAddMember}
          handleDeleteMember={this.handleDeleteMember}
          handleOnChange={this.handleOnChangeMember}
        />

        <UserStoriesControls
          className="box" 
          users={this.state.userStories}
          handleDeleteUserStories={this.handleDeleteUserStories}
          handleAddUserStories={this.handleAddUserStories}
          handleOnChange={this.handleOnChangeUserStories}
        />

        <TasksControl
          className="box"
          tasks={this.state.tasks}
          handleAddTask={this.handleAddTask}
          handleFinishTask={this.handleFinishTask}
        />

        <button type="submit" className="btn-primary">Create Project</button>

      </form>
    )
  }
}