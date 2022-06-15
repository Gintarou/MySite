import React from 'react';

import { css } from '@emotion/react';

import { SkillContent } from '@/ui/molecules/SkillContent';
import { theme } from '@/utils/theme';

export const Skills: React.FC = () => (
  <section css={wrapper}>
    <div css={contentWrapper}>
      <h1 css={heading}>Skills</h1>
      <SkillContent />
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
  maxWidth: '1024px',
});

const heading = css({
  color: '#00000016',
  fontSize: '220px',
  fontWeight: 900,
  opacity: '1',
});
