import { StyleSheet, Platform } from 'react-native';
import { Colors, Spacing, Typography } from './types';

/**
 * Styles for SimpleModalApp
 * All styling definitions in one place for better organization
 */
export const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },

  // Main content area
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  // App title
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#e0e0e0',
    marginBottom: 40,
    textAlign: 'center',
  },

  // Main button styles
  pressableButton: {
    backgroundColor: '#2c1810',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    minWidth: 200,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8b4513',
    // Platform-specific shadows
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
      web: {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      },
    }),
  },

  // Button text
  buttonText: {
    color: '#d4af37',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  // Modal overlay (dark background)
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Modal content container
  modalContent: {
    backgroundColor: '#1a1a1a',
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    minWidth: 280,
    borderWidth: 2,
    borderColor: '#8b4513',
    // Platform-specific shadows
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
      web: {
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
      },
    }),
  },

  // Modal title text
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#d4af37',
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 24,
  },

  // Modal close button
  closeButton: {
    backgroundColor: '#4a1a1a',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    minWidth: 120,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8b2635',
  },

  // Close button text
  closeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },

  // Press state styles for buttons
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  closeButtonPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.96 }],
  },
});

// Color constants for easy theming
export const colors: Colors = {
  primary: '#2c1810',
  secondary: '#4a1a1a',
  background: '#0a0a0a',
  text: '#e0e0e0',
  accent: '#d4af37',
  white: '#1a1a1a',
  overlay: 'rgba(0, 0, 0, 0.8)',
};

// Common spacing values
export const spacing: Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

// Typography constants
export const typography: Typography = {
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
};