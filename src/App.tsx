import React from 'react';
import styled from 'styled-components';

const Border = styled.div`
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .15) 0 0 2px;
  background: 0 0 / auto 20px linear-gradient(#fe0000 10px, transparent 0);
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
      <Border/>
      <Border/>
      <Border/>
      <Border/>
      <Border/>
      <Border/>
      <Border/>
      <Border/>
      <Border/>
      <Border/>
    </AppRoot>
  );
}

export default App;
