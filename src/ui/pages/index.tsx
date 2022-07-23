import React from 'react';

import { css } from '@emotion/react';

import { About } from '@/ui/components/About';
import { Career } from '@/ui/components/Career';
import { Skills } from '@/ui/components/Skills';
import { Top } from '@/ui/components/Top';
import { theme } from '@/utils/theme';

export const Main: React.FC = () => (
  <>
    <Top />
    <div css={bg}>
      <div css={wrapper}>
        <About />
        <Career />
        <Skills />
      </div>
    </div>
  </>
);

const bg = css({
  background: theme.colors.white,
});

const wrapper = css({
  width: '90%',
  margin: '0 auto',
  maxWidth: '800px',
});
