import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Header from '../components/header'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {

} from './index.module.css'
import Img from 'gatsby-image'


const IndexPage = () => {
  return (
    <div>
      <Header page=""/>
      <Row>
        <Col xs={12} md={6}>

        </Col>
        <Col xs={12} md={6}>

        </Col>
      </Row>
    </div>
  )
}

export default IndexPage
