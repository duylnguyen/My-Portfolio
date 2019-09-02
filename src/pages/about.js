import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import Footer from '../components/footer';

const AboutPage = () => {
    return (
        <Layout>
            <div className="About">
                <div className="AboutGroup">
                    <video className="video" muted autoPlay loop>
                    <source src="https://static.videezy.com/system/resources/previews/000/011/021/original/Looping_Black_Triangular_Background_-_Enchanted_Media.mp4" type="video/mp4"/>
                    </video>
                    <h1>About Me</h1>
                  
                    <p>I'm currently just graduate from General Assembly</p>
                    <p>If you like my works and want to hire me. <Link to="/contact">Contact me.</Link></p>
                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default AboutPage