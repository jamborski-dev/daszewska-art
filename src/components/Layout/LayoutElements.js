import styled from 'styled-components'
import palette from '../../utils/palette'

export const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
`

export const Content = styled.main`
  padding: 3rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

export const Footer = styled.footer`
  text-align: center;
  padding: 2rem 1rem;
  background: ${palette.black};
  color: ${palette.white};
  font-size: 0.6rem;
`