import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>   
            <h1>About Me</h1>
            <p>I'm currently just graduate from General Assembly</p>
            <p>If you like my works and want to hire me. <Link to="/contact">Contact me.</Link></p>
        </Layout>
    )
}

export default AboutPage