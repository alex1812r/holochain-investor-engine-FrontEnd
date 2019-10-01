import React from 'react'
import Modal from './modal'

export default { title: 'Modal' }

export const Large = () =>
  <Modal active> 
    <div  style={{background:`#ffff`, width:`100%`, height:`400px`}}>
    </div>
  </Modal>

export const Medium = () => 
  <Modal active size="md"> 
    <div  style={{background:`#ffff`, width:`100%`, height:`400px`}}>
    </div>
  </Modal>


export const small = () => 
  <Modal active size="sm"> 
    <div  style={{background:`#ffff`, width:`100%`, height:`400px`}}>
    </div>
  </Modal>
