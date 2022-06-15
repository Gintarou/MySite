import React from 'react';

import { css } from '@emotion/react';

type Props = {
  children: React.ReactNode;
};

export const Heading: React.FC<Props> = ({ children }) => (
  <h1 css={heading}>{children}</h1>
);

const heading = css({
  color: '#00000016',
  fontSize: '25vw',
  fontWeight: 900,
  opacity: '1',
  '@media (min-width: 600px)': {
    fontSize: '24vw',
  },
  '@media (min-width: 1025px)': {
    fontSize: '230px',
  },
});
