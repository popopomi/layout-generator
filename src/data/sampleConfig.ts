import { LayoutConfig } from '../types';

export const sampleConfig: LayoutConfig = {
  width: 1200,
  height: 800,
  backgroundColor: '#ffffff',
  padding: 20,
  elements: [
    {
      id: 'header',
      type: 'header',
      content: 'Header Section',
      style: {
        background: '#f0f0f0',
        padding: '20px'
      }
    },
    {
      id: 'content',
      type: 'content',
      content: 'Main Content Section',
      style: {
        background: '#e0e0e0',
        padding: '20px'
      }
    }
  ]
};
