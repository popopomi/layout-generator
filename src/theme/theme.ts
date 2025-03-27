import React, { ReactElement } from 'react';
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';

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

// 声明 styled-components 的 DefaultTheme
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

// 主题默认配置
export const theme: Theme = {
  colors: {
    primary: '#FF3B30',        // 折扣价格的红色
    secondary: '#FFB800',      // 星标图标的金色
    text: {
      primary: '#000000',      // 价格的黑色
      secondary: '#666666',    // Coupon applied 的灰色
      discount: '#FF3B30'      // 50% 的红色
    },
    background: {
      main: '#ffffff',         // 整体背景
      card: '#ffffff'          // 卡片背景
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '20px'
  },
  typography: {
    price: {
      fontSize: '20px',
      fontWeight: 'bold'
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

// 创建自定义主题的工具函数
export const createCustomTheme = (overrides: Partial<Theme> = {}): Theme => {
  return {
    ...theme,
    ...overrides,
    colors: {
      ...theme.colors,
      ...(overrides.colors || {})
    },
    spacing: {
      ...theme.spacing,
      ...(overrides.spacing || {})
    },
    typography: {
      ...theme.typography,
      ...(overrides.typography || {})
    },
    shadows: {
      ...theme.shadows,
      ...(overrides.shadows || {})
    }
  } as Theme;
};
