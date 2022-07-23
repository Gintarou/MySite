import React from 'react';

import { css } from '@emotion/react';

export const Loading: React.FC = () => <div css={main}>loding...</div>;

const main = css({
  background: '#aaaaaa',
  height: '100vh',
  width: '100%',
  zIndex: '999',
});
