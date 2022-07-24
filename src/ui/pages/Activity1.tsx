import React from 'react';

import { css } from '@emotion/react';
import { motion } from 'framer-motion';

export const Activity1: React.FC = () => (
  <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
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
