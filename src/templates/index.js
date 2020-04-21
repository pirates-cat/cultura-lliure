import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = props => {
  const { pageContext } = props;
  const { previousPagePath, nextPagePath } = pageContext;

  return (
    <Layout>
      <SEO title="Home" />
      <ul>
        {props.data.works.nodes.map(node => <li><Link key={node.drupal_internal__nid} to={`/obres/${node.drupal_internal__nid}`}>{node.title}</Link></li>)}
      </ul>
      <div>
        {previousPagePath ? <Link to={previousPagePath}>Previous</Link> : null}
        {nextPagePath ? <Link to={nextPagePath}>Next</Link> : null}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    works: allNodeObra(filter: { status: { eq: true } }, skip: $skip, limit: $limit) {
      nodes {
        drupal_internal__nid
        title
      }
    }
  }
`
