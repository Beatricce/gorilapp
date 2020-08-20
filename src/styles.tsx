import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        outline: none;
    }

    body {
        color: #545454;
        background-color: #f8f8f8;
        font-family: Helvetica, sans-serif;
    }

    h1 {
        font-size: 16px;
    }
`

export default GlobalStyle