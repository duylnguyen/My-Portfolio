import React from "react"

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
          <source src="https://static.videezy.com/system/resources/previews/000/011/021/original/Looping_Black_Triangular_Background_-_Enchanted_Media.mp4"/>
        </video>

        <div className= "logo">
          <img src={require('../images/duy1.jpg')} alt="PersonalImage"/>
        </div>

        <div className="intro">
          <h1>Hello! I'm Duy Nguyen</h1>
          <p>Full-stack developer living in Atlanta</p>
        </div>
        
      
        <div className="Logos">
          <img src={require('../images/javascript.png')} width="80" alt="icon"/>
          <img src={require('../images/css.png')} width="80" alt="icon"/>
          <img src={require('../images/nodejslogo.png')} width="80" alt="icon"/>
          <img src={require('../images/react.png')} width="80" alt="icon"/>
          <img src={require('../images/pythondjango.png')} width="80" alt="icon"/>
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
            src='https://github.com/duylnguyen/Project4-POS-System' 
            title="POS System"
            text="Using: React, Django"
            image={require('../images/background.jpg')}
            host='https://pos-project4.herokuapp.com/' 
          />
          <Card
            src='https://github.com/duylnguyen/Project3-Fundamental-Learning' 
            title="Learning Center"
            text="Using: React, Node.js"
            image={require('../images/background.jpg')}
            host='https://fundamental-learning.herokuapp.com/' 
          />
          <Card
            src='https://github.com/duylnguyen/Project2-Entertainment-Room-App' 
            title="Entertainment Room"
            text="Using: HanddleBar, Node.js"
            image={require('../images/background.jpg')}
            host='https://lit-chamber-33132.herokuapp.com/media' 
          />
          <Card
            src='https://github.com/duylnguyen/Project1-Blackjack-Game' 
            title="BlackJack Game"
            text="Using: Javascript, jQuery"
            image={require('../images/background.jpg')}
            host='https://blackjack-game-building.netlify.com/' 
          />
        </div>
    </div>
    <div id="about" className="About">
      <div className="AboutGroup">
        <h1>About</h1>
        <img src={require('../images/CodingBackground.png')} alt="background"/>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam sunt expedita neque facilis ad necessitatibus deleniti a accusamus officia ullam magni excepturi, corporis qui, vitae animi quaerat, aliquid est in.</p>
        <h1>Skills</h1>

        <div className="cardGroup">
          <Container 
            title="Languages"
            text="JavaScript"
            text1="Python"
          />
          <Container
            title="Frameworks"
            text="React"
            text1="Node.js"
            text2="Django"
          />
          <Container
            title="Libraries"
            text="Semantic-React-UI"
            text1="jQuery"
            text2="BootStrap4"
          />
          <Container 
            title="Database"
            text="MongoDB"
            text1="PostgreSQL"
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
          <img className="sendMail" src={require('../images/send-email1.jpeg')} alt="email-icon"/>
          E-Mail
        </a>
        <p>duyl.nguyen.ga@gmail.com</p>
        <div className="boxGroup">
        <Wrapper
          src='https://github.com/duylnguyen'
          image={require('../images/github-logo.png')} 
          text="GitHub"
        />
        <Wrapper
          src='https://www.linkedin.com/in/duy-le-nguyen/'
          image={require('../images/linkedin-logo.png')} 
          text="LinkedIn"
        />
        <Wrapper
          src='https://twitter.com/duynguyenga' 
          image={require('../images/twitter-logo.png')} 
          text="Twitter"
        />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
