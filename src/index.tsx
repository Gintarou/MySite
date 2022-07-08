import React from 'react';

import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import ReactDOM from 'react-dom/client';

import reportWebVitals from '@/reportWebVitals';
import { Routes } from '@/utils/Routes';

import { ScrollObserver } from './utils/scrollObserver';
import { theme } from './utils/theme';

const font = css({
  'html, body': {
    fontFamily: 'Noto Sans JP',
    color: theme.colors.textBlack,
    fontSize: theme.fontSizes.phone,
    '@media (min-width: 600px)': {
      // fontSize: theme.fontSizes.tablet,
    },
    '@media (min-width: 1025px)': {
      // fontSize: theme.fontSizes.pc,
    },
  },
  p: {
    lineHeight: '1.6em',
    letterSpacing: '0.1em',
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
