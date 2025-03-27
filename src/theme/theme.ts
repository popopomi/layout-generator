// src/theme/theme.ts
import React, { ReactElement } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// 主题类型定义
export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    text: {
      primary: string;
      secondary: string;
      discount: string;
    };
    background: {
      main: string;
      card: string;
    }
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  typography: {
    price: {
      fontSize: string;
      fontWeight: string;
    };
    discount: {
      fontSize: string;
      fontWeight: string;
    };
    description: {
      fontSize: string;
      fontWeight: string;
    };
  };
  shadows: {
    card: string;
  };
};

// 主题配置
export const theme: Theme = {
  colors: {
    primary: '#FF3B30',
    secondary: '#FFB800',
    text: {
      primary: '#000000',
      secondary: '#666666',
      discount: '#FF3B30'
    },
    background: {
      main: '#F5F5F5',
      card: '#FFFFFF'
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  typography: {
    price: {
      fontSize: '20px',
      fontWeight: '600'
    },
    discount: {
      fontSize: '18px',
      fontWeight: 'bold'
    },
    description: {
      fontSize: '12px',
      fontWeight: 'normal'
    }
  },
  shadows: {
    card: '0 2px 4px rgba(0,0,0,0.05)'
  }
};

// 主题提供者组件的属性类型
interface ThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

// 主题提供者组件
export const ThemeProvider = (props: ThemeProviderProps): ReactElement => {
  const finalTheme = props.theme || theme;
  
  return React.createElement(
    StyledThemeProvider,
    {
      theme: finalTheme
    },
    props.children
  );
};
