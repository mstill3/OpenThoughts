import { createContext } from 'react';

export enum AppTheme {
  light = 'light',
  dark = 'dark',
}
interface ThemeContextDescriptor {
  theme: AppTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextDescriptor>({
  theme: AppTheme.dark,
  toggleTheme: () => {},
});
