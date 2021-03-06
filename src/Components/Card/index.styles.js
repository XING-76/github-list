import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1rem auto;

  .card {
    float: left;
    width: 20%;
    padding: .75rem;
    margin-bottom: 1rem;
    border: 1px solid #efefef;
    text-align: center;

    .card-img {
      width: 100%;
      img {
        margin-bottom: .75rem;
        border-radius: 100px;
        width: 100%;
        max-width: 100px;
        cursor: pointer;
      }
    }
    .card-text {
      display: flex;
      justify-content: center;
      align-items: center;
      word-break: break-word;
      svg {
        padding-left: .5rem;
      }
    }
  }

`;