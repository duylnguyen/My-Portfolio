import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import Container from "../components/Container"
import Wrapper from "../components/Wrapper"

const IndexPage = () => (
  <Layout>
    <div className="Hero">
      <div className="HeroGroup">
        <SEO title="Home" />
        <video className="video" muted autoPlay loop>
          <source src="https://static.videezy.com/system/resources/previews/000/011/021/original/Looping_Black_Triangular_Background_-_Enchanted_Media.mp4" type="video/mp4"/>
        </video>
        <h1>Hello! <br/>I'm Duy.</h1>
        <p>A full-stack developer living in Atlanta</p>
        <Link className="contactBtn" to="#contact">Contact me</Link>

        <div className="Logos">
          <img src={require('../images/javascript.png')} width="80"/>
          <img src={require('../images/css.png')} width="80"/>
          <img src={require('../images/nodejslogo.png')} width="80"/>
          <img src={require('../images/react.png')} width="80"/>
          <img src={require('../images/pythondjango.png')} width="80"/>
        </div>

        <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="white">
            <animate 
              repeatCount="indefinite"
              fill="freeze"
              attributeName="d"
              dur="10s"
              values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
              
              M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

              M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

              M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
              "
            />
          </path>
        </svg>
      </div>
    </div>
    <div id="projects" className="cards">
      <h1>Projects</h1>
        <div className="cardGroup">
          <Card 
            title="POS System"
            text="Using: React, Django"
            image={require('../images/background.jpg')} 
          />
          <Card 
            title="Learning Center"
            text="Using: React, Node.js"
            image={require('../images/background.jpg')} 
          />
          <Card 
            title="Entertainment Room"
            text="Using: HanddleBar, Node.js"
            image={require('../images/background.jpg')} 
          />
          <Card 
            title="BlackJack Game"
            text="Using: Javascript, jQuery"
            image={require('../images/background.jpg')} 
          />
        </div>
    </div>
    <div id="about" className="About">
      <div className="AboutGroup">
        <h1>About Me</h1>
        <video className="video" muted autoPlay loop>
          <source src="https://www.videvo.net/videvo_files/converted/2018_03/preview/180226_A_03.mp424222.webm"/>
        </video>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam sunt expedita neque facilis ad necessitatibus deleniti a accusamus officia ullam magni excepturi, corporis qui, vitae animi quaerat, aliquid est in.</p>
        <h1>Skills</h1>
        <div className="cardGroup">
          <Container 
            title="Languages"
            text="JavaScript"
            text1="Python"
            image={require('../images/paperBackground.jpg')} 
          />
          <Container
            title="Frameworks"
            text="React"
            text1="Node.js"
            text2="Django"
            image={require('../images/paperBackground.jpg')} 
          />
          <Container
            title="Libraries"
            text="Semantic-React-UI"
            text1="jQuery"
            text2="BootStrap4"
            image={require('../images/paperBackground.jpg')} 
          />
          <Container 
            title="Database"
            text="MongoDB"
            text1="PostgreSQL"
            image={require('../images/paperBackground.jpg')} 
          />
        </div>
      </div>
    </div>
    <div id="contact" className="Contact">
      <div className="ContactGroup">
        <h1>Contacts</h1>
        <p>I'm happy to hear from you, regardless whether you are interested in my skills or suggestions to improve my projects.
          Please contact me.</p>
        <a className="emailBtn" href="mailto:duyl.nguyen.ga@gmail.com">
          <img className="sendMail" src={require('../images/send-email1.jpeg')}/>
          E-Mail
        </a>
        <p>duyl.nguyen.ga@gmail.com</p>
        <div className="boxGroup">
        <Wrapper 
          image={require('../images/github-logo.png')} 
          text="GitHub"
        />
        <Wrapper 
          image={require('../images/linkedin-logo.png')} 
          text="LinkedIn"
        />
        <Wrapper 
          image={require('../images/twitter-logo.png')} 
          text="Twitter"
        />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
