import React from 'react';

import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
};
export const Wrapper: React.FC<Props> = ({ children }) => (
  <motion.div
    // 初期設定
    initial={{ opacity: 0 }}
    // マウント時
    animate={{ opacity: 1 }}
    // アンマウント
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    {children}
  </motion.div>
);
