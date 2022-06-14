import React from 'react';

import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';

import { routes } from '@/config/routes';
import { Main } from '@/ui/pages/Main';
import { Top } from '@/ui/pages/Top';
import { Skills } from '@/ui/pages/Skills';
import { About } from '@/ui/pages/About';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.top} element={<Top />} />
      <Route path={routes.about} element={<About />} />
      <Route path={routes.skills} element={<Skills />} />
    </Switch>
  </BrowserRouter>
);
