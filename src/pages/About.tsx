import React from 'react';

import { css } from '@emotion/react';

import { theme } from '@/utils/theme';

export const About: React.FC = () => (
  <section css={wrapper}>
    <div css={textBlock}>
      <p>Hi! I&lsquo;m Rikuto Ozawa.</p>
      <p>
        I&lsquo;m doing a Master&lsquo;s degree at Osaka Institute of
        Technology.
      </p>
      <p>
        Dreaming of inspiring people with my digital Monozukuri, I&lsquo;m
        growing every day 🌱
      </p>
    </div>
  </section>
);

const wrapper = css({
  background: theme.colors.white,
  padding: '200px 0 100px',
});

const textBlock = css({
  margin: '0 auto ',
  maxWidth: '1024px',
  width: '80%',
  p: {
    fontSize: '34px',
    fontWeight: '400',
  },
});
