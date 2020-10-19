import React from 'react';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div className="right-side">
        <h1>Social Media Dashboard</h1>
        <p>Total followers: 23,004</p>
      </div>

      <div className="left-side">
        <p>Dark Mode</p>
      </div>
    </Container>
  );
}

export default Header;
