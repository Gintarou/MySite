import React from 'react';

import { css } from '@emotion/react';

import { Heading } from '@/ui/atoms/Heading';

import { SectionWrapper } from '../organisms/SectionWrapper';

export const Activity: React.FC = () => (
  <SectionWrapper>
    <Heading>アクティビティ</Heading>
    <p css={tmp}>準備中...</p>
  </SectionWrapper>
);

const tmp = css({
  textAlign: 'center',
  padding: '100px 0',
  fontSize: '30px',
});
