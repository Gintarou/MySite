import React from 'react';

import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import ReactDOM from 'react-dom/client';

import reportWebVitals from '@/reportWebVitals';
import { Routes } from '@/utils/Routes';

import { ScrollObserver } from './utils/scrollObserver';

const font = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  span,
  div {
    font-family: 'Poppins';
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ScrollObserver>
      <Global styles={[emotionReset, font]} />
      <Routes />
    </ScrollObserver>
  </React.StrictMode>,
);

reportWebVitals();
