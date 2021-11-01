import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { content } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className={content}>
        <title>{pageTitle}{data.site.siteMetadata.title}</title>
        <main>
          {children}
        </main>
      </div>
    </>
  )
}

export default Layout
