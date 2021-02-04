import React from 'react'
import { graphql, Link } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/Layout'
import { ImageGrid } from './galleryElements'
import { CardLink } from '../components/Album/AlbumElements'

export default function Album({ data }) {
  const images = data.allFile.edges.map((image, i) => 
    <Link key={i} to={image.node.fields.slug}>
      <Img fluid={image.node.childrenImageSharp[0].fluid} />
    </Link>
  )

  return (
    <Layout>
      <ImageGrid>
        { images }
      </ImageGrid>
    </Layout>
  );
}

export const pageQuery = graphql`
  query albumImages($slug: String!) {
    allFile(filter: { relativeDirectory: {eq: $slug} }){
      edges {
        node {
          name
          relativeDirectory
          fields {
            slug
          }
          childrenImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
