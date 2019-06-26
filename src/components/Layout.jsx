import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

// This component contains generic structure for all the pages and common/global styles

// Initializing the theme, which will be used by Theme provider (similar to Context API)
const theme = {
  red: "#e40000",
  black: "#555",
  jetblack: "#000",
  white: "#fff",
  offwhite: "#fdf5e6",
  gray: "#dddddd",
  secondaryRed: "#ae0000",
  maxWidth: "1200px",
  orange: "#FF4500",
  /* the reason for encapsulating everything inside max-width is also due 
    to the fact that the A-feature images are not too good to scale */
  bs: "0 3px 0 0 #e40000"
};

// global styles, which will bleed through to all the components
const GlobalStyle = createGlobalStyle`
 html{
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
     font-size: 12px;
 }
 *, *:before, *:after {
     box-sizing: inherit;
     outline: none;
 }
 body{
     padding: 0;
     margin: 0;
     font-size: 1.5rem;
     line-height: 1.5;
     font-family: 'Roboto', sans-serif !important;
 }
 button.primary-button {
    transition-duration: .25s;
    transition-timing-function: ease-in-out;
    transition-property: background,border-color;
    border-radius: 4px;
    font-family: 'Roboto';
    font-size: 0.875rem;
    min-height: 2rem;
    letter-spacing: 1.5px;
    padding: .5rem 2.25rem;
    text-transform: uppercase;
    white-space: nowrap;
    text-align: center;
    background: ${props => props.theme.red};
    border: 2px solid ${props => props.theme.secondaryRed};
    color: ${props => props.theme.white};
    cursor: pointer;
    :hover{
        background: ${props => props.theme.secondaryRed};
    }
 }
 a, a:hover {
    color: inherit;
    text-decoration: none;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    white-space: nowrap;
    text-align: center;
}
p.error{
  background: ${props => props.theme.red};
  color: ${props => props.theme.white};
}
`;

// complete page element
const Page = styled.div`
  background: ${props => props.theme.offwhite};
  color: ${props => props.theme.black};
`;

// main container of the app where all content will be rendered
const MainContainer = styled.div`
  background: ${props => props.theme.offwhite};
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  min-height: 100vh;
`;

const Layout = props => {
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <GlobalStyle />
        <MainContainer>{props.children}</MainContainer>
      </Page>
    </ThemeProvider>
  );
};

export default Layout;
