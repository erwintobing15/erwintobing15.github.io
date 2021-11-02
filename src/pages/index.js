import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {
  row,
  col,
  right
} from './index.module.css'
import Img from 'gatsby-image'


const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="">
      <Row className={row}>
        <Col xs={12} md={6} className={col}>
          <Card>
            <Img fluid={data.dotaImage.childImageSharp.fluid } />
          </Card>
        </Col>
        <Col xs={12} md={6} className={col} className={right}>
          <Card>
            <Img fluid={data.daimatusImage.childImageSharp.fluid } />
          </Card>
        </Col>
      </Row>
      <Row className={row}>
        <Col xs={12} md={6} className={col}>
          <Card>
            <Img fluid={data.deteksiImage.childImageSharp.fluid } />
          </Card>
        </Col>
        <Col xs={12} md={6} className={col} className={right}>
          <Card>
            <Img fluid={data.analyzerImage.childImageSharp.fluid } />
          </Card>
        </Col>
      </Row>
    </Layout>
  )
}

export const query = graphql`
  query {
    deteksiImage: file(relativePath: { eq: "deteksi.PNG" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dotaImage: file(
      relativePath: { eq: "dota2web.PNG" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    daimatusImage: file(
      relativePath: { eq: "daimatus.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    analyzerImage: file(
      relativePath: { eq: "analyzer.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
