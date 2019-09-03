import React from 'react'
import './Card.css'

const Card = (props) => (
    <div className="card">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <img src={props.image} />
    </div>
)

export default Card