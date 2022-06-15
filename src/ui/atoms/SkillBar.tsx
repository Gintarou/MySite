import React from 'react';

import { css } from '@emotion/react';

type Props = {
  language: string;
  percent: number;
  isView: boolean;
};

export const SkillBar: React.FC<Props> = ({ language, percent, isView }) => (
  <div css={skillBox}>
    <p
      css={css({
        width: '30%',
        textAlign: 'center',
      })}
    >
      {language}
    </p>
    <div css={barWrapper}>
      <div css={bar(percent, isView)} />
    </div>
  </div>
);

const skillBox = css({
  alignItems: 'center',
  display: 'flex',
  fontSize: '18px',
  height: '20px',
  justifyContent: 'space-between',
  marginBottom: '22px',
});

const barWrapper = css({
  position: 'relative',
  background: '#dddddd',
  height: '100%',
  width: '70%',
});

const bar = (percent: number, isView: boolean) =>
  css({
    background: '#222222',
    height: '100%',
    left: '0',
    position: 'absolute',
    top: '0',
    transition: '0.8s',
    width: '0px',
    ...(isView && {
      width: `calc(${percent * 100}%)`,
    }),
  });
