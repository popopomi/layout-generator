import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from './theme/theme';
import LayoutGeneratorTool from './components/LayoutGeneratorTool';
import { sampleConfig } from './data/sampleConfig';

const AppContainer = styled.div`
  font-family: 'Pretendard', -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px;
`;

const App = (): ReactElement => {
  return (
    <ThemeProvider>
      <AppContainer>
        <LayoutGeneratorTool config={sampleConfig} />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
