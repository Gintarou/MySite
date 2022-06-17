import React, { useEffect, useState } from 'react';

import { css } from '@emotion/react';

import { Heading } from '@/ui/atoms/Heading';
import { theme } from '@/utils/theme';

export const Contact: React.FC = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  const onScroll: () => void = () => {
    const sc = window.pageYOffset > window.innerHeight;
    setScroll(sc);
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
  });
  if (!scroll) return <div />;

  return (
    <section css={wrapper}>
      <div css={contentWrapper}>
        <Heading color="white">Get in touch</Heading>
      </div>
    </section>
  );
};
const wrapper = css({
  background: theme.colors.black,
  bottom: '0',
  height: '300px',
  padding: '100px 0 100px',
  position: 'sticky',
  zIndex: '-1',
  '@media (min-width: 600px)': {
    padding: '0 0 180px',
  },
  '@media (min-width: 1025px)': {
    padding: '0 0 300px',
  },
});

const contentWrapper = css({
  width: '90%',
  margin: '0 auto',
  maxWidth: '1024px',
});
