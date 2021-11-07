import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from 'gatsby-image'
import {
  story,
  journey
} from './about.module.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHtml5,
  faCss3,
  faJs,
  faPhp,
  faPython,
  faBootstrap,
  faReact,
  faNode,
  faEnvira,
  faJava,
  faAndroid,
  faGitAlt,
  faGithub,
  faGoogle
} from "@fortawesome/free-brands-svg-icons"
import {
  faCode,
  faBrain,
  faDatabase,
  faFire
} from "@fortawesome/free-solid-svg-icons"


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
            I’m a fresh graduate from Universitas Komputer Indonesia majoring in computer science. I like to explore and try new things from language, framework, concepts, tools, and many others. I especially really love it when I figure out how things work while learning.
            <br /><br />
            I spent most of my time learning web development, android, or machine learning. I've worked on several projects like a website, android app, or machine learning model. Recently I tried to combine machine learning with web or android app.  I think it's pretty awesome to build a web or android app powered by machine learning.
            <br /><br />
            Aside from software development, I am interested in football, watching youtube, listening to music, playing Dota 2, and reading comics.
            <br /><br />
            Reach out to me <a href="mailto:erwintobing15@gmail.com" style={{textDecoration: 'none' }}>erwintobing15@gmail.com</a>
          </p>
        </Col>
      </Row>
      <hr style={{ marginTop: '3rem' }}/>
      <div className={journey}>
        <h3>My Journey So Far</h3>
        <br />
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" style={{ padding: '0.5rem'}}>
                  <FontAwesomeIcon icon={faCode} size='lg'/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <h5>
                  Pascal & C++
                </h5>
                <p>The languages I used to learn algorithm and data structure</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" style={{ padding: '0.5rem'}}>
                  <FontAwesomeIcon icon={faHtml5} size='lg' color="#CD5C5C"/>
                  <FontAwesomeIcon icon={faCss3} size='lg' color="#264de4"/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <h5>
                  HTML & CSS
                </h5>
                <p>I learned static web and try to host a website online</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" style={{ padding: '0.5rem'}}>
                  <FontAwesomeIcon icon={faJs} size='lg' color="#f0db4f"/>
                  <FontAwesomeIcon icon={faPhp} size='lg' color='#232531'/>
                  <FontAwesomeIcon icon={faDatabase} size='lg' color='#8993be'/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <h5>
                  JS & PHP & MySQL
                </h5>
                <p>Move on to learn dynamic website and work with database creating a CRUD application</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" style={{ padding: '0.5rem'}}>
                  <FontAwesomeIcon icon={faPython} size='lg' color='#4584b6'/>
                  <FontAwesomeIcon icon={faBrain} size='lg' color='#'/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <h5>
                  Python & Machine Learning
                </h5>
                <p>Start learning because I'm curious what machine learning is</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" style={{ padding: '0.5rem'}}>
                  <FontAwesomeIcon icon={faFire} size='lg' color="#DD4814"/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <h5>
                  Codeigniter
                </h5>
                <p>The first web framework I used while learning backend stuff like JSON, API, and web service</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" style={{ padding: '0.5rem'}}>
                  <FontAwesomeIcon icon={faGitAlt} size='lg' color='#f34f29'/>
                  <FontAwesomeIcon icon={faGithub} size='lg' color='#171515 '/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <h5>
                  Git & Github
                </h5>
                <p>Get to understand version control to manage my code</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" style={{ padding: '0.5rem'}}>
                  <FontAwesomeIcon icon={faBootstrap} size='lg' color='#563d7c'/>
                  <FontAwesomeIcon icon={faReact} size='lg' color='#242443'/>
                  <FontAwesomeIcon icon={faNode} size='lg' color='#3c873a'/>
                  <FontAwesomeIcon icon={faEnvira} size='lg' color='#6cc24a'/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <h5>
                  MERN
                </h5>
                <p>Get deeper and try to learn MERN stack with technologies such as Bootstrap, React, Node js, Express js, and MongoDB</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" style={{ padding: '0.5rem'}}>
                  <FontAwesomeIcon icon={faJava} size='lg' color="#5382a1"/>
                  <FontAwesomeIcon icon={faAndroid} size='lg' color="#a4c639 "/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <h5>
                  Android Native & Java
                </h5>
                <p>I used Android Native with Java to complete my volunteer project</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" style={{ padding: '0.5rem'}}>
                  <FontAwesomeIcon icon={faPython} size='lg' color='#092e20'/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <h5>
                  Django
                </h5>
                <p>Aside from machine learning, I discovered python could be used for web backend frameworks like Django</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" style={{ padding: '0.5rem'}}>
                  <FontAwesomeIcon icon={faDatabase} size='lg' color="#5382a1"/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <h5>
                  Data Mining
                </h5>
                <p>I learned association rules from data mining to help complete my final year project</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" style={{ padding: '0.5rem'}}>
                  <FontAwesomeIcon icon={faGoogle} size='lg' color='#663399'/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <h5>
                  GatsbyJS
                </h5>
                <p>Trying out gatsby, a static web framework, to make this portfolio web</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
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
