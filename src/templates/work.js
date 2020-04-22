import React from "react"
import ReactHtmlParser from 'react-html-parser';
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import noimage from "../images/noimage.png"

const WorkLink = (work, children, className) => (
  <a target="_blank" rel="noopener noreferrer" class={className ? className : null} href={work.field_link.uri}>{children}</a>
)

const TranslateCategory = (category) => {
  switch (category) {
    case `literature`:
      return `Llibres`
    case `cinema`:
      return `Pel·lícules`
    case `music`:
      return `Música`
    case `games`:
      return `Jocs`
    default:
      return null
  }
}

const BuildAuthorship = (work) => {
  const authorLink = work.field_author_link
  if (authorLink === null) {
    return work.field_author
  }
  return (
    <a target="_blank" rel="noopener noreferrer" href={authorLink.uri}>{work.field_author}</a>
  )
}

const WorkTemplate = ({ data }) => {
  const work = data.work
  const image = work.field_image_link

  return (<Layout>
    <SEO title={work.title} />
    <Row>
      <Col md={{span: 5}} className="offset-2">
        <h1>{work.title}</h1>
        <dl>
          <dt>Autoria</dt>
          <dd>{BuildAuthorship(work)}</dd>
          <dt>Categoria</dt>
          <dd>{TranslateCategory(work.field_category)}</dd>
          <dt>Paraules clau</dt>
          <dd>{work.field_keywords}</dd>
          <dt>Descripció</dt>
          <dd>{ReactHtmlParser(work.body.processed)}</dd>
          <dt>Enllaç</dt>
          <dd>{WorkLink(work, "Accedeix-hi", "btn btn-secondary")}</dd>
        </dl>
      </Col>
      <Col md={{span: 3}}>
        {WorkLink(work, <img class="img-fluid" alt={work.title} src={image === null ? noimage : image.uri} />)}
      </Col>
    </Row>
  </Layout>)
}

export default WorkTemplate

export const query = graphql`
  query($id: Int!) {
    work: nodeObra(drupal_internal__nid: { eq: $id }) {
      title
      body {
        processed
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
