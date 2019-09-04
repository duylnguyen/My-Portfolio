import { Link } from "gatsby"
import React from 'react'
import './header.css'

class Header extends React.Component {
  
  state ={
    hidden: false
    // currentScrollHeight: false
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

  // componentDidMount () {      
  //   window.onscroll =()=>{
  //     this.setState({currentScrollHeight: window.scrollY})
  //   }
  // }

  // componentDidMount () {      
  //   window.onscroll =()=>{
  //     const newScrollHeight = Math.ceil(window.scrollY / 50) *50;
  //     if (this.state.currentScrollHeight != newScrollHeight){
  //       this.setState({currentScrollHeight: newScrollHeight})
  //     }
  //   }
  // }

  render() {
    let classHide =this.state.hidden?"Hide":""
    // const opacity = Math.min(100 / this.state.currentScrollHeight  , 1)
    return(

      <header className={"Header" + classHide}>
      {/* <header style={{opacity}} className="Header"> */}
        <div className="HeaderGroup">
          <Link to="/">Home</Link>
          <Link to="#projects">Projects</Link>
          
          <Link to="#about">About</Link>
          <Link to="#contact">Contact</Link>
        </div>
      </header>
    )
  }
}

export default Header
