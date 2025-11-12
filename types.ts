import { TextStyle, ViewStyle } from 'react-native';

// Type definitions for styles
export interface AppStyles {
  container: ViewStyle;
  mainContent: ViewStyle;
  title: TextStyle;
  pressableButton: ViewStyle;
  buttonText: TextStyle;
  modalOverlay: ViewStyle;
  modalContent: ViewStyle;
  modalTitle: TextStyle;
  closeButton: ViewStyle;
  closeButtonText: TextStyle;
  buttonPressed: ViewStyle;
  closeButtonPressed: ViewStyle;
}

export interface Colors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
  white: string;
  overlay: string;
}

export interface Spacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface Typography {
  title: {
    fontSize: number;
    fontWeight: '600';
  };
  body: {
    fontSize: number;
    fontWeight: '400';
  };
  button: {
    fontSize: number;
    fontWeight: '600';
  };
  modalTitle: {
    fontSize: number;
    fontWeight: '600';
  };
}