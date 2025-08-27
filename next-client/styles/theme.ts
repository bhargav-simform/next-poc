import type { ThemeConfig } from 'antd';

export const blue = '#007bff';
export const white = '#fff';
export const dark = '#222';

export const appTheme = {
  colors: {
    primary: blue,
    border: blue,
    background: white,
    text: dark,
    button: {
      solid: {
        background: blue,
        color: white,
        border: blue,
      },
      outline: {
        background: white,
        color: blue,
        border: blue,
      },
    },
  },
};

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: blue,
    colorBorder: blue,
    colorBgContainer: white,
    colorText: dark,
    borderRadius: 6,
  },
  components: {
    Button: {
      colorPrimary: blue,
      colorPrimaryHover: '#0056b3',
      colorPrimaryActive: '#0056b3',
      colorText: white,
      colorBorder: blue,
    },
  },
};
