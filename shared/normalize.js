import { css } from 'styled-components'

export default css`
  /* reset button styles */
  button,
  input[type='submit'],
  input[type='reset'] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    user-select: none;
  }

  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
  button,
  hr,
  input {
    overflow: visible;
  }
  progress,
  sub,
  sup {
    vertical-align: baseline;
  }
  [type='checkbox'],
  [type='radio'],
  legend {
    box-sizing: border-box;
    padding: 0;
  }
  html {
    line-height: 1.15;
    text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  details,
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box;
    height: 0;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace;
    font-size: 1em;
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  select {
    text-transform: none;
  }
  [type='button'],
  [type='reset'],
  [type='submit'],
  button {
    appearance: button;
  }
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: ButtonText dotted 1px;
  }
  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }
  legend {
    color: inherit;
    display: table;
    max-width: 100%;
    white-space: normal;
  }
  textarea {
    overflow: auto;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-decoration {
    appearance: none;
  }
  ::-webkit-file-upload-button {
    appearance: button;
    font: inherit;
  }
  summary {
    display: list-item;
  }
  [hidden],
  template {
    display: none;
  }
`