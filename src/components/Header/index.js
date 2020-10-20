import React from 'react';
import { WiSolarEclipse } from 'react-icons/wi';

import { Container } from './styles';

function Header({ toggleTheme }) {
  return (
    <Container>
      <div className="right-side">
        <h1>Social Media Dashboard</h1>
        <p>Total followers: 23,004</p>
      </div>

      <div className="left-side">
        <button type="button" onClick={toggleTheme}>
          <WiSolarEclipse size={30} />
        </button>
      </div>
    </Container>
  );
}

export default Header;
