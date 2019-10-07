import React from 'react'
import './tasksControl.scss'
import ProgressBar from '../progressBar/progressBar'

export default class TasksControl extends React.Component{
  
  handleKeyUp = (e) => {
    const value = e.target.value
    if (!value) {
      return
    }
    if(e.keyCode === 13 && this.props.tasks){

      for(let task of this.props.tasks){
        //console.log(task)
        if (task.name === value) {
          alert('repeated task, try another')
          return
        }
      }
      this.props.handleAddTask(value)
      e.target.value = ''
    }
  }
  
  handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  render(){
    let tasksFinished=0;
    if(this.props.tasks){

      for(let task of this.props.tasks){
        if(task.finished){
          tasksFinished++
        }
      }

    }
    const progress = ((tasksFinished / this.props.tasks.length * 100)||0).toFixed(0)
    
    return(
      <div className={`tasks-control ${this.props.className || '' } `}>
        <h4>Project Tasks</h4>
  
        <ProgressBar 
          progress={progress}
        />

        <div className="tasks-container">

          {
            this.props.tasks &&
            this.props.tasks.map((t,i) => (
              <Task
                key={i}
                id={i}
                name={t.name}
                finished={t.finished}
                handleFinishTask={this.props.handleFinishTask}
              />
            ))
          }

          <input 
            type="text"
            onKeyUp={this.handleKeyUp}
            onKeyPress={this.handleKeyPress}
            placeholder="add Task..."
          />
        </div>

      </div>
    )

  }
}

const Task = (props) => (
  <div className="task">
    {
      props.finished
        ?
        <button 
          type="button" 
          onClick={()=>{ props.handleFinishTask && props.handleFinishTask(props.id)}}
          >
          <i className='fa fa-check'/>
        </button>
        :
        <button 
          type="button"  
          onClick={()=>{ props.handleFinishTask && props.handleFinishTask(props.id)}}
          >
          <i className='fa fa-check' 
          style={{opacity:'.5'}}/>
        </button>
    } {props.name}
    
  </div>
)