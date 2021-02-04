import React from "react";
import { graphql } from "gatsby";

import Img from "gatsby-image";
import Layout from '../components/Layout'
import { ImageContainer } from "./galleryElements";

export default function Work({ data }) {
  console.log(data)

  return (
    <Layout>
      <ImageContainer>
        <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
      </ImageContainer>
    </Layout>
  );
}

export const pageQuery = graphql`
  query image($slug: String!) {
    # file {
    #   childImageSharp {
    #     fluid(maxWidth: 500) {
    #       ...GatsbyImageSharpFluid
    #     }
    #   }
    # }
    allFile(filter: {fields: {slug: {eq: $slug}}}) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
  }
`;
