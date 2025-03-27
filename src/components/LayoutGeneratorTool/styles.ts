import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.main};
  min-height: 100vh;
`;

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const LayoutPreview = styled.div<{ selected?: boolean }>`
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  
  .price-section {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: 4px 0;
  }

  .discount {
    color: ${({ theme }) => theme.colors.text.discount};
    font-size: ${({ theme }) => theme.typography.discount.fontSize};
    font-weight: ${({ theme }) => theme.typography.discount.fontWeight};
    min-width: 45px;
  }

  .price {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.typography.price.fontSize};
    font-weight: ${({ theme }) => theme.typography.price.fontWeight};
    margin-right: ${({ theme }) => theme.spacing.sm};
  }

  .description {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.typography.description.fontSize};
    flex: 1;
  }

  .icon {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 14px;
    margin-left: auto;
  }
`;

export const SelectedLayoutContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.lg};
`;
