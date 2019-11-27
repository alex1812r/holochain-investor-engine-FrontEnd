import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './login.scss'
import SpinnerLoad from '../../../components/spinnerLoad/spinnerLoad' 
import SimpleReactValidator from 'simple-react-validator';

class Login extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      loading:false,
      message:'',
      user:'',
      password:''
    }
    this.validator = new SimpleReactValidator({
      element: message => <div className="text-danger-login">{message}</div>,
    });
  }

  

  email = React.createRef()
  password = React.createRef()

  submitForm = (e) => {
    e.preventDefault();

    if( this.validator.allValid() ){
      this.handleOnSignIn();
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  }

  setStateFromInput = (e) => {
    e.preventDefault();
    var obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  }

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
    .then(response => {
      if(response.status !== 200){
        return { Error: response.statusText }
      }
      return response.json()
    })
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
    
    return(
      <form id="login" className="box" onSubmit={this.submitForm}>
        <h2>Login</h2>
        
        <label htmlFor="user-email">User</label>
        <input 
          ref={this.email}
          type="text" 
          name="user" 
          id="user-email"
          onChange={this.setStateFromInput}
        />
        {this.validator.message('user', this.state.user, 'required|email')}

        <label htmlFor="user-password">Password</label>
        <input
          ref={this.password}
          type="password" 
          name="password" 
          id="user-password"
          onChange={this.setStateFromInput}
        />
        {this.validator.message('password', this.state.password, 'required')}
          

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