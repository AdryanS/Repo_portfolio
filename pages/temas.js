import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #f3f3f3;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .offDark{
    background-color: #f4f4e3;
    width: 100vw;
    height: 100vh;
  }
  .onDark{
    background-color: rgb(40, 37, 41);
    width: 100vw;
    height: 100vh;
  }

  button{
  display: block;
  position: relative;
  z-index: 999;
}
.off-menu {
    position: absolute;
    height: 100vh;
    width: 0px;
    background-color: aqua;
    animation: menuOff 0.2s reverse;

    ul{
      list-style: none;
      display: none;
    }
  }

  .on-menu {
    position: absolute; 
    background-color: aqua;
    height: 100vh;
    width: 300px;
    animation: menuOn 0.2s linear;
  }

  @keyframes menuOn {
    0% {
      width: 0px;
    }
    100% {
      width: 300px;
    }
  }
  
  @keyframes menuOff {
    0% {
      width: 0px;
    }
    100% {
      width: 300px;
    }
  }
`;

 
export default GlobalStyle;