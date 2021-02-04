import styled from 'styled-components'
import { Link } from 'gatsby'
import palette from '../../utils/palette'

export const AlbumContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;

`

export const Card = styled.div`
  background-image: ${({ image }) => image 
    ? `url(${image})`
    : 'none'
  };
  background-size: cover;
  position: relative;
  width: calc(33% - 1.5rem);
  height: 300px;

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
`

export const CardTitle = styled.div`
  font-size: 4rem;
  font-family: 'Ruthie', serif;
  z-index: 200;
`