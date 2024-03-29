import React from 'react'
import "../Styles/cardss.css"
// import "../Styles/toggle.css"
import Toggle from './Toggle'


const Card2 = (props) => {
  return (
  
    <div className="card2Box">
    <div className="card2">
       <div className="card2h4">{props.title}</div>
      <div className="card2content">
        <div className="card2h3">{props.description}</div>
        <p style={props.style}>{props.status}</p>
        <p style={props.createdAtStyle}>{props.createdAt}</p>
        {props.showToggle && <Toggle />}
      </div>
    </div>
  </div>
   

  )
}

export default Card2