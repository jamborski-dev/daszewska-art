import { createGlobalStyle } from 'styled-components'
import pallete from '../../utils/palette'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Ruthie&display=swap');
  
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: ${pallete.black};
    height: 100%;
  }

  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }
`

export default GlobalStyles