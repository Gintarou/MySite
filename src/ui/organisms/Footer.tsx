import React from 'react';

import { css } from '@emotion/react';

import { theme } from '@/utils/theme';

export const Footer: React.FC = () => (
  <div css={footer}>&copy;2022 Rikuto Ozawa. All rights reserved</div>
);

const footer = css({
  alignItems: 'center',
  background: theme.colors.black,
  color: theme.colors.white,
  display: 'flex',
  fontSize: '12px',
  fontWeight: 'lighter',
  justifyContent: 'center',
  height: '40px',
  width: '100%',
});
