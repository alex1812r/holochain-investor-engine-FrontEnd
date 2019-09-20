import React from 'react'
import './project.scss'
import ProjectDetails from '../../../components/projectDetails/projectDetails'
import ProjectMain from '../../../components/projectMain/projectMain'
import TeamMembers from '../../../components/teamMembers/teamMembers'
import SpinnerLoad from '../../../components/spinnerLoad/spinnerLoad'


export default class Project extends React.Component{

  state = {}
  
  componentDidMount(){
    if(this.props.id){
      fetch(`/app/getProject?id=${this.props.id}`)
      .then(response => response.json())
      .then(data => {
          if(data.Ok){ 
              //console.log('Response Data:',data.project)
              this.setState({
                  ...data.project
              }) 
           }else{ 
               //console.log(data)
          }
      })
    }
  }

  handleInvest = data => {
    if(Object.keys(this.state).length){
      const url = `/app/invest?name=${this.state.name || this.state._id}&amount=${data.amount}&paymentOption=${data.paymentOption}&description=${data.description}`

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
    
    if(!Object.keys(this.state).length){
      return <SpinnerLoad fullScreen size="big" />  
    }

    return ( 
      <div id="project">
        <div>
          <ProjectMain
            name={this.state.name}
            type={this.state.type}
            idYoutubeVideo={this.state.idYoutubeVideo}
            description={this.state.description}
            idDocument={this.state.document && this.state.document.id }
            idImage={this.state.image && this.state.image.id}
            handleDownloadDocument={this.handleDownloadDocument}
          />
        </div>      
  
        <div>
          <ProjectDetails 
            budget={this.state.budget}
            needed={this.state.needed}
            funding={this.state.funding}
            projectstart={this.state.projectstart}
            projectend={this.state.projectend}
            expected={this.state.expected}
            reas={this.state.reas}
            handleInvest={this.handleInvest}
          />
        </div>
        
        <div>
          <TeamMembers 
            members={this.state.teamMembers}
          />
        </div>
  
      </div>
    )
  }
}