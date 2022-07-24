import React from 'react';

import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

import reportWebVitals from '@/reportWebVitals';
import { App } from '@/utils/App';

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
    lineHeight: '2.5em',
    // letterSpacing: '0.1em',
    // padding: '14px 0',
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Router>
      <ScrollObserver>
        <Global styles={[emotionReset, font]} />
        <App />
      </ScrollObserver>
    </Router>
  </React.StrictMode>,
);

reportWebVitals();
