import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const WorkTemplate = ({ data }) => <Layout>
  <h1>{data.work.title}</h1>
</Layout>

export default WorkTemplate

export const query = graphql`
  query($id: Int!) {
    work: nodeObra(drupal_internal__nid: { eq: $id }) {
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
`
