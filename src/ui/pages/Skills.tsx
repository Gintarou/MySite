import React from 'react';

import { css } from '@emotion/react';
import { useInView } from 'react-intersection-observer';

import { theme } from '@/utils/theme';

export const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    rootMargin: '-300px',
    triggerOnce: true,
  });

  return (
    <section css={wrapper}>
      <div css={contentWrapper}>
        <h1 css={heading(inView)} ref={ref}>
          Skills
        </h1>
      </div>
    </section>
  );
};
const wrapper = css({
  background: theme.colors.white,
  height: '800px',
});

const contentWrapper = css({
  width: '90%',
  margin: '0 auto',
});

const heading = (inView: boolean) =>
  css({
    color: '#00000016',
    fontSize: '220px',
    fontWeight: 900,
    opacity: '0',
    transition: '0.2s',
    ...(inView && {
      opacity: '1',
    }),
  });
