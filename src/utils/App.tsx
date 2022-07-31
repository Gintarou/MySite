import React from 'react';
import { AnimatedRoutes as Routes } from '@/utils/Routes';
import { Footer } from '@/ui/organisms/Footer';

export const App: React.FC = () => {
  return (
    <>
      <Routes />
      <Footer />
    </>
  );
};
