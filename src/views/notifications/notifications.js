import React from 'react'
import './notifications.scss'
import TagUserMin from '../../components/tagUserMin/tagUserMin'
import SpinnerLoad from '../../components/spinnerLoad/spinnerLoad'

export default class Notifications extends React.Component{
  
  state={
    loading: true,
    notifications: []
  }
  
  componentDidMount(){
    fetch('/app/getNotifications')
      .then( r => {
        this.setState({
          loading: false
        })
        if(r.status !== 200){
          alert(r.statusText)
          return { Ok:false }
        }
        return r.json()
      })
      .then( data => {
        console.log(data)
        if(data.Ok){
          const { notifications } = data
          this.setState({
            notifications
          })
        }
      })
  }

  render(){
    if(this.state.loading){
      return <SpinnerLoad fullScreen size="big" />
    }

    return(
      <div id="notifications" className="box">
        <h4>Notifications</h4>
        {
          this.state.notifications.length ?
          this.state.notifications.map((n,i) => (
            <TagUserMin 
              key={i}
              id={n._id}
              link={n.link}
              username={n.username}
              message={n.message}
              timestamp={n.timestamp}
              read={n.read}
            />
          ))
          
          : <> No Notifications </>
        }
      </div>
    )
  }
}