import React from 'react';

// styles
import { StyledHeader } from './style';

const Header = () => {
  return (
    <StyledHeader>
      <header>
        <div className="logo-container">
          <a href="/">TODOAPP</a>
        </div>
      </header>
    </StyledHeader>
  );
};

export default Header;
