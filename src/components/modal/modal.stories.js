import React from 'react'
import Modal from './modal'
import { storiesOf } from '@storybook/react'

storiesOf('Modal Component', module)
  .addDecorator( story => <>{ story() } </> )
  
  .add('Large', () => 
    <Modal active> 
      <div  style={{background:`#ffff`, width:`100%`, height:`400px`}}>
      </div>
    </Modal>
  )

  .add('Medium', () => 
    <Modal active size="md"> 
      <div  style={{background:`#ffff`, width:`100%`, height:`400px`}}>
      </div>
    </Modal>
  )

  .add('Small', () => 
    <Modal active size="sm"> 
      <div  style={{background:`#ffff`, width:`100%`, height:`400px`}}>
      </div>
    </Modal>
  )
