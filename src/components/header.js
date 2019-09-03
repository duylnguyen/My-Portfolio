import { Link } from "gatsby"
import PropTypes from "prop-types"
import ModalImage from 'react-modal-image'
import React from 'react'
import './header.css'

const Header = ({ siteTitle }) => (
  <header className="Header">
    <div className="HeaderGroup">
      <Link to="/"><button>Home</button></Link>
      <Link to="#projects"><button>Projects</button></Link>
      <Link to="#about" className="logo"><img src={require('../images/duy1.jpg')} /></Link>
      <Link to="#about"><button>About</button></Link>
      <Link to="#contact"><button>Contact</button></Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
