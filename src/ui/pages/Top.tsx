import React from 'react';

import { css } from '@emotion/react';

// TODO : assetsの型定義追加
// @ts-ignore
import BackgroundVideo from '@/assets/topBg.mp4';

export const Top = () => (
  <section css={wrapper}>
    <video
      src={BackgroundVideo}
      autoPlay
      loop
      muted
      playsInline
      css={background}
    />
    <h1>al;skdjf</h1>
  </section>
);

const wrapper = css({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
  overflow: 'hidden',
  position: 'sticky',
  top: '0',
  zIndex: '-1',
});

const background = css({
  left: '0',
  objectFit: 'cover',
  position: 'absolute',
  top: '0',
  zIndex: '-1',
});
