import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import { MAX_WIDTH } from './utils/constants';

const ContentsContainer = styled.div`
  max-width: ${MAX_WIDTH}px;
  margin: auto;
`;

function App() {
  return (
    <>
      <Header />
      <ContentsContainer>
        <Outlet />
      </ContentsContainer>
    </>
  );
}

export default App;
