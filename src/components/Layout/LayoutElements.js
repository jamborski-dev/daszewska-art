import styled from 'styled-components'
import palette from '../../utils/palette'

export const AppContainer = styled.div`
  margin: 0;
  padding: 3rem;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;

  @media screen and (max-width: 700px) {
    padding: 1.5rem;
  }
`

export const Content = styled.main`
  width: 100%;
  padding: 3rem 0;

  @media screen and (max-width: 700px) {
    padding: 1.5rem 0;
  }
`

export const Footer = styled.footer`
  background: none;
  color: ${palette.greyText};
  opacity: 0.5;
  font-size: .8rem;
  padding: 2rem 0;
  justify-self: start;
  
  @media screen and (max-width: 700px) {
    text-align: center;
    justify-self: center;
  }
`