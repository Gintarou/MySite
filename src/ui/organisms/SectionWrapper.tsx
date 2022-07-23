import React from 'react';

import { css } from '@emotion/react';

type Props = {
  children: React.ReactNode;
};

export const SectionWrapper: React.FC<Props> = ({ children }) => (
  <section css={wrapper}>{children}</section>
);

const wrapper = css({
  width: '100%',
  padding: '100px  0 0',
  margin: '0',
  '@media (min-width: 600px)': {
    padding: '180px 0 0',
  },
  '@media (min-width: 1025px)': {
    padding: '150px 0 0',
  },
});
