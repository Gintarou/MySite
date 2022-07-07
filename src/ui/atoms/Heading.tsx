import React from 'react';

import { css } from '@emotion/react';

// import { theme } from '@/utils/theme';

type Props = {
  children: React.ReactNode;
  color?: 'white' | 'black';
};

export const Heading: React.FC<Props> = ({ children, color = 'black' }) => (
  <h1 css={heading(color)}>{children}</h1>
);

const heading = (color?: string) =>
  css({
    fontWeight: '900',
    opacity: '1',
    fontSize: '1.5em',
    color: '#555555',
    ...(color === 'white' && {
      color: '#ffffff',
    }),
  });
