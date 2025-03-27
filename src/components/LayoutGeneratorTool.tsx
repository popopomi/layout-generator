import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LayoutConfig, Layout } from '../types';
import { LayoutGenerator } from '../utils/LayoutGenerator';

const Container = styled.div`
  padding: 20px;
  font-family: 'Pretendard', -apple-system, sans-serif;
`;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(650px, 1fr));
  gap: 24px;
  margin-top: 20px;
`;

const LayoutPreview = styled.div<{ selected?: boolean }>`
  border: 2px solid ${props => props.selected ? '#1890ff' : '#eee'};
  border-radius: 8px;
  padding: 15px;
  background: white;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: #40a9ff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

const LayoutTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #333;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;

  &:hover {
    background: #40a9ff;
  }
`;

interface Props {
  config: LayoutConfig;
}

const LayoutGeneratorTool: React.FC<Props> = ({ config }) => {
  const [layouts, setLayouts] = useState<Layout[]>([]);
  const [selectedLayout, setSelectedLayout] = useState<string>('');

  useEffect(() => {
    const generator = new LayoutGenerator(config);
    // 自动获取所有布局方法
    const generatedLayouts: Layout[] = Object.getOwnPropertyNames(LayoutGenerator.prototype)
      .filter(name => name.startsWith('generateCouponLayout'))
      .map(methodName => {
        // 从方法名提取布局编号
        const layoutNumber = methodName.replace('generateCouponLayout', '');
        // 生成更友好的布局名称
        const layoutNames: { [key: string]: string } = {
          '1': 'Classic Vertical',
          '2': 'Two Columns',
          '3': 'Price Highlight',
          '4': 'Grid Layout',
          '5': 'Divider Style',
          '6': 'Card Style',
          '7': 'Tag Style',
          '8': 'Gradient Style',
          '9': 'Rounded Section',
          '10': 'Emphasis Border',
          '11': 'Modern Simple',
          '12': 'Marker Style',
          '13': 'Circle Decoration',
          '14': 'Wave Border',
          '15': 'Double Layer',
          '16': 'Modern Card',
          '17': 'Premium Tag',
          '18': 'Minimalist',
          '19': 'Diagonal',
          '20': 'Modern Split'
        };

        return {
          name: layoutNames[layoutNumber] || `Layout ${layoutNumber}`,
          html: (generator as any)[methodName]()
        };
      });
    
    setLayouts(generatedLayouts);
  }, [config]);

  return (
    <Container>
      <h2>Choose a Layout</h2>
      <LayoutGrid>
        {layouts.map((layout, index) => (
          <div key={index}>
            <LayoutTitle>{layout.name}</LayoutTitle>
            <LayoutPreview
              selected={selectedLayout === layout.html}
              onClick={() => setSelectedLayout(layout.html)}
            >
              <div dangerouslySetInnerHTML={{ __html: layout.html }} />
            </LayoutPreview>
          </div>
        ))}
      </LayoutGrid>

      {selectedLayout && (
        <div style={{ marginTop: '20px' }}>
          <h3>Selected Layout Preview</h3>
          <LayoutPreview>
            <div dangerouslySetInnerHTML={{ __html: selectedLayout }} />
          </LayoutPreview>
          <Button
            onClick={() => {
              console.log('Export layout:', selectedLayout);
            }}
          >
            Export Layout
          </Button>
        </div>
      )}
    </Container>
  );
};

export default LayoutGeneratorTool;
