import React from 'react'
import './Wrapper.css'

const Wrapper = (props) => (
    <div>
        <a className="wrapper" href={props.src} type="github" target="_blank" rel="noopener noreferrer">
            {props.text}
        </a>
    </div>
)

export default Wrapper