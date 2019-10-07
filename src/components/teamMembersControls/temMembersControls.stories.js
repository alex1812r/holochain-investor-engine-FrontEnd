import React from 'react'
import TeamMembersControls from './teamMembersControls'

export default { title: 'Team Members Controls ' }

class TestTeamMembersControls extends React.Component{

  state={
    teamMembers: []
  }

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

  render(){
    return(
      <TeamMembersControls 
        members={this.state.teamMembers}
        handleAddMember={this.handleAddMember}
        handleDeleteMember={this.handleDeleteMember}
        handleOnChange={this.handleOnChangeMember}
      />
    )
  }
}

export const Team_Members_Controls = () => 
<TestTeamMembersControls />
