import React from 'react';

import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';

import { routes } from '@/config/routes';
import { Main } from '@/ui/pages/Main';
import { Top } from '@/ui/pages/Top';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.top} element={<Top />} />
    </Switch>
  </BrowserRouter>
);
