import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { content } from './layout.module.css'
import Header from './header'
import Footer from './footer'

const Layout = ({ pageTitle, children, page }) => {
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
      <Header page={page}/>
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
