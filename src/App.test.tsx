import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders layout generator heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Layout Generator/i);
  expect(headingElement).toBeInTheDocument();
});

export {}; // 添加这行来使文件被视为模块

