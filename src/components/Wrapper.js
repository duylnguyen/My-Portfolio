import React from 'react'
import './Wrapper.css'

const Wrapper = (props) => (
    <div>
        <a className="wrapper" href={props.src} type="github" target="_blank" rel="noopener noreferrer">
            <img src={props.image} alt="Link"/>
            {props.text}
        </a>
    </div>
)

export default Wrapper