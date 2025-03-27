// src/types/index.ts

// UI元素接口
export interface UIElement {
    id: string;
    type: string;
    content?: string;
    style?: {
      [key: string]: string;
    };
  }
  
  // Layout配置接口
  export interface LayoutConfig {
    width?: number;
    height?: number;
    backgroundColor?: string;
    padding?: number;
    elements?: UIElement[];
    // 添加新的属性
    discount: string;
    price: string;
    description: string;
  }
  
  // Layout接口
  export interface Layout {
    name: string;
    html: string;
  }
  