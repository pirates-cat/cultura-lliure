import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ul>
      {data.allNodeObra.nodes.map(work => (
        <Link key={work.id} to={"/" + work.id}>
          <li>{work.title}</li>
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
        id
        title
        body {
          value
        }
        field_image_link {
          uri
        }
        field_link {
          uri
        }
        field_author
        field_author_link {
          uri
        }
        field_category
        field_keywords
      }
    }
  }
`
