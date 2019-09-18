import React from 'react';
import './projectDetails.scss'
import ProgressBar from  '../progressBar/progressBar'
import Modal from '../../components/modal/modal'
import TeamRea from '../teamRea/teamRea'

export default class ProjectDetails extends React.Component{

  state = {
    viewRea:false
  }

  handleShowModal = () => {
    this.setState({
      viewRea: this.state.viewRea ? false : true
    })
  }

  render(){
    const date = new Date().getTime()
    const endDate = this.props.projectend ? new Date(this.props.projectend).getTime() : 0
    const daysDiff = parseInt((endDate - date)/(1000*60*60*24))
    return(
      <div className="box" id="project-details">
  
        <button 
          type="button" 
          onClick={this.props.handleInvest && this.props.handleInvest } 
          className="btn-primary"> INVEST </button>
  
        <ProgressBar 
          progress={ ((this.props.budget / this.props.needed * 100) || 0).toFixed(2) }
        />
        <div className="project-stats">
  
          <div>
            <span className="stat-counter">{ this.props.budget || 0 }</span>
            <span>RAISED</span>
          </div>
  
          <div>
            <span className="stat-counter">{ this.props.needed  || 0 }</span>
            <span>GOAL</span>
          </div>
  
          <div>
            <span className="stat-counter">{daysDiff < 0 ? 0 : daysDiff}</span>
            <span>DAYS END</span>
          </div>
  
          <div>
            <span className="stat-counter"><i className="fas fa-share-alt"></i></span>
            <span>SHARE</span>
          </div>
  
        </div>
  
        <div className="project-details-data">
  
          <span>Needed ($): <span>{ this.props.needed || 0}</span> </span>
          <span>Budget ($): <span>{ this.props.budget || 0 }</span> </span>
          <span>Funding Compaing star: <span>{ this.props.funding ||  0 }</span> </span>
          <span>Project start: <span>{ this.props.projectend || 0 }</span> </span>
          <span>Project end: <span>{ this.props.projectstart || 0 }</span> </span>
          <span style={{marginBottom:`0`}}>Expected Outcome: </span>
          <p>{this.props.expected}</p>

          

        </div>

        <button
          onClick={this.handleShowModal}
          type="button" 
          className="btn-primary">
        Resource Event Agent Log
        </button>
  
        <Modal 
          active={this.state.viewRea}
          hide={this.handleShowModal}>
            <TeamRea 
              team={this.props.reas}
            />
        </Modal>

      </div>
  
    )
  }
} 