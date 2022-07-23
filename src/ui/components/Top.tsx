import React, { useRef, useContext } from 'react';

import { css } from '@emotion/react';

import BackgroundImage from '@/assets/mainBg.jpg';
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
    <section css={wrapper(progress)} ref={refContainer}>
      <img src={BackgroundImage} alt="" css={background} />
      <div css={headingWrapper(progress)}>
        <h1 css={heading1}>Hello, world.</h1>
      </div>
    </section>
  );
};

const wrapper = (progress: number) =>
  css({
    alignItems: 'center',
    border: `20px solid ${theme.colors.white}`,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    overflow: 'hidden',
    position: 'sticky',
    top: '0',
    transform: `translateY(-${progress * 10}vh)`,
    zIndex: '-1',
  });

const background = css({
  height: '100%',
  left: '0',
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
