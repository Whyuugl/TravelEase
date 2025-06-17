export interface Theme {
  colors: {
    primary: string;
    primaryLight: string;
    secondary: string;
    background: {
      main: string;
      light: string;
      white: string;
    };
    text: {
      primary: string;
      secondary: string;
      light: string;
    };
    gradient: {
      primary: string;
      background: string;
    };
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
  };
  transitions: {
    default: string;
  };
} 