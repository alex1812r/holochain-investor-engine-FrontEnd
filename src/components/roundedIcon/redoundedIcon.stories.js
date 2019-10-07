import React from 'react'
import RoundedIcon from './roundeIcon'
import { storiesOf } from '@storybook/react'

storiesOf('Rounded Icon', module)
  .addDecorator( story => <> { story() } </> )
  .add('Only', () => <RoundedIcon /> )
  .add('With Icon', () => <RoundedIcon icon={ <i className="far fa-trash-alt"></i> } /> )