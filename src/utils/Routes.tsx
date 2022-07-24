import React from 'react';

import { AnimatePresence } from 'framer-motion';

import { Main } from '@/ui/pages';
import { Routes, Route } from 'react-router-dom';
import { Activity1 } from '@/ui/pages/Activity1';
import { Activity2 } from '@/ui/pages/Activity2';
import { Activity3 } from '@/ui/pages/Activity3';
import { NotFound } from '@/ui/pages/NotFound';
import { useLocation } from 'react-router-dom';

// NOTE: ルーティングするときはここで
export const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Main />} />
        <Route path="activity1" element={<Activity1 />} />
        <Route path="activity2" element={<Activity2 />} />
        <Route path="activity3" element={<Activity3 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
