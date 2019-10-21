import React from 'react'
import {connect} from 'react-redux'
import './sass/global.scss'
import Layout from './layout/layout'
import Intro from './views/intro/intro'
import SpinnerLoad from './components/spinnerLoad/spinnerLoad'

class Hie extends React.Component {

  state = {
    loading:true
  }

  componentDidMount = () => {
    
    fetch('/app/testLogged')
    .then(response => (response.json()))
    .then(data => {
      this.setState({loading:false})
      //console.log(data)
      data.Ok &&
       this.props.isLogged(data.user)
      // console.log(data)
    })
  }
  
  render(){
    setTimeout(()=>{
      this.setState({
        loading: false,
      })
    }, 5000)
    
    if(this.state.loading){
      
      return (
        <SpinnerLoad 
          fullScreen 
          size="big"/>
      )
      
    }else if(this.props.logged){
      
        return <Layout />

    }else{

        return <Intro />
      
    } 
      
  }
}


const mapDispatchToProps = dispatch => ({
  isLogged: (user = {} ) => {
    dispatch({
      type: 'LOGGED', 
      data: user
    })
  }
})

export default connect(state => (state.login), mapDispatchToProps)(Hie);
