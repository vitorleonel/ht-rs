import { createGlobalStyle } from 'styled-components';
// import background from '../assets/images/bg2.svg';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
    color: #414141;
  }

  #root {
    width: 100vw;
    margin: 0 auto;
    /* padding: 20px 50px; */
    /* background: orange; */
  }

  button {
    cursor: pointer
  }
`;
