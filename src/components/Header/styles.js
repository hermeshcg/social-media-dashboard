import styled from 'styled-components';

export const Container = styled.div`
  color: #fff;
  background: hsl(232, 19%, 18%);
  padding: 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .right-side {
    margin-top: 25px;
    margin-left: 50px;

    p {
      font-size: 16px;
      color: #cdcdcd;
    }
  }

  .left-side {
    margin-top: 25px;
    margin-right: 50px;
  }
`;
