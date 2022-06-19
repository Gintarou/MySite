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
  if (!scroll) return null;

  return (
    <section css={wrapper}>
      <div css={contentWrapper}>
        <Heading color="white">Get in touch?</Heading>
      </div>
      <p css={copy}>&copy;2022 RikutoOzawa. Allrights reserved</p>
    </section>
  );
};
const wrapper = css({
  background: theme.colors.primary,
  bottom: '0',
  minHeight: '100vh',
  paddingBottom: '0',
  position: 'sticky',
  zIndex: '-1',
});

const contentWrapper = css({
  width: '90%',
  margin: '0 auto',
  padding: '100px 0 0',
  maxWidth: '1024px',
});

const copy = css({
  top: '0',
  color: 'white',
  fontSize: '14px',
  left: '50%',
  margin: '5px auto 0',
  position: 'absolute',
  textAlign: 'center',
  transform: 'translateX(-50%)',
});
