import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import { projectStyle  } from './{mdx.slug}.module.css'


const ProjectDetail = ({ data }) => {
  return (
    <Layout pageTitle="Disposisi | ">
      <div className={projectStyle }>
        <MDXRenderer >
             {data.mdx.body}
        </MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      body
    }
  }
`

export default ProjectDetail
