import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { TopbarContainer, Logo, Subtext, Socials } from './TopbarElements'

const Icon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 1.4rem;

  &:hover {
    color: #ce9d10;
  }
`

const IconLink = styled.a`
  padding-left: 1.3rem;
`

const Topbar = () => {
  return (
    <TopbarContainer>
      <Logo>
        Zuzanna Daszewska
      </Logo>
      <Subtext>
        Art Portfolio
      </Subtext>
      <Socials>
        <IconLink href="#">
          <Icon icon={faFacebookMessenger} />
        </IconLink>
        <IconLink href="#">
          <Icon icon={faInstagram} />
        </IconLink>
      </Socials>
    </TopbarContainer>
  )
}

export default Topbar
