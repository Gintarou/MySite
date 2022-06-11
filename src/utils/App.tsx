import React from 'react';

import { css } from '@emotion/react';

import { Routes } from './Routes';

export const App: React.FC = () => (
  <div css={wrapper}>
    <Routes />
  </div>
);

const wrapper = css({
  height: '100vh',
  width: '100%',
});
