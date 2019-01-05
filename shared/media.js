import { css } from 'styled-components'

const sizes = {
  xlDesktop: 1400,
  desktop: 1200,
  xlTablet: 1000,
  tablet: 800,
  phone: 600,
  sPhone: 450
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})

export default media
