import React from 'react';
import { ThemeProvider } from './theme/theme';
import LayoutGeneratorTool from './components/LayoutGeneratorTool';
import { sampleConfig } from './data/sampleConfig';

const App = () => {
  return (
    <ThemeProvider>
      <LayoutGeneratorTool config={sampleConfig} />
    </ThemeProvider>
  );
};

export default App;
