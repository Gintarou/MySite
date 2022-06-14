import React from 'react';

import { css, Global } from '@emotion/react';

import { Routes } from './Routes';

export const App: React.FC = () => (
  <div css={wrapper}>
    <Global styles={reset} />
    <Routes />
  </div>
);

const wrapper = css({
  height: '100vh',
  width: '100%',
});

// TODO : 暇な時にオブジェクトで書き換え
const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html,
  body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }
  #root,
  #__next {
    isolation: isolate;
  }
`;
