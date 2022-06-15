import React from 'react';

import { css } from '@emotion/react';

import { theme } from '@/utils/theme';

export const Works: React.FC = () => (
  <section css={wrapper}>
    <div css={contentWrapper}>
      <h1 css={heading}>Works</h1>
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

const heading = css({
  color: '#00000016',
  fontSize: '220px',
  fontWeight: 900,
  opacity: '1',
});

const tmp = css({
  textAlign: 'center',
  padding: '100px 0',
  fontSize: '30px',
});
