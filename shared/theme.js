const shared = {
  boxShadow:
    '0 13px 27px -5px rgba(50, 50, 93, 0.25), 0 8px 16px -8px rgba(0, 0, 0, 0.3)',
  boxShadowHover:
    '0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3)'
}

export default {
  light: {
    ...shared,
    color: 'black'
  },
  dark: {
    ...shared,
    color: 'white',
    background: 'black'
  }
}
