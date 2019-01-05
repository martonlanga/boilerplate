import React from 'react'
import App, { Container } from 'next/app'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import { Provider, Consumer } from '../components/Context'
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
          <Consumer>
            {({ theme: color, updateState }) => (
              <ThemeProvider theme={theme[color]}>
                <>
                  <GlobalStyle />
                  <Page>
                    <Nav
                      changeTheme={() =>
                        updateState(({ theme: currentColor }) =>
                          currentColor === 'dark'
                            ? { theme: 'light' }
                            : { theme: 'dark' }
                        )
                      }
                    />
                    <Component {...pageProps} />
                    <Footer />
                  </Page>
                </>
              </ThemeProvider>
            )}
          </Consumer>
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
