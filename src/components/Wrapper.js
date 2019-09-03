import React from 'react'
import './Wrapper.css'

const Wrapper = (props) => (
    <div>
        <a className="wrapper" href="https://github.com/duylnguyen" type="github" target="_blank" rel="noopener noreferrer">
        <img src={props.image} />
        {props.text}
        </a>
    </div>
)

export default Wrapper