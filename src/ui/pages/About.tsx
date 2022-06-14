import React from 'react';

import { css } from '@emotion/react';

import { theme } from '@/utils/thene';

export const About = () => (
  <section css={wrapper}>
    <h1>about</h1>
  </section>
);

const wrapper = css({
  background: theme.colors.white,
  minHeight: '100vh',
});
