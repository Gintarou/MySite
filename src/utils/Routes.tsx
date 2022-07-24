import React from 'react';

import { Main } from '@/ui/pages';
import { Routes, Route, Link } from 'react-router-dom';
import { Activity1 } from '@/ui/pages/Activity1';
import { NotFound } from '@/ui/pages/NotFound';
import { routes } from '@/config/routes';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// NOTE: ルーティングするときはここで
export const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Link to="/">index</Link>
      <Link to="activity1">activity1</Link>

      <AnimatePresence exitBeforeEnter initial={true}>
        <motion.div>
          <Routes location={location} key={location.pathname}>
            <Route path={routes.index} element={<Main />} />
            <Route path={routes.activity1} element={<Activity1 />} />
            <Route path={routes.notFound} element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
