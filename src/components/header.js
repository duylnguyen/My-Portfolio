import { Link } from "gatsby"
import React from 'react'
import './header.css'

class Header extends React.Component {
  
  state ={
    hidden: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    let { hidden } = this.state

    window.scrollY > this.prev ? 
    !hidden && this.setState({ hidden: true })
    :
    hidden && this.setState({ hidden: false })

    this.prev = window.scrollY
  }

  render() {
    let classHide =this.state.hidden ? "Hide":""

    return(
      <header className={"Header" + classHide}>
        <div className="HeaderGroup">
          <Link to="/">Home</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/#about">About</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </header>
    )
  }
}

export default Header
