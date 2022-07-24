import React from 'react';

import { AnimatePresence } from 'framer-motion';

import { Main } from '@/ui/pages';
import { Routes, Route } from 'react-router-dom';
import { Activity1 } from '@/ui/pages/Activity1';
import { NotFound } from '@/ui/pages/NotFound';
import { routes } from '@/config/routes';
import { useLocation } from 'react-router-dom';

// NOTE: ルーティングするときはここで
export const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path={routes.index} element={<Main />} />
        <Route path={routes.activity1} element={<Activity1 />} />
        <Route path={routes.notFound} element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};
