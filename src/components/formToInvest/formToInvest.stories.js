import React from 'react'
import FormToInvest from './formToInvest'
import { storiesOf } from '@storybook/react'

storiesOf('Form to Invest',module)
  .addDecorator( story => <> { story() } </> )
  .add('Form', () => <FormToInvest />  )