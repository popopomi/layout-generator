import React, { useState, useEffect } from 'react';
import { LayoutConfig, Layout } from '../../types';
import { LayoutGenerator } from '../../utils/LayoutGenerator';
import {
  Container,
  LayoutGrid,
  LayoutPreview,
  SelectedLayoutContainer
} from './styles';

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
