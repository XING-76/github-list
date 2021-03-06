import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .modalContainer {
    width: 400px;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;

    .titleCloseBtn {
      display: flex;
      justify-content: flex-end;

      button {
        background-color: transparent;
        border: none;
        font-size: 25px;
        cursor: pointer;
      }
    }

    .footer {
      flex: 20%;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        width: 150px;
        height: 45px;
        margin: 10px;
        border: none;
        background-color: crimson;
        color: white;
        border-radius: 8px;
        font-size: 20px;
        cursor: pointer;
      }
    }

    .card {
      text-align: center;
      padding: 1rem;
    }

    .card-text {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        padding-left: .5rem;
      }
    }
  }
`;