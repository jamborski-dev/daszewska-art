import React from 'react'
import { faFacebookMessenger, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { TopbarContainer, Logo, Headline, Socials, Header, IconLink, Icon } from './TopbarElements'

const Topbar = () => {
  return (
    <TopbarContainer>
      <Header>
        <a href="/">
          <Logo>
            Zuzanna Daszewska
          </Logo>
        </a>
        <Headline>
          <span>
            Art Portfolio
          </span>
          <Socials>
            <IconLink href="#">
              <Icon icon={faFacebookMessenger} />
            </IconLink>
            <IconLink href="#">
              <Icon icon={faInstagram} />
            </IconLink>
          </Socials>
        </Headline>
      </Header>
    </TopbarContainer>
  )
}

export default Topbar
