import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import { projectStyle, listItem } from './{mdx.slug}.module.css'


const ProjectDetail = ({ data }) => {
  return (
    <Layout pageTitle="Project Detail | ">
      <div className={projectStyle }>
        <MDXRenderer >
             {data.mdx.body}
        </MDXRenderer>

        <br /><hr /><br />

        <h4>All Projects</h4>
        <ul >
          <li><Link to='/project/disposisi' className={listItem}>Disposisi</Link></li>
          <li><Link to='/project/dotamagus' className={listItem}>Dotamagus</Link></li>
          <li><Link to='/project/daimatus' className={listItem}>Daimatus</Link></li>
          <li><Link to='/project/analyzer' className={listItem}>C++ Analyzer</Link></li>
          <li><Link to='/project/deteksi' className={listItem}>Deteksi Pantun Puisi</Link></li>
          <li><Link to='/project/ikuliah' className={listItem}>iKuliah</Link></li>
        </ul>
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
