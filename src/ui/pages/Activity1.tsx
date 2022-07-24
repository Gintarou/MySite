import React from 'react';

import { css } from '@emotion/react';
import { motion } from 'framer-motion';

export const Activity1: React.FC = () => (
  <motion.div
    // initial
    initial={{ opacity: 0 }}
    // mounted
    animate={{ opacity: 1 }}
    // unmount
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div css={test}>
      Acitvit y1
      <p>klasjdfklasjf</p>
      <p>klasjdfklasjf</p>
      <p>klasjdfklasjf</p>
      <p>klasjdfklasjf</p>
      <p>klasjdfklasjf</p>
      <p>klasjdfklasjf</p>
      <p>klasjdfklasjf</p>
      <p>klasjdfklasjf</p>
      <p>klasjdfklasjf</p>
      <p>klasjdfklasjf</p>
      <p>klasjdfklasjf</p>
      <p>klasjdfklasjf</p>
    </div>
  </motion.div>
);

const test = css({
  background: 'pink',
});
