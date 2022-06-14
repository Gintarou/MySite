import React from 'react';

import { Routes as Switch, Route, BrowserRouter } from 'react-router-dom';

import { routes } from '@/config/routes';
import { Main } from '@/pages/Main';
import { Top } from '@/pages/Top';
import { Skills } from '@/pages/Skills';
import { About } from '@/pages/About';

export const Routes: React.FC = () => (
  // <BrowserRouter>
  //   <Switch>
  //     <Route exact path="/" element={<Main />} />
  //     <Route path={routes.top} element={<Top />} />
  //     <Route path={routes.about} element={<About />} />
  //     <Route path={routes.skills} element={<Skills />} />
  //   </Switch>
  // </BrowserRouter>
  // TODO : Routerの問題解決
  <Main />
);
