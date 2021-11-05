import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
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
                <Link to='/'>
                  <Button variant="outline-light">
                    <strong>Detail</strong>
                  </Button>
                </Link>
                {' '}
                <Link to='https://github.com/erwintobing15/dota2web'>
                  <Button variant="outline-light">
                    <strong>Live Demo</strong>
                  </Button>
                </Link>
                {' '}
                <Link to='https://github.com/erwintobing15/dota2web'>
                  <Button variant="outline-light">
                    <strong>Source Code</strong>
                  </Button>
                </Link>
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
                <Link to='/'>
                  <Button variant="outline-light">
                    <strong>Detail</strong>
                  </Button>
                </Link>
                {' '}
                <Link to='https://daimatus.000webhostapp.com/'>
                  <Button variant="outline-light">
                    <strong>Live Demo</strong>
                  </Button>
                </Link>
                {' '}
                <Link to='https://github.com/erwintobing15/daimatus'>
                  <Button variant="outline-light">
                    <strong>Source Code</strong>
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row className={row} style={{ marginTop:'1rem'}}>
        <Col xs={12} md={6} className={col}>
          <Card>
            <div className={projectImage}>
              <Img fluid={data.deteksiImage.childImageSharp.fluid } />
              <div className={projectImageDesc}>
                <h2>Deteksi Pantun Puisi</h2>
                <p>Website | Django | Sentiment Analysis | SVM</p>
                <Link to='/'>
                  <Button variant="outline-light">
                    <strong>Detail</strong>
                  </Button>
                </Link>
                {' '}
                <Link to='https://deteksipantunpuisi.pythonanywhere.com/'>
                  <Button variant="outline-light">
                    <strong>Live Demo</strong>
                  </Button>
                </Link>
                {' '}
                <Link to='https://github.com/erwintobing15/deteksi_pantun_puisi'>
                  <Button variant="outline-light">
                    <strong>Source Code</strong>
                  </Button>
                </Link>
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
                <Link to='/'>
                  <Button variant="outline-light">
                    <strong>Detail</strong>
                  </Button>
                </Link>
                {' '}
                <Link to='https://cppanalyzer.000webhostapp.com/'>
                  <Button variant="outline-light">
                    <strong>Live Demo</strong>
                  </Button>
                </Link>
                {' '}
                <Link to='https://github.com/erwintobing15/cpp-analyzer'>
                  <Button variant="outline-light">
                    <strong>Source Code</strong>
                  </Button>
                </Link>
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
    deteksiImage: file(relativePath: { eq: "deteksi.png" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    dotaImage: file(
      relativePath: { eq: "analyzer.png" }
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
