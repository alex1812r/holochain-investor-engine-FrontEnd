import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './login.scss'
import SpinnerLoad from '../../../components/spinnerLoad/spinnerLoad' 

class Login extends React.Component{

  state ={
    loading:false,
    message:'',
  }

  email = React.createRef()
  password = React.createRef()

  handleOnSignIn = (e) => {
    e.preventDefault()
    this.setState({
      loading:true
    })
    const email = this.email.current.value
    const password = this.password.current.value

    // this.setState({
    //   loading:true
    // })

    let url = '/login?email='+encodeURIComponent(email)+'&password='+encodeURIComponent(password)

    fetch(url,{
      credentials:"include"
    })
    .then(response => (
      response.json()
    ))
    .then(data => {
      if(data.Error){
      
        this.setState({
          loading:false,
          message: data.Error
        })
      
      } else if(data.valid){
      
        this.props.signIn(data.user)
      
      }else{
        this.setState({
          loading:false,
          message: "Password invalid"
        }) 
      }

    })
  }
  render(){
    // const {email,password,msj} = this.state
    return(
      <form id="login" className="box" onSubmit={this.handleOnSignIn}>
        <h2>Login</h2>
        
        <label htmlFor="user-email">User</label>
        <input 
          ref={this.email}
          type="text" 
          name="user-email" 
          id="user-email"
          required
        />

        <label htmlFor="user-password">Password</label>
        <input
          ref={this.password}
          type="password" 
          name="user-password" 
          id="user-password"
          required
        />

        <div id="login-controls">
          <div>
            <Link to="/createAccount">Create new Account</Link>
            <button type="submit" className="btn-primary">Sign In</button>
          </div>
          <span>{(this.state.loading && <SpinnerLoad/>) || this.state.message }</span>
        </div>
      </form>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  signIn: user => {
    dispatch({
      type:'SIGNIN',
      data: user
    })
  }
})

export default connect(state => ({}),mapDispatchToProps)(Login)