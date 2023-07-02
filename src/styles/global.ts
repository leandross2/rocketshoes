import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #191920;
  }

  body, input, textarea, button{
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h1, ,h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
    transition: opacity .5s ;
    &:hover{
      opacity: .9;
    }
  }

  [disabled]{
    opacity: .6
    cursor: not-allowed;
  }

  a{
    color: inherit;
    text-decoration: none;
  }
`