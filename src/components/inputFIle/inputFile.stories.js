import React from 'react'
import InputFile from './inputFile'
import { storiesOf } from '@storybook/react'

storiesOf('Input File', module)
  .addDecorator( story => <> { story() } </> )
  .add('input', () => <InputFile label="INPUT FILE" /> )