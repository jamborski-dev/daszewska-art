import styled from 'styled-components'
import palette from '../../utils/palette'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const TopbarContainer = styled.div`
  background: none;
  color: ${palette.greyText};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: flex-start;
    text-align: center;
  }

`

export const Logo = styled.div`
  font-family: 'Ruthie';
  font-size: 5rem;
  display: block;
  width: 100%;
  padding: 0;
  text-decoration: none;
  color: ${palette.greyText};
  letter-spacing: .4rem;


  @media screen and (max-width: 700px) {
    font-size: 3rem;
    letter-spacing: .2rem;
    line-height: 3rem;
    margin-bottom: 1.5rem;
  }

`

export const Headline = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: .3rem;
  margin-top: 1.5rem;

  @media screen and (max-width: 700px) {
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-align: center;
    flex-direction: column;
  }
`

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: nowrap;
  align-self: center;

  @media screen and (max-width: 700px) {
    align-self: center;
  }
`

export const Icon = styled(FontAwesomeIcon)`
  color: ${palette.black};
  font-size: 1.2rem;

  &:hover {
    color: #ce9d10;
  }
`

export const IconLink = styled.a`

`

export const Header = styled.header`
  width: 100%;
`