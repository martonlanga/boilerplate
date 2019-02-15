import React from 'react'
import App, { Container } from 'next/app'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import { Provider } from '../components/Context'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import global from '../shared/global'
import normalize from '../shared/normalize'
import theme from '../shared/theme'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Provider>
          <ThemeProvider theme={theme}>
            <>
              <GlobalStyle />
              <Page>
                <Nav />
                <Component {...pageProps} />
                <Footer />
              </Page>
            </>
          </ThemeProvider>
        </Provider>
      </Container>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${global}
`

const Page = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
`
