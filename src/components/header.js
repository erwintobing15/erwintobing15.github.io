import React, { useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  navbar,
  navCollapse,
  brand,
  brandName,
  menu
} from './header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
  faGooglePlay
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"


export default function Header({page}) {

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light" fixed="top" className={navbar}>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Navbar.Brand className={brand}>
          <Img fixed={data.file.childImageSharp.fixed} />
          {' '}
          <span className={brandName}>Erwin<br/>Tobing</span>
        </Navbar.Brand>
      </Link>
      <div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      </div>
      <Navbar.Collapse id="responsive-navbar-nav" className={navCollapse}>
        <Nav className="me-auto">
        </Nav>
        <Nav className="me-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/project' className="nav-link" className={menu}
                style={{color : (page == 'project') ? "#50CB93" : "" }}>Project</Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-link" className={menu}
                style={{color : (page == 'about') ? "#50CB93" : "" }}>About</Link>
            </li>
            <li className="nav-item">
              <Link to='/resume' className="nav-link" className={menu}
                style={{color : (page == 'resume') ? "#50CB93" : "" }}>Resume</Link>
            </li>
          </ul>
        </Nav>

        <Nav>
          <Nav.Link href="https://linkedin.com/in/erwin-tobing-04a0b119b">
            <FontAwesomeIcon icon={faLinkedin} size="lg" color="#0077b5"/>
          </Nav.Link>
          <Nav.Link href="https://github.com/erwintobing15">
            <FontAwesomeIcon icon={faGithub} size="lg" color="#171515"/>
          </Nav.Link>
          <Nav.Link href="https://play.google.com/store/apps/dev?id=6806142270433234239">
            <FontAwesomeIcon icon={faGooglePlay} size="lg" color="black"/>
          </Nav.Link>
          <Nav.Link href="mailto:erwintobing15@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} size="lg" color="black"/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
