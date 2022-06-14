import React from 'react';

import { css } from '@emotion/react';

import { theme } from '@/utils/theme';

export const About = () => (
  <section css={wrapper}>
    <div css={textBlock}>
      <p>Hi! I&lsquo;m Rikuto Ozawa.</p>
      <p>
        I&lsquo;m doing a Master&lsquo;s degree at Osaka Institute of
        Technology.
      </p>
      <p>
        Dreaming of inspiring people with my electronic work, I&lsquo;m studying
        every day.
      </p>
    </div>
  </section>
);

const wrapper = css({
  background: theme.colors.white,
  padding: '100px 0',
});

const textBlock = css({
  margin: '0 auto ',
  maxWidth: '900px',
  width: '80%',
  p: {
    fontSize: '34px',
    fontWeight: '400',
    lineHeight: '1.4em',
    letterSpacing: '-0.010em',
    margin: '14px 0',
  },
});
