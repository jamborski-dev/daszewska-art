import React from 'react'
import GlobalStyles from './GlobalStyles'
import Topbar from '../Topbar'
import { AppContainer, Content, Footer } from './LayoutElements'

const Layout = ({ children }) => {
  return (
    <>
      {/*  */}
      <GlobalStyles />
      {/*  */}

      <AppContainer>
        <Topbar />
        <Content>
          {children}
        </Content>
        <Footer>
          <span>
            Copyrights &copy; Daszewska-Art 2021. All rights reserved.
          </span>
        </Footer>
      </AppContainer>
    </>
  )
}

export default Layout
