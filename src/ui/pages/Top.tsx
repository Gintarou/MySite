import React, { useRef, useContext } from 'react';

import { css } from '@emotion/react';

// TODO : assetsの型定義追加
// @ts-ignore
import BackgroundVideo from '@/assets/topBg.mp4';
import { ScrollContext } from '@/utils/scrollObserver';
import { theme } from '@/utils/theme';

export const Top = () => {
  const refContainer = useRef<HTMLElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <section css={wrapper} ref={refContainer}>
      <video
        src={BackgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        css={background}
      />
      <div css={headingWrapper(progress)}>
        <h1 css={heading1}>Hello.</h1>
        <h2 css={heading2}>I&lsquo;m Kansai-jin :)</h2>
      </div>
    </section>
  );
};

const wrapper = css({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
  overflow: 'hidden',
  position: 'sticky',
  top: '0',
  // TODO : zIndex以外で考える
  zIndex: '-1',
});

const background = css({
  left: '0',
  objectFit: 'cover',
  position: 'absolute',
  top: '0',
});

const headingWrapper = (progress: number) =>
  css({
    color: theme.colors.white,
    fontWeight: 'bold',
    textShadow: `4px 4px 3px ${theme.colors.blackAlpha40}`,
    transform: `translateY(-${progress * 20}vh)`,
  });

const heading1 = css({
  fontSize: '60px',
  lineHeight: '1.1em',
});

const heading2 = css({
  fontSize: '30px',
});
