import React from 'react';

import { css } from '@emotion/react';
// import { useInView } from 'react-intersection-observer';

// import { SkillBar } from '@/ui/atoms/SkillBar';

export const SkillContent: React.FC = () => {
  // const { ref, inView } = useInView({
  //   rootMargin: '-35%',
  //   triggerOnce: true,
  // });
  console.log();
  return (
    <div css={skillsWrapper}>
      <p>準備中</p>
      {/* <div css={skillsTextWrapper}>
        <p>初めて触れた言語がWeb開発を行うための言語だったため、少しWeb色が強めなスキルになっています。</p>
        <p></p>
      </div>
      <div css={skillsGraphWrapper} ref={ref}>
        <SkillBar language="HTML・CSS" percent={0.9} isView={inView} />
        <SkillBar language="React" percent={0.86} isView={inView} />
        <SkillBar language="TypeScript" percent={0.8} isView={inView} />
        <SkillBar language="Python" percent={0.79} isView={inView} />
        <SkillBar language="Rails" percent={0.6} isView={inView} />
      </div> */}
    </div>
  );
};

const skillsWrapper = css({
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginTop: '100px',
});

// const skillsTextWrapper = css({
//   width: '80%',
//   margin: '0 auto 40px',
//   p: {
//     margin: '0',
//     marginBottom: '14px',
//   },
//   '@media (min-width: 600px)': {
//     margin: '0',
//     width: '40%',
//   },
// });

// const skillsGraphWrapper = css({
//   width: '80%',
//   margin: '0 auto',
//   '@media (min-width: 600px)': {
//     width: '55%',
//   },
//   '@media (min-width: 1025px)': {
//     width: '50%',
//   },
// });
