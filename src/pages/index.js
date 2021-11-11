import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {
  right,
  projectImage,
  projectImageDesc
} from './index.module.css'
import Img from 'gatsby-image'


const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="" page="project">
      <Row>
        <Col xs={12} md={6}>
          <Card>
            <div className={projectImage}>
              <Img fluid={data.disposisiImage.childImageSharp.fluid } />
              <div className={projectImageDesc}>
                <h2>Disposisi</h2>
                <p>Saving Letters | Mobile  <br/> Java | Android Studio | MySQL</p>
                <Link to='/project/disposisi'>
                  <Button variant="outline-light">
                    <strong>Detail</strong>
                  </Button>
                </Link>
                {' '}
                <Link to='https://github.com/erwintobing15/Disposisi'>
                  <Button variant="outline-light">
                    <strong>Source Code</strong>
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={12} md={6} className={right}>
          <Card>
            <div className={projectImage}>
              <Img fluid={data.dotamagusImage.childImageSharp.fluid } />
              <div className={projectImageDesc}>
                <h2>Dotamagus</h2>
                <p>Website | Recommendation System | Match Prediction <br/> Machine Learning | Association Rules | Django | Python</p>
                <Link to='/'>
                  <Button variant="outline-light">
                    <strong>Detail</strong>
                  </Button>
                </Link>
                {' '}
                <Link to='https://dotamagos.pythonanywhere.com/'>
                  <Button variant="outline-light">
                    <strong>Live Demo</strong>
                  </Button>
                </Link>
                {' '}
                <Link to='https://github.com/erwintobing15/dotamagus'>
                  <Button variant="outline-light">
                    <strong>Source Code</strong>
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop:'1rem'}}>
        <Col xs={12} md={6}>
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
        <Col xs={12} md={6} className={right}>
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
      <Row style={{ marginTop:'1rem'}}>
        <Col xs={12} md={6}>
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
        <Col xs={12} md={6} className={right}>
          <Card>
            <div className={projectImage}>
              <Img fluid={data.ikuliahImage.childImageSharp.fluid } />
              <div className={projectImageDesc}>
                <h2>iKuliah</h2>
                <p>Mobile | Saving Grades, Credits, and Calculate GPA <br /> Java | Android Studio | SQLite</p>
                <Link to='/'>
                  <Button variant="outline-light">
                    <strong>Detail</strong>
                  </Button>
                </Link>
                {' '}
                <Link to='https://play.google.com/store/apps/details?id=com.chupakubera.ipkuliah'>
                  <Button variant="outline-light">
                    <strong>Live Demo</strong>
                  </Button>
                </Link>
                {' '}
                <Link to='https://github.com/erwintobing15/iKuliah'>
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
    dotamagusImage: file(
      relativePath: { eq: "dotamagus.png" }
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
    disposisiImage: file(
      relativePath: { eq: "disposisi.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ikuliahImage: file(
      relativePath: { eq: "ikuliah.png" }
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
