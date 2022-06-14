import React from 'react';

import { css } from '@emotion/react';
import { useInView } from 'react-intersection-observer';

import { SkillBar } from '@/ui/atoms/SkillBar';

export const SkillBars: React.FC = () => {
  const { ref, inView } = useInView({
    rootMargin: '-400px',
    triggerOnce: true,
  });

  return (
    <div css={skillsWrapper} ref={ref}>
      <div css={skillsTextWrapper}>
        <p>I&lsquo;ve studied</p>
      </div>
      <div css={skillsGraphWrapper}>
        <SkillBar language="HTML・CSS" percent={0.9} isView={inView} />
        <SkillBar language="React" percent={0.86} isView={inView} />
        <SkillBar language="TypeScript" percent={0.8} isView={inView} />
        <SkillBar language="Python" percent={0.79} isView={inView} />
        <SkillBar language="Rails" percent={0.6} isView={inView} />
        <SkillBar language="jQuery" percent={0.55} isView={inView} />
      </div>
    </div>
  );
};

const skillsWrapper = css({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: '100px',
});

const skillsTextWrapper = css({
  width: '45%',
  p: {
    fontSize: '24px',
  },
});

const skillsGraphWrapper = css({
  width: '55%',
});
