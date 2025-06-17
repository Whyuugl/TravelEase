// Global styles
export const colors = {
  primary: '#2e86de',
  primaryLight: '#54a0ff',
  secondary: '#ffc107',
  background: {
    main: '#f8f9fa',
    light: '#e3f2fd',
    white: '#ffffff'
  },
  text: {
    primary: '#1a1a1a',
    secondary: '#666666',
    light: '#999999'
  }
};

export const shadows = {
  small: '0 4px 15px rgba(0, 0, 0, 0.1)',
  medium: '0 4px 20px rgba(0, 0, 0, 0.05)',
  large: '0 6px 20px rgba(46, 134, 222, 0.2)'
};

export const borderRadius = {
  small: '8px',
  medium: '12px',
  large: '16px'
};

export const transitions = {
  default: 'all 0.3s ease'
};

export const gradients = {
  primary: 'linear-gradient(90deg, #2e86de, #54a0ff)',
  background: 'linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)'
};

// Add global styles for smooth scrolling
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    scroll-behavior: smooth;
  }
`; 