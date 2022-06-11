import React from 'react';

import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';

import { routes } from '@/config/routes';
import { Main } from '@/ui/pages/Main';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.main} element={<Main />} />
    </Switch>
  </BrowserRouter>
);
