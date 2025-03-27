// src/components/LayoutGeneratorTool.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LayoutConfig, Layout } from '../types';
import { LayoutGenerator } from '../utils/LayoutGenerator';

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.main};
`;

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const LayoutPreview = styled.div<{ selected?: boolean }>`
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  min-width: 280px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  
  .price-section {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
  }

  .discount {
    color: ${({ theme }) => theme.colors.text.discount};
    font-size: ${({ theme }) => theme.typography.discount.fontSize};
    font-weight: ${({ theme }) => theme.typography.discount.fontWeight};
  }

  .price {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.price.fontSize};
    font-weight: ${({ theme }) => theme.typography.price.fontWeight};
  }

  .description {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.description.fontSize};
  }

  .icon {
    color: ${({ theme }) => theme.colors.secondary};
    margin-left: ${({ theme }) => theme.spacing.xs};
  }
`;

const SelectedLayoutContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

interface Props {
  config: LayoutConfig;
}

const LayoutGeneratorTool: React.FC<Props> = ({ config }) => {
  const [layouts, setLayouts] = useState<Layout[]>([]);
  const [selectedLayout, setSelectedLayout] = useState<string>('');

  useEffect(() => {
    const generator = new LayoutGenerator(config);
    const generatedLayouts: Layout[] = Object.getOwnPropertyNames(LayoutGenerator.prototype)
      .filter(name => name.startsWith('generateCouponLayout'))
      .map(methodName => {
        const layoutNumber = methodName.replace('generateCouponLayout', '');
        return {
          name: `Layout ${layoutNumber}`,
          html: (generator as any)[methodName]()
        };
      });
    
    setLayouts(generatedLayouts);
  }, [config]);

  return (
    <Container>
      <LayoutGrid>
        {layouts.map((layout, index) => (
          <LayoutPreview
            key={index}
            selected={selectedLayout === layout.html}
            onClick={() => setSelectedLayout(layout.html)}
          >
            <div dangerouslySetInnerHTML={{ __html: layout.html }} />
          </LayoutPreview>
        ))}
      </LayoutGrid>

      {selectedLayout && (
        <SelectedLayoutContainer>
          <LayoutPreview>
            <div dangerouslySetInnerHTML={{ __html: selectedLayout }} />
          </LayoutPreview>
        </SelectedLayoutContainer>
      )}
    </Container>
  );
};

export default LayoutGeneratorTool;
