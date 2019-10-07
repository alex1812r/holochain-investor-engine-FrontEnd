import React from 'react'
import ReaControllersGroup from './reaControllersGroup'
import { storiesOf } from '@storybook/react'

storiesOf('REAS controllers group',module)
  .addDecorator( story => (
    <>{story()}</>
  ))

  .add('ReasControllers',() => <TestReaControllersGroup />)

class TestReaControllersGroup extends React.Component {
  
  state={
    reas: []
  }


  handleAddRea = () => {
    let reas = this.state.reas
    reas.push({})

    this.setState({
      reas
    })
  }

  handleOnChangeRea = (id,{target}) => {
    const {name, value} = target
    let reas = this.state.reas
    reas.forEach((rea,i) => {
      if(i === id){rea[name] = value}
    })
    this.setState({
      reas
    })
  }
  
  handleDeleteRea = idToDelete =>{
    this.setState({
      reas: this.state.reas.filter((r,i)=>( idToDelete !== i  ) )
    })
  }

  render(){
    return(      
      <ReaControllersGroup
        reas={this.state.reas}
        handleAddRea={this.handleAddRea}
        handleDeleteRea={this.handleDeleteRea}
        handleOnChange={this.handleOnChangeRea}
      />
    )
  
  }
}
