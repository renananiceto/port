import * as React from "react"
import { createGlobalStyle } from 'styled-components'

import Menu from '../components/Menu'
import Me from '../components/Me'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Source Sans 3', sans-serif;
  }
`

// markup
const about = () => {
  return (
    <main style={{display:'flex', backgroundColor:'#222', width:'100%'}}>
      <GlobalStyle />
      <Menu />
      <Me />
    </main>
  )
}

export default about