import React from 'react'
import './myProfile.scss'
import {connect} from 'react-redux'

import TagUser from '../../../components/tagUser/tagUser'
import ProjectsGroup from '../../../components/projectsGroup/projectsGroup'
import SpinnerLoad from '../../../components/spinnerLoad/spinnerLoad';

class myProfile extends React.Component{
  
  state={
    loading: true,
    user:{}
  }

  componentDidMount(){
    fetch('/app/myProfile')
    .then( r => {
      if(r.status !== 200){
        console.log(r)
        return { Ok: false, error: r.statusText }
      }
      return r.json()
    })
    .then( data => {
      console.log(data)
      if(!data.Ok){
        alert(data.error)
        this.setState({ loading: false})
      }else{
        const { user} = data
        this.setState({ loading: false, user })
      }
    })
  }

  handleToDelete = idToDelete => {
    const valid = window.confirm('are you sure?')
    if(valid){

      fetch(`/app/deleteProject?idProject=${idToDelete}`)
      .then(r => {
        if(r.status !== 200){
          return { Ok: false, error: r.statusText }
        }
        return r.json()
      })
      .then( data => {
        if(data.Ok){
          const projects = this.state.user.projects.filter(p => ( p._id !== idToDelete ))
          this.setState({
            user: {
              ...this.state.user,
              projects
            }
          })
        }
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    
    }
  }

  render(){
    if(this.state.loading){
      return <SpinnerLoad fullScreen size="big" />
    }else if(!Object.keys(this.state.user).length){
     return <>User no found</>
    }
    return(
      <div id="my-profile">
  
        <section id="user-data" className="box">
          
          <div className="data">
            <TagUser 
              username={this.state.user.name}
              address={this.state.user.address}
              description={this.state.user.description}
            />
            <div id="user-data-earning-stats">
              <div>
                <span>{this.state.user.totalHOT}</span>
                <p>Total HOT Earned</p>  
              </div>
              <div>
                <span>{this.state.user.totalFIAT}</span>
                <p>Total FIAT Earned</p>  
              </div>
              <div>
                <span>{this.state.user.totalUSD}</span>
                <p>Total USD Earned</p>  
              </div>
              <div>
                <span>{this.state.user.totalAUD}</span>
                <p>Total AUD Earned</p>  
              </div>  
            </div>
          </div>
  
          {/* <div className="stats">
            <UserStats 
              followers={this.state.user.followersCont}
              following={this.state.user.followingCont}
              projects={this.state.user.projectsCont}
              earned={false}
            />
          </div> */}
  
        </section>
  
        <section className="box" id="work-experience">
          <h4>Work Expience</h4>
          {
            this.state.user.workExperience &&
            <>
            <p>{this.state.user.workExperience.role}</p>
            <p>{this.state.user.workExperience.company}</p>
            <p className="experience-date">{this.state.user.workExperience.year && 'Since ' + this.state.user.workExperience.year}</p>
            <p>{this.state.user.workExperience.industry}</p>
            <p>{this.state.user.workExperience.description}</p>
            </>
          }
        </section>
  
        <section id="user-projects">
          <ProjectsGroup 
            projects={ this.state.user.projects }
            toAdd
            edit
            delete={this.handleToDelete}
          />
        </section>
      </div>
    )
  }

}

export default connect(state => (state.user), dispatch => ({}) )(myProfile)

