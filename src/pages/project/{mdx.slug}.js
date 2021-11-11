import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const pageStyles = {
  paddingRight: '15%',
  paddingLeft: '15%'
}

const ProjectDetail = ({ data }) => {
  return (
    <Layout pageTitle="Disposisi | ">
      <div style={pageStyles}>
        <MDXRenderer >
             {data.mdx.body}
        </MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    mdx(id: {eq: "24af3c2f-b0bc-51f4-aaad-7574742400c4"}) {
      body
    }
  }
`

export default ProjectDetail
