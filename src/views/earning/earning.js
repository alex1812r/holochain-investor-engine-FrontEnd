import React from 'react'
import './earning.scss'
import SpinnerLoad from '../../components/spinnerLoad/spinnerLoad'

export default class Earning extends React.Component{

  state = {
    projects: [],
    loading: true
  }

  componentDidMount(){
    fetch('/app/myProjects')
    .then(r => r.json())
    .then(data => {
      //console.log('data :', data);
      if(data.Ok){
        this.setState({
          projects: data.projects,
          loading: false
        }) 
      }
      
    })
  }

  render(){
    if(this.state.loading){
      setTimeout(()=>{
        this.setState({ loading: false }) 
      }, 5000)

      return <SpinnerLoad fullScreen size="big" />
    }

    if(!this.state.projects.length){
      return <>you have no invesment activities</>
    }

    let lists = {}
    
    this.state.projects.forEach((p,i) => {
      let year =  p.projectstart.split('-',1)
      
      if(!lists[year]){
        lists[year] = []
      }

      lists[year].push(p)
    })

    return(
      <div id="earning">
        {
          Object.keys(lists).map((key,k) => (
            
            <ListEarning
              key={k}
              year={key}
              projects={ lists[key] }
            />
            
          ))
        }
      </div>
    )
  }
}

const ListEarning = (props) => (
  
  <div className="box earning-list">
    <h4>
      {
        parseInt(props.year) === parseInt(new Date().getFullYear())
        ? 'Current Year' : props.year 
      }
    </h4>
    <table>
      <thead>
        <tr>
          <th>Project</th>
          <th>Type</th>
          <th>Activity</th>
          <th>Revenue</th>
          <th>Earning</th>
          <th>Account</th>
        </tr>
      </thead>
      <tbody>
        {
          props.projects &&
          props.projects.map((p,i)=>(
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.type}</td>
              <td>{p.activity}</td>
              <td>{p.revenue}</td>
              <td>{p.earning}</td>
              <td>{p.account}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>

)