import React from 'react';
import styled from 'styled-components';

const HorizontalBorder = styled.div`
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .15) 0 0 2px;
  background: repeating-linear-gradient(#fe0000 0 10px, transparent 0 20px);
`;
const VerticalBorder = styled.div`
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .15) 0 0 2px;
  background: repeating-linear-gradient(90deg, #fe0000 0 10px, transparent 0 20px);
`;
const RightDiagonalLine = styled.div`
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .15) 0 0 2px;
  background: repeating-linear-gradient(-45deg, #fe0000 0 10px, transparent 0 20px);
`;
const LeftDiagonalLine = styled.div`
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .15) 0 0 2px;
  background: repeating-linear-gradient(45deg, #fe0000 0 10px, transparent 0 20px);
`;

const AppRoot = styled.div`
  box-sizing: border-box;
  background: #f8f8f8;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, 48px);
  grid-template-rows: repeat(auto-fill, 48px);
  grid-gap: 4px;
  padding: 4px;
`;

const App = () => {
  return (
    <AppRoot>
      <HorizontalBorder/>
      <VerticalBorder/>
      <RightDiagonalLine/>
      <LeftDiagonalLine/>
    </AppRoot>
  );
}

export default App;
