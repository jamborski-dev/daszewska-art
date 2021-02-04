import styled from 'styled-components'
import palette from '../../utils/palette'

export const TopbarContainer = styled.div`
  background: ${palette.black};
  color: ${palette.white};
  text-align: center;
  padding: 1rem 0;
  position: relative;
`

export const Logo = styled.div`
  font-family: 'Ruthie';
  font-size: 3rem;
  display: block;
  width: 100%;
  text-align: center;
  padding: 0;
  text-decoration: none;
  color: ${palette.white};
  letter-spacing: .4rem;
`

export const Subtext = styled.div`
  font-size: .7rem;
  text-transform: uppercase;
  letter-spacing: .3rem;
  margin-right: 4.5rem;
`

export const Socials = styled.div`
  display: flex;
  position: absolute;
  right: 3rem;
  top: 2.4rem;
`
