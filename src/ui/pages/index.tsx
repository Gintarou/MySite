import React from 'react';

import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { About } from '@/ui/components/About';
import { Activity } from '@/ui/components/Activity';
import { Skills } from '@/ui/components/Skills';
import { Top } from '@/ui/components/Top';
import { theme } from '@/utils/theme';

export const Main: React.FC = () => (
  <motion.div
    // initial
    initial={{ opacity: 0 }}
    // mounted
    animate={{ opacity: 1 }}
    // unmount
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Top />
    <div css={bg}>
      <div css={wrapper}>
        <About />
        <Skills />
        <Activity />
      </div>
    </div>
  </motion.div>
);

const bg = css({
  background: theme.colors.white,
});

const wrapper = css({
  width: '90%',
  margin: '0 auto',
  maxWidth: '800px',
});
