import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { AlbumContainer, Card, CardTitle, CardLink, CardOverlay } from './AlbumElements'

const AlbumItem = ({ name, slug }) => {

  const data = useStaticQuery(graphql`
    query images {
      allFile(filter: {relativePath: {glob: "thumbnails/*"}}) {
        edges {
          node {
            name
            relativePath
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  const imageName = slug.replace('/','')
  const image = data.allFile.edges.filter(({ node }) => node.relativePath.includes(imageName))

  const [ node ] = image
 
  const imageSource = node.node.childImageSharp.fluid.src
  // const route = `/${node.node.name}`

  return (
    <Card image={imageSource}>
      <CardLink to={slug}>
        <CardOverlay />
        <CardTitle>
          {name}
        </CardTitle>
      </CardLink>
    </Card>
  )
}

const Album = () => { 
  return (
    <AlbumContainer>
      <AlbumItem name='Digital Art' slug='/digital' />
      <AlbumItem name='Drawing' slug='/drawing' />
      <AlbumItem name='Tattoo' slug='/tattoo' />      
    </AlbumContainer>
  )
}

export default Album
