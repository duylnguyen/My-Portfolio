import React from 'react'
import './Container.css'

const Container = (props) => (
    <div className="container">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text4}</p>
        <img src={props.image} />
    </div>
)

export default Container