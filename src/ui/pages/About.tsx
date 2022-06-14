import React from 'react';

import { css } from '@emotion/react';

export const About = () => (
  <section css={wrapper}>
    <h1>about</h1>
  </section>
);

const wrapper = css({
  minHeight: '100vh',
  background: 'pink',
});
