import React from 'react';

import { css } from '@emotion/react';

type Props = {
  children: React.ReactNode;
};

export const SubSectionWrapper: React.FC<Props> = ({ children }) => (
  <section css={wrapper}>{children}</section>
);

const wrapper = css({
  width: '90%',
  padding: '80px  0 0',
  margin: '0 auto',
  maxWidth: '800px',
});
