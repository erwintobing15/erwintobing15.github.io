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
} from "@fortawesome/free-brands-svg-icons"
import {
  faCode,
  faBrain
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
            I’m a fresh graduate from Universitas Komputer Indonesia majoring in computer science. I like to explore and try new things from language, framework, concept, tools, and many others. I especially love when figuring out how thing work while learning.
            <br /><br />
            In the past two years, I spent most of my time learning web development, android, and machine learning. I've built several projects including websites, android apps, or machine learning models. Recently I tried to combine machine learning with web or android app.  I think it's pretty awesome to build web or android app powered by machine learning.
            <br /><br />
            Aside from software development, I am interest in football, listening to music, playing Dota 2, and reading manga.
            <br /><br />
            Reach out to me <a href="mailto:erwintobing15@gmail.com" style={{textDecoration: 'none' }}>erwintobing15@gmail.com</a>
          </p>
        </Col>
      </Row>
      <hr style={{ marginTop: '3rem' }}/>
      <div className={journey}>
        <h3>My Learning Journey So Far</h3>

          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                9:30 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <FontAwesomeIcon icon={faCode} size='lg'/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <h5>
                  C++
                </h5>
                <p>I remember C++ is the first language i use to learn algorithm</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                10:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <FontAwesomeIcon icon={faHtml5} size='lg'/>
                  <FontAwesomeIcon icon={faCss3} size='lg'/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <h5>
                  HTML & CSS
                </h5>
                <p>Learning static web following my university curriculum</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <FontAwesomeIcon icon={faJs} size='lg'/>
                  <FontAwesomeIcon icon={faPhp} size='lg'/>
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <h5>
                  JS & PHP
                </h5>
                <p>Learning dinamic website with JS and my first server side language with PHP</p>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary">
                  <FontAwesomeIcon icon={faPython} size='lg'/>
                  <FontAwesomeIcon icon={faBrain} size='lg'/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <h5>
                  Python & Machine Learning
                </h5>
                <p>Start learning python because i'm curious about machine learning</p>
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
