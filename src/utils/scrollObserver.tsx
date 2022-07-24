// TODO : レンダリングサイクル問題の改善
import React, { useCallback, useEffect, useState } from 'react';

type ScrollValue = {
  scrollY: number;
};

type Props = {
  children: React.ReactNode;
};

export const ScrollContext = React.createContext<ScrollValue>({
  scrollY: 0,
});

export const ScrollObserver: React.FC<Props> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);
  // TODO: スクロール時のhead再レンダリング問題修正
  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};
