import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { MAX_WIDTH } from '../utils/constants';

const Nav = styled.nav`
  display: block;
`;

const NavContainer = styled.div`
  max-width: ${MAX_WIDTH}px;
  padding: 0 16px;
  margin: auto;
`;

const LogoContainer = styled.div`
  font-size: 24px;
  font-weight: 900;
  padding: 24px 0;
`;

function Header() {
  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <Link to="/">Disney Characters</Link>
        </LogoContainer>
      </NavContainer>
    </Nav>
  );
}

export default Header;
