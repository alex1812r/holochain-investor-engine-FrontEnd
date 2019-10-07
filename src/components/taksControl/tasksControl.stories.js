import React from 'react'
import TasksControl from './tasksControl'

export default { title: 'Tasks Control' }

class TestTasksControl extends React.Component{

  state={
    tasks: []
  }

  handleAddTask = value =>{
    let tasks = this.state.tasks
    tasks.push({
      name: value,
      finished:false
    })
    this.setState({
      tasks
    })
  }

  handleFinishTask = idToFinish => {
    let tasks = this.state.tasks
    //console.log(tasks[id])
    tasks[idToFinish].finished = !tasks[idToFinish].finished
    this.setState({
      tasks
    })
  }

  render(){
    return(
      <div style={{padding:`0 2rem`,margin:`auto`}}>
        <TasksControl
          tasks={this.state.tasks}
          handleAddTask={this.handleAddTask}
          handleFinishTask={this.handleFinishTask}
        />
      </div>
    )
  }
}

export const Task_Control = () => <TestTasksControl />