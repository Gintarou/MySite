import React from 'react';

export const SkillContent: React.FC = () => (
  <>
    <p>klsajflksad</p>
    <p>askjdf</p>
  </>
);

// import React from 'react';

// import { css } from '@emotion/react';
// import { useInView } from 'react-intersection-observer';

// import { SkillBar } from '@/ui/atoms/SkillBar';

// export const SkillContent: React.FC = () => {
//   const { ref, inView } = useInView({
//     rootMargin: '-40%',
//     triggerOnce: true,
//   });

//   return (
//     <div css={skillsWrapper}>
//       <div css={skillsTextWrapper}>
//         <p>I entered college in 2018 and started using PC.</p>
//         <p>
//           At the same time, I started studying programming, and now I mainly
//           research using machine learning and doing Web development 🙃
//         </p>
//       </div>
//       <div css={skillsGraphWrapper} ref={ref}>
//         <SkillBar language="HTML・CSS" percent={0.9} isView={inView} />
//         <SkillBar language="React" percent={0.86} isView={inView} />
//         <SkillBar language="TypeScript" percent={0.8} isView={inView} />
//         <SkillBar language="Python" percent={0.79} isView={inView} />
//         <SkillBar language="Rails" percent={0.6} isView={inView} />
//         {/* <SkillBar language="jQuery" percent={0.55} isView={inView} /> */}
//       </div>
//     </div>
//   );
// };

// const skillsWrapper = css({
//   alignItems: 'center',
//   display: 'flex',
//   flexWrap: 'wrap',
//   justifyContent: 'space-between',
//   marginTop: '100px',
// });

// const skillsTextWrapper = css({
//   width: '80%',
//   margin: '0 auto 40px',
//   p: {
//     fontSize: '22px',
//     margin: '0',
//     marginBottom: '14px',
//   },
//   '@media (min-width: 600px)': {
//     margin: '0',
//     width: '40%',
//   },
//   '@media (min-width: 1025px)': {
//     width: '45%',
//   },
// });

// const skillsGraphWrapper = css({
//   width: '80%',
//   margin: '0 auto',
//   '@media (min-width: 600px)': {
//     width: '55%',
//   },
// });
