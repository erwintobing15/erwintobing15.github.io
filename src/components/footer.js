import * as React from 'react'
import { Link } from 'gatsby'
import {
  footer,
  social
} from './footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
  faGooglePlay
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  return(
    <div className={footer}>
      <p>
        <Link href="mailto:erwintobing15@gmail.com" className={social}>
          <FontAwesomeIcon icon={faEnvelope} size="lg" color="black"/>
        </Link>
        <Link href="https://linkedin.com/in/erwin-tobing-04a0b119b" className={social}>
          <FontAwesomeIcon icon={faLinkedin} size="lg" color="black"/>
        </Link>
        <Link href="https://github.com/erwintobing15" className={social}>
          <FontAwesomeIcon icon={faGithub} size="lg" color="black"/>
        </Link>
        <Link href="https://play.google.com/store/apps/dev?id=6806142270433234239" className={social}>
          <FontAwesomeIcon icon={faGooglePlay} size="lg" color="black"/>
        </Link>
      </p>
      &copy; Erwin Tobing {new Date().getFullYear()}
    </div>
  )
}
