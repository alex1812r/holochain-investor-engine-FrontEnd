import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import './layout.scss'
import Main from './main/main'
import Header from './header/header'

export default function Layout(){
  return(
    <div id="layout">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  )
}