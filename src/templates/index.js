import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ButtonGroup from "react-bootstrap/ButtonGroup"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import noimage from "../images/noimage.png"

const IndexPage = props => {
  const { pageContext } = props
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <Layout>
      <SEO title="Inici" />
      <Row>
        {props.data.works.nodes.map((node, ix) => {
          const image = node.field_image_link
          var markup = (<Col>
            <Card className="mt-3">
              <Link
                    key={node.drupal_internal__nid}
                    to={`/obres/${node.drupal_internal__nid}`}
              >
                <Card.Img variant="top" src={image === null ? noimage : image.uri} />
              </Link>
              <Card.Body>
                <Card.Title>
                  <Link
                    key={node.drupal_internal__nid}
                    to={`/obres/${node.drupal_internal__nid}`}
                  >
                    {node.title}
                  </Link>
                </Card.Title>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Per {node.field_author}</small>
              </Card.Footer>
            </Card>
          </Col>)
          if ((ix + 1) % 3 === 0) {
            markup = [
              markup,
              <div class="w-100" />,
            ]
          }
          return markup
        })}
      </Row>
      <ButtonGroup size="lg" className="mt-3">
        {previousPagePath ? <Link className="btn btn-primary" to={previousPagePath}>Anterior</Link> : null}
        {nextPagePath ? <Link className="btn btn-primary" to={nextPagePath}>Següent</Link> : null}
      </ButtonGroup>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    works: allNodeObra(
      filter: { status: { eq: true } }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        drupal_internal__nid
        title
        field_image_link {
          uri
        }
        field_author
      }
    }
  }
`
