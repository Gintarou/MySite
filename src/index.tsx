import React from 'react';

import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import ReactDOM from 'react-dom/client';

import reportWebVitals from '@/reportWebVitals';
import { Routes } from '@/utils/Routes';

import { ScrollObserver } from './utils/scrollObserver';

const font = css`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&family=Roboto&display=swap');
  @import url('https://fonts.gstatic.com');

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat';
    font-weight: 900;
  }

  p,
  a,
  span,
  div {
    font-family: 'Roboto';
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
