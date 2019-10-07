import React from 'react'
import Avatar from './avatar'
import { storiesOf } from '@storybook/react'

storiesOf('Avatar Component',module)
  .addDecorator( story => (
    <>{story()}</>
  ))
  .add('Simple', () =>
    <Avatar width="100px" height="100px" /> 
  )
  .add('Active', () =>
    <Avatar width="100px" height="100px" active/>
  )