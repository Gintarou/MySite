import React from 'react';
import { AnimatedRoutes as Routes } from '@/utils/Routes';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '@/ui/organisms/Footer';

export const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <Footer />
  </>
);
