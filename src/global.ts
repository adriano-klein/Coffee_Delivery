import { createGlobalStyle } from 'styled-components'

// :root {
//   /* PRODUTO */
//  --yellow-dark: #C47F17
//  --yellow: #DBAC2C
//  --yellow-light: #F1E9C9
//  --purple-dark: #4B2995
//  --purple: #8047F8
//  --purple-light: #EBE5F9

//  /* BASE */
//  --base-title: #272221
//  --base-subtitle: #403937
//  --base-text: #574F4D
//  --base-label: #8D8686
//  --base-hover: #D7D5D5
//  --base-button: #E6E5E5
//  --base-input: #EDEDED
//  --base-card: #F3F2F2
//  --background: #FAFAFA
//  --white: #FFFFFF
// }

export const GlobalStyle = createGlobalStyle`

body {
  -webkit-font-antialiased: antialiased;
  background-color: #FAFAFA;
  font-family: 'Roboto', sans-serif;
  color: #574F4D;
  margin: 2rem auto;
  max-width: 1120px

}

* {
  margin: 0;
  box-sizing: border-box;
}
`
