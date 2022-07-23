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
    fontWeight: '900',
    fontSize: '1.7em',
    opacity: '1',
    padding: '2em 0',
    ...(color === 'white' && {
      color: '#ffffff',
    }),
  });
