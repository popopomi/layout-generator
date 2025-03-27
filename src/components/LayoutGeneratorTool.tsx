// src/components/LayoutGeneratorTool.tsx
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
    const generatedLayouts: Layout[] = [
      { name: 'Classic Vertical', html: generator.generateCouponLayout1() },
      { name: 'Two Columns', html: generator.generateCouponLayout2() },
      { name: 'Price Highlight', html: generator.generateCouponLayout3() },
      { name: 'Grid Layout', html: generator.generateCouponLayout4() },
      { name: 'Divider Style', html: generator.generateCouponLayout5() },
      { name: 'Card Style', html: generator.generateCouponLayout6() },
      { name: 'Tag Style', html: generator.generateCouponLayout7() },
      { name: 'Gradient Style', html: generator.generateCouponLayout8() },
      { name: 'Rounded Section', html: generator.generateCouponLayout9() },
      { name: 'Emphasis Border', html: generator.generateCouponLayout10() }
    ];
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
