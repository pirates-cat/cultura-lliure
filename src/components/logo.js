import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = (props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt={props.alt} />
}

export default Logo
