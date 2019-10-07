import React from 'react'
import ProgressBar from './progressBar'
import { storiesOf } from '@storybook/react'

storiesOf('Progress Bar', module)
  .addDecorator( story => <>{ story() } </> )
  
  .add('Normal', () => <div style={{width:`80%`,margin:'2em auto'}} ><ProgressBar /></div> )
  
  .add('With Progress', () => <div style={{width:`80%`,margin:'2em auto'}} ><ProgressBar progress={50}/></div> )