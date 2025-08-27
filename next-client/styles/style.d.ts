import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      border: string;
      background: string;
      text: string;
      button: {
        solid: {
          background: string;
          color: string;
          border: string;
        };
        outline: {
          background: string;
          color: string;
          border: string;
        };
      };
    };
  }
}
