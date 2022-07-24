import React from 'react';
import { AnimatedRoutes as Routes } from '@/utils/Routes';
import { BrowserRouter } from 'react-router-dom';

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
