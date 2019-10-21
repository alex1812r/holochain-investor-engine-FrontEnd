import React from 'react'
import './project.scss'
import ProjectDetails from '../../../components/projectDetails/projectDetails'
import ProjectMain from '../../../components/projectMain/projectMain'
import TeamMembers from '../../../components/teamMembers/teamMembers'
import SpinnerLoad from '../../../components/spinnerLoad/spinnerLoad'


export default class Project extends React.Component{

  state = {
    investor:{},
    project:{},
    owner: {},
    memberOwners: []
  }
  
  componentDidMount(){
    if(this.props.id){
      fetch(`/app/getProject?id=${this.props.id}`)
      .then(response => response.json())
      .then(data => {
          if(data.Ok){
            const { project, investor, owner, memberOwners } = data 
              this.setState({
                  project,investor,owner, memberOwners
              }) 
           }else{ 
               //console.log(data)
          }
      })
    }
  }

  handleInvest = data => {
    if(Object.keys(this.state).length){
      const url = `/app/invest?name=${this.state.project.name || this.state.project._id}&amount=${data.amount}&paymentOption=${data.paymentOption}&description=${data.description}`

      fetch(url)
      .then(response => ( response.json() ))
      .then(data => {
          console.log('data :', data);
          if(data.Ok){
            window.alert('Request send')
          }
      })

    }else{ window.alert('There is not project available') }
  } 
  
  handleDeposit = data => {
    if(Object.keys(this.state.project).length){
      
      const url = `/app/deposit?name=${this.state.project.name || this.state.project._id}&amount=${data.amount}&paymentOption=${data.paymentOption}`
      
      fetch(url)
      .then(response => ( response.json() ))
      .then(data => {
          console.log('data :', data);
          if(data.Ok){
            window.alert('Request send')
          }
      })

    }else{ window.alert('There is not project available') }
  }

  handleRetire = data => {
    if(Object.keys(this.state.project).length){
      const req = this.state.owner.Ok ? 'withdrawOwner' : 'withdraw'
      const url = `/app/${req}?name=${this.state.project.name || this.state.project._id}&amount=${data.amount}&paymentOption=${data.paymentOption}`

      fetch(url)
      .then(response => ( response.json() ))
      .then(data => {
          console.log('data :', data);
          if(data.Ok){
            window.alert('Request send')
          }
      })

    }else{ window.alert('There is not project available') }
  }

  handleDownloadDocument = (idDocument) =>{
    if(!idDocument){
      window.alert('There is not document')
    }else{
      fetch('/app/readFile/document/'+idDocument)
      .then(response => (response.blob()))
      .then(blob => {
          let url = window.URL.createObjectURL(blob)
          let a = document.createElement('a')
          a.href = url
          a.download = "project.pdf"
          document.body.appendChild(a)
          a.click()
          a.remove()
      })
    }
  }
  
  render(){
    if(!Object.keys(this.state.project).length){
      return <SpinnerLoad fullScreen size="big" />  
    }
    return ( 
      <div id="project">
        <div>
          <ProjectMain
            name={this.state.project.name}
            type={this.state.project.type}
            idYoutubeVideo={this.state.project.idYoutubeVideo}
            description={this.state.project.description}
            idDocument={this.state.project.document && this.state.project.document.id }
            idImage={this.state.project.image && this.state.project.image.id}
            handleDownloadDocument={this.handleDownloadDocument}
          />
        </div>      
  
        <div>
          <ProjectDetails
            budget={this.state.project.budget}
            needed={this.state.project.needed}
            funding={this.state.project.funding}
            projectstart={this.state.project.projectstart}
            projectend={this.state.project.projectend}
            expected={this.state.project.expected}
            reas={this.state.project.reas}
            handleInvest={this.handleInvest}
            handleRetire={this.handleRetire}
            handleDeposit={this.handleDeposit}
            investor={this.state.investor}
            owner={this.state.owner}
            memberOwners={this.state.memberOwners}
          />
        </div>
        
        <div>
          <TeamMembers
            className="box"
            members={this.state.project.teamMembers}
          />
        </div>
  
      </div>
    )
  }
}