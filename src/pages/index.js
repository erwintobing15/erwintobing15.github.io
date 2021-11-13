import * as React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import {
  container,
  content,
  head,
  parag
} from './index.module.css'
import FadeIn from 'react-fade-in'


const IndexPage = () => {
  return (
    <>
      <title>Erwin Tobing</title>
      <Header page=""/>
      <Container fluid='true' className={container}>
        <FadeIn delay='100'>
          <div className={content}>
            <h1 className={head}>Hi, I'm Erwin.<br/>A Software Developer.</h1>
          </div>
          <p className={parag}>I'm a software enthusiast that like to explore and trying out new things.</p>
          <p>
            <Link to='/about'>
              <Button variant="outline-light" size="lg">
                <strong>More</strong>
              </Button>
            </Link>{' '}
            <Link to='/project'>
              <Button variant="outline-light" size="lg">
                <strong>Project</strong>
              </Button>
            </Link>
          </p>
        </FadeIn>
      </Container>
    </>
  )
}

export default IndexPage
