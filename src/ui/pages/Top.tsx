import React, { useRef, useContext } from 'react';

import { css } from '@emotion/react';

// TODO : assetsの型定義追加
// @ts-ignore
import BackgroundVideo from '@/assets/topBg.mp4';
import { ScrollContext } from '@/utils/scrollObserver';

export const Top = () => {
  const refContainer = useRef<HTMLTableSectionElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <section css={wrapper(progress)} ref={refContainer}>
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
};

const wrapper = (progress: number) =>
  css({
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    overflow: 'hidden',
    position: 'sticky',
    top: '0',
    transform: `translateY(-${progress * 20}vh)`,
    zIndex: '-1',
  });

const background = css({
  left: '0',
  objectFit: 'cover',
  position: 'absolute',
  top: '0',
  zIndex: '-1',
});
