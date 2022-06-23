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
        <Heading color="white">Works</Heading>
        <p css={tmp}>in preparation</p>
      </div>
      <p css={copy}>&copy;2022 Rikuto Ozawa. Allrights reserved</p>
    </section>
  );
};
const wrapper = css({
  background: theme.colors.black,
  bottom: '0',
  color: 'white',
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

const tmp = css({
  textAlign: 'center',
  padding: '100px 0',
  fontSize: '30px',
});

const copy = css({
  top: '50%',
  fontSize: '14px',
  left: '0',
  position: 'absolute',
  transform: 'translateY(-50%)',
  writingMode: 'vertical-lr',
});
