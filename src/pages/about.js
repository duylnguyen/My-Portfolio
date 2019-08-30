import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Me</h1>
            <p>I'm currently just graduate from General Assembly</p>
            <p>If you like my works and want to hire me. <Link to="/contact">Contact me.</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage