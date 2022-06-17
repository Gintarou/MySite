import React from 'react';

import { css } from '@emotion/react';

type Props = {
  children: React.ReactNode;
  color?: 'white' | 'black';
};

export const Heading: React.FC<Props> = ({ children, color = 'black' }) => (
  <h1 css={heading(color)}>{children}</h1>
);

const heading = (color?: string) =>
  css({
    color: '#00000016',
    fontSize: '25vw',
    fontWeight: 900,
    opacity: '1',
    ...(color === 'white' && {
      color: '#ffffff',
    }),
    '@media (min-width: 600px)': {
      fontSize: '24vw',
    },
    '@media (min-width: 1025px)': {
      fontSize: '230px',
    },
  });
