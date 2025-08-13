"use client";
import React, { ReactNode, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import { appTheme, antdTheme } from './theme';

interface Props {
  children: ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  // For dark mode toggle, you can add state and switch themes here
  // const [isDark, setIsDark] = useState(false);
  // const theme = isDark ? darkTheme : appTheme;
  // const antd = isDark ? antdDarkTheme : antdTheme;

  return (
    <StyledThemeProvider theme={appTheme}>
      <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
