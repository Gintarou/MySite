import React from 'react';

import { css } from '@emotion/react';

import { About } from '@/ui/components/About';
import { Activity } from '@/ui/components/Activity';
import { Skills } from '@/ui/components/Skills';
import { Top } from '@/ui/components/Top';
import { Wrapper } from '@/ui/organisms/MotionWrapper';
import { theme } from '@/utils/theme';

export const Main: React.FC = () => (
  <Wrapper>
    <Top />
    <div css={bg}>
      <div css={wrapper}>
        <About />
        <Skills />
        <Activity />
      </div>
    </div>
  </Wrapper>
);

const bg = css({
  background: theme.colors.white,
});

const wrapper = css({
  width: '90%',
  margin: '0 auto',
  maxWidth: '800px',
});
