import React, { useEffect, useState } from 'react';
import { Routes } from '@/utils/Routes';
import { Loading } from '@/ui/atoms/Loading';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);

    // return setIsLoading(true);
  }, []);

  return <>{isLoading ? <Loading /> : <Routes />}</>;
};
