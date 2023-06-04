import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { MAX_WIDTH } from '../utils/constants';
import { GithubIcon } from './icons';

const Nav = styled.nav`
  display: block;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: ${MAX_WIDTH}px;
  padding: 0 16px;
  margin: auto;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  font-size: 24px;
  font-weight: 900;
  padding: 24px 0;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`;

function Header() {
  return (
    <Nav>
      <NavContainer>
        <LogoContainer>
          <Link to="/">Disney Characters</Link>
        </LogoContainer>
        <MenuContainer>
          <a href="https://github.com/flynnpark/nomad-disney-characters" target="_blank">
            <GithubIcon size={32} />
          </a>
        </MenuContainer>
      </NavContainer>
    </Nav>
  );
}

export default Header;
