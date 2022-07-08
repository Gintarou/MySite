import React, { useRef, useContext } from 'react';

import { css } from '@emotion/react';

import BackgroundVideo from '@/assets/topBg.mp4';
import { ScrollContext } from '@/utils/scrollObserver';
import { theme } from '@/utils/theme';

export const Top: React.FC = () => {
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
        <h1 css={heading1}>Hello world!</h1>
        <h2 css={heading2}>I&lsquo;m Kansai-jin :)</h2>
      </div>
    </section>
  );
};

const wrapper = css({
  alignItems: 'center',
  border: `20px solid ${theme.colors.white}`,
  boxSizing: 'border-box',
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
  height: '100%',
  objectFit: 'cover',
  overflow: 'hidden',
  position: 'absolute',
  top: '0',
  width: '100%',
});

const headingWrapper = (progress: number) =>
  css({
    color: theme.colors.white,
    fontSize: '40px',
    fontWeight: 'bold',
    textShadow: `4px 4px 3px ${theme.colors.blackAlpha40}`,
    transform: `translateY(-${progress * 24}vh)`,
    '@media (min-width: 600px)': {
      fontSize: '60px',
    },
  });

const heading1 = css({
  fontWeight: '900',
  lineHeight: '1.1em',
});

const heading2 = css({
  fontSize: '30px',
});
