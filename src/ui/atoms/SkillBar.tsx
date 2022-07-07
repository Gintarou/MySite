import React from 'react';

import { css } from '@emotion/react';

type Props = {
  language: string;
  percent: number;
  isView: boolean;
};

export const SkillBar: React.FC<Props> = ({ language, percent, isView }) => (
  <div css={skillBox}>
    <p css={text}>{language}</p>
    <div css={barWrapper}>
      <div css={bar(percent, isView)} />
    </div>
  </div>
);

const skillBox = css({
  alignItems: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  fontSize: '18px',
  height: '1em',
  justifyContent: 'space-between',
  marginBottom: '40px',
  '@media (min-width: 1025px)': {
    // marginBottom: '22px',
  },
});

const text = css({
  textAlign: 'left',
  margin: '0',
  width: '100%',
  fontSize: '16px',
  '@media (min-width: 1025px)': {
    // fontSize: '20px',
    // textAlign: 'center',
    // width: '30%',
  },
});

const barWrapper = css({
  position: 'relative',
  background: '#dddddd',
  height: '100%',
  textAlign: 'center',
  width: '100%',
  '@media (min-width: 1025px)': {
    // width: '70%',
  },
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
