import { css } from 'styled-components'
import media from './media'

export default css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;

    /* disable outline for touch devices */
    @media (hover: none) {
      outline: none;
    }
  }

  html {
    font-size: 62.5%;
    font-family: 'Times New Roman', Times, serif;

    ${media.xlDesktop`font-size: 60%;`}
    ${media.desktop`font-size: 57.5%;`}
    ${media.xlTablet`font-size: 55%;`}
    ${media.tablet`font-size: 52.5%;`}
    ${media.phone`font-size: 50%;`}

    scroll-behavior: smooth;
  }

  body {
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grays5ale;
    -ms-font-smoothing: antialiased;

    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => theme.background};
  }
  
  /* 
  ::selection {
    color: ${({ theme }) => theme['blue-2']};
  } */
`
