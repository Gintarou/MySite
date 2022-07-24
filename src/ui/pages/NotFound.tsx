import React from 'react';

import { css } from '@emotion/react';

import { Wrapper } from '@/ui/organisms/MotionWrapper';

export const NotFound: React.FC = () => (
  <Wrapper>
    <div css={text}>
      <h1>404</h1>
      <p>ページが見つかりませんでした...</p>
    </div>
  </Wrapper>
);

const text = css({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '2em',
  justifyContent: 'center',
  height: 'calc(100vh - 40px)',
});
