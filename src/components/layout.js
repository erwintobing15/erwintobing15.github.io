import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { content } from './layout.module.css'
import Header from './header'
import Footer from './footer'

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
      <Header />
      <div className={content}>
        <title>{pageTitle}{data.site.siteMetadata.title}</title>
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
