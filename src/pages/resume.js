import * as React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import downloadFile from '../downloads/resume.pdf'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { resume } from './resume.module.css'


const ResumePage = ({ data }) => {
  return (
    <Layout pageTitle="Resume | " page="resume">
      <Row style={{ textAlign: 'center' }}>
        <Col xs={12} md={12} className={resume}>
          <Img fluid={data.resumeImage.childImageSharp.fluid}/>
        </Col>
        <Col xs={12} md={12}>
          <div style={{ marginTop: '1rem' }}>
            <a href={downloadFile} download="resume" style={{ fontDecoration: 'none' }}>
              <Button variant="warning">
                <strong>Download</strong>
              </Button>{' '}
            </a>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export const query = graphql`
  query {
    resumeImage: file(relativePath: { eq: "resume.png" }) {
      childImageSharp {
        fluid(maxWidth: 612, maxHeight: 792, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ResumePage
