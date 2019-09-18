import React from 'react'
import { Link } from 'react-router-dom'
import './wallet.scss'

export default function Wallet(){
  return(
    <div className="box" id="wallet">
      <Link to="/"><i className="fas fa-arrow-left"></i> Back</Link>
    </div>
  )
}