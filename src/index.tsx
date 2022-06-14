import React from 'react';

import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import ReactDOM from 'react-dom/client';

import reportWebVitals from '@/reportWebVitals';
import { Routes } from '@/utils/Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Global styles={css([emotionReset])} />
    <Routes />
  </React.StrictMode>,
);

reportWebVitals();
