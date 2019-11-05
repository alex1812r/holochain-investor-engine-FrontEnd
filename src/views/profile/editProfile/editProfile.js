import React from 'react';
import './editProfile.scss'
import {connect} from 'react-redux'

import TagEditUser from '../../../components/tagEditUser/tagEditUser'
import TagEditWorkExperience from '../../../components/tagEditWorkExperience/tagEditWorkExperience'
import SpinnerLoad from '../../../components/spinnerLoad/spinnerLoad'

class EditProfile extends React.Component {

  state = {}

  componentDidMount() {
    fetch('/app/myProfile')
    .then(response => (response.json()))
    .then(data => {
      if(data.Ok){
        this.setState({...data.user})
      }
    })
  }

  handleOnChange = ({target}) => {
    const {name,value} = target
    this.setState({
      [name]: value
    })
  }

  handleOnChangeWorkE = ({target}) => {
    const {name,value} = target
    this.setState({
      workExperience:{
        ...this.state.workExperience,
        [name]:value
      } 
    })
  }

  handleSubmit = e =>{
    e.preventDefault()
    const dataJSON = JSON.stringify(this.state)
    fetch('/app/editProfile?profile='+encodeURIComponent(dataJSON))
    .then(response => {
      return (response.json())
    })
    .then(data => {
      console.log('response data: ',data)
      if(data.Ok){
        alert('Profile edited')
        this.props.editProfile(this.state) 
      } else{ console.log('response data:',data) }
    })
  }

  render() {
    if(!Object.keys(this.state).length){
      return <SpinnerLoad fullScreen size="big" />
    }
    return (
      <form id="edit-profile" onSubmit={this.handleSubmit}>
          <section className="box" >
            <TagEditUser 
              name={this.state.name}
              address={this.state.address}
              description={this.state.description}
              handleOnchange={this.handleOnChange}
            />
          </section>
          <section className="box">
            <h4>Work Experience</h4>
            <TagEditWorkExperience
              role={this.state.workExperience && this.state.workExperience.role}
              company={this.state.workExperience && this.state.workExperience.company}
              month={this.state.workExperience && this.state.workExperience.month}
              year={this.state.workExperience && this.state.workExperience.year}
              industry={this.state.workExperience && this.state.workExperience.industry}
              description={this.state.workExperience && this.state.workExperience.description}
              handleOnChange={this.handleOnChangeWorkE}
            />
          </section>
          <button type="submit" className="btn-primary btn-big">Save</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editProfile: data => { 
    dispatch({
      type:'EDIT_USER',
      data
    })
  }
})

export default connect(state => (state.user), mapDispatchToProps)(EditProfile)