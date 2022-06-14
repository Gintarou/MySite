import React from 'react';

import { css } from '@emotion/react';
import { useInView } from 'react-intersection-observer';

import { SkillBars } from '@/ui/molecules/SkillBars';
import { theme } from '@/utils/theme';

export const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    rootMargin: '-400px',
    triggerOnce: true,
  });

  return (
    <section css={wrapper}>
      <div css={contentWrapper} ref={ref}>
        <h1 css={heading(inView)}>Skills</h1>
        <SkillBars />
      </div>
    </section>
  );
};
const wrapper = css({
  background: theme.colors.white,
  padding: '200px 0',
  height: '800px',
});

const contentWrapper = css({
  width: '90%',
  margin: '0 auto',
  maxWidth: '1024px',
});

const heading = (inView: boolean) =>
  css({
    color: '#00000016',
    fontSize: '220px',
    fontWeight: 900,
    opacity: '0',
    transition: '0.1s',
    ...(inView && {
      opacity: '1',
    }),
  });
