import React from 'react';

import { css } from '@emotion/react';

import { Heading } from '@/ui/atoms/Heading';

import { SectionWrapper } from '../organisms/SectionWrapper';

const bio = [
  {
    year: '1999',
    content: '誕生@大阪',
  },
  {
    year: '2018',
    content: '大阪府立三島高等学校卒業',
  },
  {
    year: '2018',
    content:
      '大学入学をきっかけにPCを手に入れる & プログラミングの勉強を始める',
  },
  {
    year: '2022',
    content:
      '大阪工業大学 ロボティクス&デザイン工学部 システムデザイン工学科 学士過程 卒業',
  },
  {
    year: 'present',
    content:
      '大阪工業大学 ロボティクス&デザイン工学専攻 システムデザインコース 修士課程 在学中',
  },
];

export const Career: React.FC = () => (
  <SectionWrapper>
    <Heading>ケイレキ</Heading>
    {bio.map((c, i) => (
      <div key={i} css={bioRow}>
        <div css={year}>{c.year}</div>
        <div css={content}>{c.content}</div>
      </div>
    ))}
  </SectionWrapper>
);

const bioRow = css({
  alignItems: 'top',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  lineHeight: '1.4em',
  paddingBottom: '1em',
  '&:last-child': {
    paddingBottom: '0',
  },
});

const year = css({
  width: '80px',
});

const content = css({
  width: 'calc(100% - 80px)',
});
