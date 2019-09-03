import React from 'react'
import './Card.css'

const Card = (props) => (
    <div>
        <div className="card">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <img src={props.image} />
        </div>
        <div className="githubLink">
            <a href={props.src} type="github" target="_blank" rel="noopener noreferrer">
                <img src={require('../images/github-big-icon.png')} alt="GitHub"/>
            </a>
        </div>
    </div>    
)

export default Card