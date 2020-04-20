import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ul>
      {data.allNodeObra.nodes.map(({ drupal_internal__nid, title }) => (
        <Link key={drupal_internal__nid} to={`/obra/${drupal_internal__nid}`}>
          <li>{title}</li>
        </Link>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allNodeObra(filter: { status: { eq: true } }) {
      nodes {
        drupal_internal__nid
        title
      }
    }
  }
`
