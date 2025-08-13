'use client';

import '@ant-design/v5-patch-for-react-19';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ConfigProvider } from 'antd';
import { themes } from '../config/variable';
import { getAntTheme, getComponent } from '../config/ThemeVariable';

type ThemeContextType = [keyof typeof themes, Dispatch<SetStateAction<keyof typeof themes>>];
const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeColor, setThemeColor] = useState<keyof typeof themes>('default');
  const value = useMemo<ThemeContextType>(() => [themeColor, setThemeColor], [themeColor]);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeColor);
  }, [themeColor]);

  return (
    <ThemeContext.Provider value={value}>
      <ConfigProvider
        wave={{ disabled: true }}
        theme={{
          token: getAntTheme,
          components: getComponent,
          hashed: true,
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('Invalid hook call');
  }

  return context;
}
