import styled from 'styled-components'

export const ImageGrid = styled.div`
    display: grid;
    grid-auto-rows: auto;
    grid-gap: 1rem;

    grid-template-columns: repeat(4, 1fr);

    @media screen and (max-width: 1300px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }


    & > a > .gatsby-image-wrapper {
      width: auto;
      max-height: 200px;
      height: 100%;
      border-radius: 5px;
      overflow: hidden;
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
  height: 100%;
  width: auto;
  overflow: hidden;
`