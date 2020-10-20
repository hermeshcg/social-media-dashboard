import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) => (props.theme.mode === 'dark' ? '#f7f7f7' : '#1e202a')};
  padding: 30px;
  background: ${(props) =>
    props.theme.mode === 'dark' ? '#1e202f' : '#e0e0e0'};

  display: flex;
  justify-content: space-between;
  align-items: center;

  .right-side {
    margin-top: 25px;
    margin-left: 50px;

    p {
      font-size: 16px;
      color: ${(props) =>
        props.theme.mode === 'dark' ? '#f7f7f7' : '#1e202a'};
    }
  }

  .left-side {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    margin-right: 50px;
    button {
      border: 1px solid
        ${(props) => (props.theme.mode === 'dark' ? '#ccc' : '#121212')};
      padding: 10px;
      border-radius: 8px;
      margin-right: 7px;
      background: ${(props) =>
        props.theme.mode === 'dark' ? '#e0e0e0' : '#ccc'};

      p {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
`;
/* this is a test */
