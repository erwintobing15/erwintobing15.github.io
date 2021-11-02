import * as React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from 'gatsby-image'
import {
  story,
  journey
} from './about.module.css'

const AboutPage = ({ data }) => {
  return (
    <Layout pageTitle="About | ">
      <Row>
        <Col xs={12} md={4}>
          <Img fluid={data.profileImage.childImageSharp.fluid} />
        </Col>
        <Col xs={12} md={8} className={story}>
          <h3>Hello, I'm Erwin</h3>
          <br />
          <p >
            I’m a fresh graduate from Universitas Komputer Indonesia majoring in computer science. During my time at university I learned most of the computer science fundamentals like algorithm and data structure, operating system, and networking.
            <br /><br />
            In the past two years, I spent most of my time learning web development (mostly backend stuff), android development, and machine learning. After a while, I realized I can bring them together and build something more powerful. I believe machine learning can bring web and android apps to the next level.
            <br /><br />
            Aside from software development, I am interest in football, listening to music, playing Dota 2, and reading manga.

            <br /><br /><br />
            <a href="mailto:erwintobing15@gmail.com" style={{textDecoration: 'none' }}>erwintobing15@gmail.com</a>
          </p>
        </Col>
      </Row>
      <hr style={{ marginTop: '3rem' }}/>
      <div className={journey}>
        <h3>My Learning Journey So Far</h3>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    profileImage: file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fluid(maxWidth: 440, maxHeight: 440, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
