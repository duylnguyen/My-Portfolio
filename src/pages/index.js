import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Footer from '../components/footer'
import Header from '../components/header'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <h1>Hello!</h1>
    <h2>I'm Duy, a full-stack developer living in Atlanta.</h2>
    <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    <Footer />
  </Layout>
)

export default IndexPage
