import React from 'react'
import ProjectDetails from './projectDetails'
import { storiesOf } from '@storybook/react'

storiesOf('Project Details',module)
  .addDecorator( story => (
    <>{story()}</>
  ))
  
  .add('Normal', () => <ProjectDetails /> )