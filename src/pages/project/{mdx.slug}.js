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
    mdx(id: {eq: "b5249918-fee1-530c-915f-93bcf12a26e2"}) {
      body
    }
  }
`

export default ProjectDetail
