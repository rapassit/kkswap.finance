import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    /*background: url('https://www.dnnsoftware.com/Portals/0/Images/hero-background-5-3.jpg');
    background-repeat: no-repeat;
    background-size: cover;*/

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
