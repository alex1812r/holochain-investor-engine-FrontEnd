import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import './header.scss'
import Logo from '../../images/White_Logo.png'

function header(props){
  return(
    <div id="header">
      <div id="header-logo">
        <img src={Logo} alt=""/>
      </div>
      <div id="header-controls">
        <div id="header-search-control">
          <input type="text"/>
          <i className="fas fa-search"></i>
        </div>
        <div id="header-nav-control">
          <nav>
            <a href="/">Home</a>
            <NavLink to="/projects">Projects</NavLink>
            <a href="/">Notifications</a>
            <a href="/">User</a>
            <button onClick={props.logOut} >log out</button>
          </nav>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  logOut: () =>{
    fetch('/logout', { credentials: "include" } )
    .then(response => ( response.json() ) )
    .then(data => {
      //console.log(data)
      dispatch({
        type:'LOGOUT',
      })
    })
  }
})

export default connect(state => ( {} ),mapDispatchToProps)(header)