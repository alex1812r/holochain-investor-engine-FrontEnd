import React from 'react'
import './createAccount.scss'
import {Link} from 'react-router-dom'

export default class CreateAccount extends React.Component{

  state={
    email:'',
    password:'',
    password2:'',
    message: '',
  }

  handleOnChange = ({target}) => {
    const {name,value} = target
    this.setState({
      [name]: value
    })
  }

  handleCreateAccount = e => {
    e.preventDefault()
    if(this.state.password.length < 13){

     this.setState({
       message:"the password must be at least 13 characters"
     })
    
    }else if(this.state.password !== this.state.password2){
      
      this.setState({
        message:"Password confirmation does not match"
      })

    }else{
      this.setState({
        message:''
      })
      fetch("/signup?email="+this.state.email+'&password='+this.state.password)
        .then(r => r.json())
        .then(data => {
          console.log(data)
          if(data.Error){
            this.setState({
              message: data.Error
            })
          }else{ alert('the user has been created') }
        })
    }

  }

  render(){
    return(
      <form id="create-account" className="box" onSubmit={this.handleCreateAccount}>
        <Link to="/"><i className="fas fa-arrow-left"></i> Back</Link>
        <h4>Create Account</h4>

        <label htmlFor="">Email</label>
        <input
          onChange={this.handleOnChange} 
          type="email"
          name="email"
          value={this.state.email}
          required
        />

        <label htmlFor="">Password</label>
        <input 
          onChange={this.handleOnChange}
          type="password"
          name="password"
          value={this.state.password}
          required
        />

        <label htmlFor="">Repeat Password</label>
        <input 
          onChange={this.handleOnChange}
          type="password"
          name="password2"
          value={this.state.password2}
          required
        />

        <div>
          <span>{this.state.message}</span>
          <button type="submit" className="btn-primary">Create</button>
        </div>
      </form>
    )
  }
}