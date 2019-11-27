import styled from 'styled-components';

export const FadedBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 480px;
  height: 250px;
  border-radius: 8px;
  z-index: 30;
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .modal-header {
    height: 30px;
    font-weight: bold;
    margin-bottom: 1px solid #333;
  }

  .modal-body {
    height: 200px;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: orange; */
  }

  div {
    display: flex;
    width: 100%;
  }

  button {
    width: 90%;
    height: 40px;
    color: #fff;
    margin: 0 auto;
    background-color: #00bcd4;
    border-radius: 8px;
  }
`;
