import styled from 'styled-components'
import { Link } from 'gatsby'
import palette from '../../utils/palette'

export const AlbumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: 700px) {
    display: block;
  }
`

export const Card = styled.div`
  background-image: ${({ image }) => image 
    ? `url(${image})`
    : 'none'
  };
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 45vh;

  border-radius: 5px;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    height: 300px;
    margin-bottom: 1rem;
  }

`

export const CardLink = styled(Link)`
  color: ${palette.white};
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CardOverlay = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, 0.8);
  z-index: 150;

  transition: background .15s ease-in;

  &:hover, & > *:hover {
    background: rgba(0, 0, 0, .1);
  }
`

export const CardTitle = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  font-family: 'Ruthie', serif;
  z-index: 200;
  text-align: center;
  padding: 0 .75rem;

  @media screen and (max-width: 700px) {
    font-size: 4rem;
    margin: 0;
  }

  @media screen and (max-width: 370px) {
    font-size: 3rem;
  }
`