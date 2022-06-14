import React from 'react';

import { css } from '@emotion/react';

import { theme } from '@/utils/theme';

export const Skills: React.FC = () => (
  <section css={wrapper}>
    <div css={contentWrapper}>
      <h1 css={heading}>Skills</h1>
    </div>
  </section>
);
const wrapper = css({
  background: theme.colors.white,
  height: '800px',
});

const contentWrapper = css({
  width: '90%',
  margin: '0 auto',
});

const heading = css({
  color: '#00000016',
  fontSize: '220px',
  fontWeight: 900,
});
