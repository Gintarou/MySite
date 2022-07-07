import React from 'react';

import { css } from '@emotion/react';

import { Heading } from '@/ui/atoms/Heading';
import { SkillContent } from '@/ui/molecules/SkillContent';
import { theme } from '@/utils/theme';

export const Skills: React.FC = () => (
  <section css={wrapper}>
    <div css={contentWrapper}>
      <Heading>Skills</Heading>
      <SkillContent />
    </div>
  </section>
);
const wrapper = css({
  background: theme.colors.white,
  padding: '0 0 100px',
  '@media (min-width: 600px)': {
    padding: '0 0 180px',
  },
  '@media (min-width: 1025px)': {
    padding: '0 0 300px',
  },
});

const contentWrapper = css({
  width: '90%',
  margin: '0 auto',
  maxWidth: '800px',
});
