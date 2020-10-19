import React from 'react';
import { useContext } from 'react';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';

import { Container } from './styles';

function Header({ toggleTheme }) {
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <div className="right-side">
        <h1>Social Media Dashboard</h1>
        <p>Total followers: 23,004</p>
      </div>

      <div className="left-side">
        <button type="button" onClick={toggleTheme}>
          <p>Dark mode</p>
        </button>
      </div>
    </Container>
  );
}

export default Header;
