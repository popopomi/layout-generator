import React from 'react';
import LayoutGeneratorTool from './components/LayoutGeneratorTool'; // 移除花括号
import { sampleConfig } from './data/sampleConfig';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Pretendard', -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
`;

function App() {
  return (
    <AppContainer>
      <h1>Layout Generator</h1>
      <LayoutGeneratorTool config={sampleConfig} />
    </AppContainer>
  );
}

export default App;
