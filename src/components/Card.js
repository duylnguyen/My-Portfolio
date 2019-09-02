import React from 'react'

const Card = (props) => (
    <div className="card">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default Card