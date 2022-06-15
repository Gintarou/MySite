import React from 'react';

import { css } from '@emotion/react';

import { Heading } from '@/ui/atoms/Heading';
import { theme } from '@/utils/theme';

export const Works: React.FC = () => (
  <section css={wrapper}>
    <div css={contentWrapper}>
      <Heading>Works</Heading>
      <p css={tmp}>in preparation 😣</p>
    </div>
  </section>
);
const wrapper = css({
  background: theme.colors.white,
  padding: '200px 0',
});
const contentWrapper = css({
  width: '90%',
  margin: '0 auto',
  maxWidth: '1024px',
});

const tmp = css({
  textAlign: 'center',
  padding: '100px 0',
  fontSize: '30px',
});
