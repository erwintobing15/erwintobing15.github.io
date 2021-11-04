import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import {
  row,
  col,
  right,
  projectImage,
  projectImageDesc
} from './index.module.css'
import Img from 'gatsby-image'


const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="">
      <Row className={row}>
        <Col xs={12} md={6} className={col}>
          <Card>
            <div className={projectImage}>
              <Img fluid={data.dotaImage.childImageSharp.fluid } />
              <div className={projectImageDesc}>
                <h2>Dota2Web</h2>
                <p>Recommendation System | Match Prediction |  Website  <br/> Django | Neural Network | Association Rules</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6} className={col} className={right}>
          <Card>
            <div className={projectImage}>
              <Img fluid={data.daimatusImage.childImageSharp.fluid } />
              <div className={projectImageDesc}>
                <h2>Daimatus</h2>
                <p>Learning Platform | Fullstack Website | PHP Native <br/> HTML | CSS | JS | Bootstrap</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row className={row}>
        <Col xs={12} md={6} className={col}>
          <Card>
            <div className={projectImage}>
              <Img fluid={data.deteksiImage.childImageSharp.fluid } />
              <div className={projectImageDesc}>
                <h2>Deteksi Pantun Puisi</h2>
                <p>Website | Django | Sentiment Analysis | SVM</p>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6} className={col} className={right}>
          <Card>
            <div className={projectImage}>
              <Img fluid={data.analyzerImage.childImageSharp.fluid } />
              <div className={projectImageDesc}>
                <h2>C++ Analyzer</h2>
                <p>Generate tokens from C++ object language <br /> Website | PHP Native | Bootstrap</p>
              </div>
            </div>
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
