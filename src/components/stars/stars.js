import React from 'react'
import './stars.scss';

export default function Stars(props){
  const rating = props.rating ? props.rating : 0
  const Stars = [{},{},{},{},{}]
  return(
    <div className="rating-stars">
    {
      Stars.map((s,i)=>(
        i < rating ?
        <Star  key={i} className="active"/>
        : <Star key={i} />
      ))
    }
    </div>
  )
}

const Star = ({className}) => (
  <span className={className}>
    <i className="far fa-star"></i>
  </span>
)