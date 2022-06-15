import React from 'react';

import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import ReactDOM from 'react-dom/client';

import reportWebVitals from '@/reportWebVitals';
import { Routes } from '@/utils/Routes';

import { ScrollObserver } from './utils/scrollObserver';

const font = css({
  'html, body': {
    fontFamily: 'Poppins',
  },
  p: {
    lineHeight: '1.4em',
    letterSpacing: '-0.010em',
    margin: '14px 0',
  },
});

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
