import * as React from 'react';
import { Link } from 'gatsby'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { StaticImage } from 'gatsby-plugin-image'
import { navbar, brand, brandName, menu } from './header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
  faGooglePlay
} from "@fortawesome/free-brands-svg-icons"


export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light" fixed="top" className={navbar}>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Navbar.Brand className={brand}>
          <StaticImage
            src="../images/icon.png"
            width={50}
            height={50}
            alt="Erwin Tobing"
          />{' '}
          <span className={brandName}>Erwin<br/>Tobing</span>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav className="me-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/' className="nav-link" className={menu}>Project</Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-link" className={menu}>About</Link>
            </li>
            <li className="nav-item">
              <Link to='/resume' className="nav-link" className={menu}>Resume</Link>
            </li>
          </ul>
        </Nav>
        <Nav className="d-flex justify-content-center">
          <Nav.Link href="https://linkedin.com/in/erwin-tobing-04a0b119b">
            <FontAwesomeIcon icon={faLinkedin} size="lg" color="#0077b5"/>
          </Nav.Link>
          <Nav.Link href="https://github.com/erwintobing15">
            <FontAwesomeIcon icon={faGithub} size="lg" color="#171515"/>
          </Nav.Link>
          <Nav.Link href="https://play.google.com/store/apps/dev?id=6806142270433234239">
            <FontAwesomeIcon icon={faGooglePlay} size="lg" color="black"/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
