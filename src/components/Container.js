import React from 'react'
import './Container.css'

const Container = (props) => (
    <div className="container">
        <h3>{props.title}</h3>
        <div id="text">{props.text}</div>
        <div id="text">{props.text1}</div>
        <div id="text">{props.text2}</div>
        <div id="text">{props.text4}</div>
        <img src={props.image} />
    </div>
)

export default Container