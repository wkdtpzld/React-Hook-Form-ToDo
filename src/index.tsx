import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';
import { darkTheme } from './theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>
);