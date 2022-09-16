import React from 'react';

import { css } from '@emotion/react';

import BackgroundImage from '@/assets/mainBg.jpg';
import { theme } from '@/utils/theme';

export const Top: React.FC = () => (
  <section css={wrapper}>
    <img src={BackgroundImage} alt="" css={background} />
    <div css={headingWrapper}>
      <h1 css={heading1}>Hello, world.</h1>
    </div>
  </section>
);

const wrapper = css({
  alignItems: 'center',
  border: `20px solid ${theme.colors.white}`,
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  height: '60vh',
  overflow: 'hidden',
  position: 'sticky',
  top: '0',
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

const headingWrapper = css({
  color: theme.colors.white,
  fontSize: '40px',
  fontWeight: 'bold',
  textShadow: `4px 4px 3px ${theme.colors.blackAlpha40}`,
  '@media (min-width: 600px)': {
    fontSize: '60px',
  },
});

const heading1 = css({
  fontWeight: '900',
  lineHeight: '1.1em',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});
