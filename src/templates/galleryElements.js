import styled from 'styled-components'

export const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    grid-gap: 2rem;

    & > a > .gatsby-image-wrapper {
      max-height: 650px;
    }

    & > a > * {
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);
    }

    & > a > :hover {
      filter: invert(80%);
      transition: all ease 0.1s;
      cursor: pointer;
    }
`

export const ImageContainer = styled.div`
  height: calc(90vh - 6rem);
  width: auto;

  & > * {
    height: 100%;
  }

  & img {
    object-fit: contain !important;
  }
`